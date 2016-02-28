// Copyright 2016, Santosh Kalidindi, All rights reserved.

export default (client, channel, message) => {
  if (message.indexOf('!follow') === 0) {
    client.say(`#${channel}`, 'Follow me on twitter @ https://twitter.com/skalidin');
  }
};
