# simple-level-log

Super lightweight easy to use Javascript/Node.js package to write an applicaiton logs using varing level of detail. Like many other popular packages log level can be set as per your applicaiton need. However this package also allow you to selectively turn on or off each log method. 

### Installing

```
npm i simple-level-log
```

### Example-1: Print status of loging methods.

```
const logger = require('simple-level-log/logger');
// Note: By default all loging methods are ON.
logger.logStatus();


Output:

isErrorOn: true
isWarnOn: true
isInfoOn: true
isLogOn: true
isDebugOn: true
isTraceOn: true
isVerboseOn: true
```

### Example-2: Test with default settings (by default all methods are on).

```
const logger = require('./logger.js')

function testLogger(testDescription) {
    console.log('=================================================================================');
    console.log(`${testDescription}: Begin.`);
    console.log('--------------------------------------------------------------');
    logger.logStatus();
    console.log('--------------------------------------------------------------');
    logger.error(new Error('This is an error message'));
    logger.warn('This is a warn message');
    logger.info('This is an info message');
    logger.log('This is a log message');
    logger.debug('This is a debug message');
    logger.trace('This is a trace message');
    logger.verbose('This is a verbose message');
    console.log('--------------------------------------------------------------');
    console.log(`${testDescription}: End.`);
    console.log('==============================================================');
}

// Test with default settings 
testLogger('Test with default settings');


Output:
=================================================================================
Test with default settings: Begin.
---------------------------------------------------------------------------------
isErrorOn: true
isWarnOn: true
isInfoOn: true
isLogOn: true
isDebugOn: true
isTraceOn: true
isVerboseOn: true
---------------------------------------------------------------------------------
Error: This is an error message
    at testLogger (C:\Development\Node.js\simple-level-log\index.js:9:18)
    at Object.<anonymous> (C:\Development\Node.js\simple-level-log\index.js:23:1)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
[W]: This is a warn message
[I]: This is an info message
[L]: This is a log message
[D]: This is a debug message
Trace: [T]: This is a trace message
    at Object.trace (C:\Development\Node.js\simple-level-log\logger.js:117:17)
    at testLogger (C:\Development\Node.js\simple-level-log\index.js:14:12)
    at Object.<anonymous> (C:\Development\Node.js\simple-level-log\index.js:23:1)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
    at startup (internal/bootstrap/node.js:283:19)
[V]: This is a verbose message
---------------------------------------------------------------------------------
Test with default settings: End.
=================================================================================
```


### Example-3: Turn OFF all the methods.

```
const logger = require('./logger.js')

function testLogger(testDescription) {
    console.log('=================================================================================');
    console.log(`${testDescription}: Begin.`);
    console.log('--------------------------------------------------------------');
    logger.logStatus();
    console.log('--------------------------------------------------------------');
    logger.error(new Error('This is an error message'));
    logger.warn('This is a warn message');
    logger.info('This is an info message');
    logger.log('This is a log message');
    logger.debug('This is a debug message');
    logger.trace('This is a trace message');
    logger.verbose('This is a verbose message');
    console.log('--------------------------------------------------------------');
    console.log(`${testDescription}: End.`);
    console.log('==============================================================');
}

// Test with default settings 
testLogger('Test with default settings');


Output:
=================================================================================
Test with all OFF: Begin.
---------------------------------------------------------------------------------
isErrorOn: false
isWarnOn: false
isInfoOn: false
isLogOn: true
isDebugOn: false
isTraceOn: false
isVerboseOn: false
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
Test with all OFF: End.
=================================================================================
```


### Example-4: Set level to INFO, which will turn on info, warn, and error methods.

```
const logger = require('./logger.js')

function testLogger(testDescription) {
    console.log('=================================================================================');
    console.log(`${testDescription}: Begin.`);
    console.log('--------------------------------------------------------------');
    logger.logStatus();
    console.log('--------------------------------------------------------------');
    logger.error(new Error('This is an error message'));
    logger.warn('This is a warn message');
    logger.info('This is an info message');
    logger.log('This is a log message');
    logger.debug('This is a debug message');
    logger.trace('This is a trace message');
    logger.verbose('This is a verbose message');
    console.log('--------------------------------------------------------------');
    console.log(`${testDescription}: End.`);
    console.log('==============================================================');
}

// Test with default settings 
testLogger('Test with default settings');
logger.setAllOff();
logger.setLeve(logger.Levels.INFO);
logger.isVerboseOn = true;


Output:
=================================================================================
Test with All Off, level is set to INFO and isVerboseOn set to true: Begin.
---------------------------------------------------------------------------------
isErrorOn: true
isWarnOn: true
isInfoOn: true
isLogOn: true
isDebugOn: false
isTraceOn: false
isVerboseOn: true
---------------------------------------------------------------------------------
Error: This is an error message
    at testLogger (C:\Development\Node.js\simple-level-log\index.js:9:18)
    at Object.<anonymous> (C:\Development\Node.js\simple-level-log\index.js:46:1)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
[W]: This is a warn message
[I]: This is an info message
[V]: This is a verbose message
---------------------------------------------------------------------------------
Test with All Off, level is set to INFO and isVerboseOn set to true: End.
=================================================================================
```

#### Please see [index.js](https://github.com/NuITTake/simple-level-log/blob/master/index.js) for additional examples.

## Bugs and Issues

If you encounter any bugs or issues, feel free to open an issue at
[github](https://github.com/NuITTake/simple-level-log/issues).


## Contributing

Please email to NuITTake@GMail.Com if you wish to extend a helping hand. 

## Authors

* **Nu IT Take** - NuITTake@GMail.Com

## License

This project is licensed under the MIT License.
