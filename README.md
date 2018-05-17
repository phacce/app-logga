# App-Logga
This is a Nodejs application logger. Currently, it wraps the [winston](https://www.npmjs.com/package/winston) NPM package.

## Usage
```javascript
const Logger = require('app-logga');

let logger = new Logger(true);
logger.debug('Hello some world!');
logger.error('Now this is some error');
```