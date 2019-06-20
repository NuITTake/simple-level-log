# simple-level-log

Super lightweight easy to use Javascript/Node.js package to write an applicaiton logs using varing level of detail. Like many other popular packages log level can be set as per your applicaiton need. However this package also allow you to selectively turn on or off each log method. 

### Installing

```
npm i simple-level-log
```

### Example-0: A quick overview of how to use logger.

```
const logger = require('simple-level-log/logger');
logger.setLevel(Levels.LOG);

// When level is set to LOG the following methods will be active 
logger.error(new Error('This is an error message'));
logger.warn('This is a warn message');
logger.info('This is an info message');
logger.log('This is a log message');

// When level is set to LOG the following methods will be inactive 
logger.debug('This is a debug message');
logger.trace('This is a trace message');
logger.verbose('This is a verbose message');


Output:

Error: This is an error message
    at Object.<anonymous> (C:\Development\Node.js\simple-level-log\index.js:8:14)
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
const logger = require('simple-level-log/logger');

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
const logger = require('simple-level-log/logger');

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
isLogOn: false
isDebugOn: false
isTraceOn: false
isVerboseOn: false
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
Test with all OFF: End.
=================================================================================
```


### Example-4: Set level to INFO (which will implicitly turn on info, warn, and error methods and turn off remaining methods) and explicitly turn on verbose

```
const logger = require('simple-level-log/logger');

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

// Test with All Off, level is set to INFO and isVerboseOn set to true 
testLogger('Test with All Off, level is set to INFO and isVerboseOn set to true');
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
isLogOn: false
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


### Example-5: Effect of isTraceStackOn when set to true

```
const logger = require('simple-level-log/logger');

logger.setAllOff();
logger.isTraceOn = true;
logger.isTraceStackOn = true; // By default isTraceStackOn is true. This statement is just added for reading clarity.
logger.trace(`This outout has a stack attached to it and it has been prefixed with Trace:`);


Output:

Trace: This outout has a stack attached to it and it has been prefixed with Trace:
    at Object.trace (D:\GitHub\Node.js\simple-level-log\logger.js:125:15)
    at testLogger (D:\GitHub\Node.js\simple-level-log\index.js:14:10)
    at Object.<anonymous> (D:\GitHub\Node.js\simple-level-log\index.js:50:1)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:829:12)
    at startup (internal/bootstrap/node.js:283:19)
```


### Example-6: Effect of isTraceStackOn when set to false

```
const logger = require('simple-level-log/logger');

logger.setAllOff();
logger.isTraceOn = true;
logger.isTraceStackOn = false;
logger.trace(`This outout has a no stack attached to it and it has been prefixed with [T]:`);


Output:

[T]: This outout has a no stack attached to it and it has been prefixed with [T]:
```


### Example-7: Automatic stringification  

```
const logger = require('simple-level-log/logger');

const sampleObject = {
  integer: 100,
  string: 'This is a string member',
  array: [1, 'Sample', 'array', 10.02]
}

//--- Object stringification
logger.log(sampleObject);
//--- Function stringification
logger.log(logger.info);


Output:

[L]: {"integer":100,"string":"This is a string member","array":[1,"Sample","array",10.02]}
[L]: log(message) {
    if (true !== this.isLogOn) {
      return;
    }
    console.log(`[L]: ${this.stringify(message)}`);
  }
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

This project is licensed under the [ISC](https://opensource.org/licenses/ISC) License