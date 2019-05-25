# simple-level-log

Super lightweight easy to use Javascript/Node.js module to write an applicaiton logs using varing level of detail. Like many other popular modules/packages log level can be set to as per your applicaiton need. However this module also allow you to selectively turn on or off each log method. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

None

### Installing

```
npm i simple-level-log
```

Please see index.js for additional examples.

## Example-1: Print status of loging methods.

```
const logger = require('simple-level-log/logger');
logger.logStatus();


Output:

Test: Stated.
isVerboseOn: true
isTraceOn: true
isDebugOn: true
isInfoOn: true
isWarnOn: true
isErrorOn: true
Test: Finished.
```

## Example-2: How to make bulk chanage and how to control individual metohds

```
const logger = require('simple-level-log/logger');

function testLogger() {
    logger.verbose('This is a verbose message');
    logger.trace('This is a trace message');
    logger.debug('This is a debug message');
    logger.info('This is an info message');
    logger.warn('This is a warn message');
    logger.error(new Error('This is an error message'));
}

console.log('Test: Stated.');
logger.setAllOff(); // All log methods are now turned off. You can call logger.logStatus(); to verify.
logger.setLeve(logger.Leveles.INFO); // Turns on info, warn, and error mothods. verbose, trace, and debug methods are now ineffective.
logger.isVerboseOn = true; // verbose methud has been truned on.
testLogger();
console.log('Test: Finished.');


Output:

Test: Stated.
[v]: This is a verbose message
[i]: This is an info message
[w]: This is a warn message
[e]: Error: This is an error message
Error: This is an error message
    at testLogger (C:\Learning\Nodejs\test-simple-level-log\index.js:9:18)
    at Object.<anonymous> (C:\Learning\Nodejs\test-simple-level-log\index.js:16:1)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
Test: Finished.
```

## Contributing

Please email me on NuITTake@GMail.Com if you wish to extend a helping hand. 

## Authors

* **New IT Take** - *email address:* - [NuITTake@GMail.Com]

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
