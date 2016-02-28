// Copyright 2016, Santosh Kalidindi, All rights reserved.

import SkalBot from './bots/skalbot';
import config from './config';

const skalbot = new SkalBot(config.oauth_token,
  config.defaultChannel, config.bot_name);
skalbot.connect();
