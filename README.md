# App-Logga
This is a Nodejs application logger. Currently, it wraps the [winston](https://www.npmjs.com/package/winston) NPM package.

## Installation
`npm i -S @phacce/app-logga`

## Usage
```javascript
const Logger = require('app-logga');

let logger = new Logger(true); // arg 'true' enables file logging
logger.debug('Hello some world!');
logger.info('Some infomation in green');
logger.warn('Hey!, this is your last warning before it crashes');
logger.error('Now this is some error');
```
