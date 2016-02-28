// Copyright 2016, Santosh Kalidindi, All rights reserved.

import hello from '../parsers/hello';
import follow from '../parsers/follow';

class MessageHandler {
  constructor() {
    this.handlers = [
      hello,
      follow,
    ];
  }

  parseMessage(client, channel, message, from) {
    for (const handler of this.handlers) {
      handler(client, channel, message, from);
    }
  }
}

export default MessageHandler;
