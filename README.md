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

## Example-1: Print status of loging methods.

Please see index.js for detail sample.

```
const logger = require('simple-level-log/logger');
logger.logStatus()

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

## Example-2: Print status of loging methods.

Please see index.js for detail sample.

```
const logger = require('simple-level-log/logger');
logger.logStatus()

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

Please email me on nuittake@gmail.com if you wish to extend a helping hand. 

## Authors

* **New IT Take** - *email address:* - [PurpleBooth](NuITTake@GMail.Com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
