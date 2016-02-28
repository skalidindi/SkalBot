// Copyright 2016, Santosh Kalidindi, All rights reserved.

export default (client, channel, message) => {
  if (message.indexOf('!hello') === 0) {
    client.say(`#${channel}`,
      `Hey, thanks for checking out my channel!
       Feel free to ask me anything or give me feedback.`);
  }
};
