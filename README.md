# SkalBot

A simple twitch chat bot for node.js.
    - Ability to customize bot name.
    - More features to come.

## Install
* Create a new twitch account with the username of your bot.
* Go to settings -> connections -> Register your application.
* Follow steps on the page to get your client_id and client_secret.
* Get an oAuth token from http://twitchapps.com/tmi/.
* Copy `config.template.js` as `config.js` and update the properties with your
  twitch credentials you got from the earlier steps.
* Download and install the latest [npm](https://nodejs.org/en/download/)
* Clone this repo with git
* Navigate to the root on this project where package.json is located.
* Run `npm install` followed by `npm run start`
* Your bot should be up and running now!

## TODO
* Update README with install directions.
* Add more cool parsers
* Update documentation
* Possibly implement oAuth authorization with my own web server instead of
  redirecting users to http://twitchapps.com/tmi/

# Thanks
Heavily influenced as a starting point:
https://raw.githubusercontent.com/noobcola/ChillBot

# License
The MIT License (MIT)

Copyright (c) 2016 Santosh Kalidindi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
