// Copyright 2016, Santosh Kalidindi, All rights reserved.

import irc from 'irc';
import MessageHandler from '../services/message-handler';

const twitchIrcEndpoint = 'irc.twitch.tv';
const twitchIrcPort = 6667;

class SkalBot {

  /**
   * For reference:
   * https://github.com/justintv/Twitch-API/blob/master/IRC.md
   */
  constructor(oAuthToken, channel, botname) {
    const handler = new MessageHandler();
    const client = new irc.Client(twitchIrcEndpoint, botname, {
      channels: [`#${channel}`],
      port: twitchIrcPort,
      showErrors: true,
      debug: true,
      autoConnect: false,
    });

    client.addListener('message', (from, to, message) => {
      console.log(`${from} says from channel ${to} => ${message}`);
      handler.parseMessage(client, channel, message, from);
    });

    client.addListener(`join#${channel}`, (user) => {
      console.log(`${user} has joined channel!`);
    });

    client.addListener('error', (message) => {
      console.log('error: ', message);
    });

    this.client = client;
    this.oAuthToken = oAuthToken;
  }

  connect() {
    this.client.connect();
    this.client.send('PASS', `oauth:${this.oAuthToken}`);
    this.client.send('CAP', 'REQ', ':twitch.tv/membership');
  }

}

export default SkalBot;
