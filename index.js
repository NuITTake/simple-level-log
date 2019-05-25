const logger = require('./logger.js')

function testLogger() {
    logger.logStatus()
    logger.verbose('This is a verbose message')
    logger.trace('This is a trace message')
    logger.debug('This is a debug message')
    logger.info('This is an info message')
    logger.warn('This is a warn message')
    logger.error(new Error('This is an error message'))
}

console.log('Test with default settings: Started.')
    // Test with default settings 
testLogger()
console.log('Test with default settings: Finished.')
console.log('==============================================================')

// Test with All On
console.log('Test with all ON settings: Started.')
logger.setAllOn()
testLogger()
console.log('Test with all ON settings: Finished.')
console.log('==============================================================')

// Test with All Off
console.log('Test with all OFF settings: Started.')
logger.setAllOff()
testLogger()
console.log('Test with all OFF settings: Finished.')
console.log('==============================================================')

// Test with isDebugOn = true 
console.log('Test with isDebugOn = true: Started.')
logger.isDebugOn = true
testLogger()
console.log('Test with isDebugOn = true: Finished.')
console.log('==============================================================')

// Test by setting level to WARN, this will set isWarnOn and isErrorOn all other lower ranking levels to false.
console.log('Test by setting level to WARN: Started.')
logger.setLeve(logger.Leveles.WARN)
testLogger()
console.log('Test by setting level to WARN: Finished.')
console.log('==============================================================')

// Test with All Off, level is set to INFO and isVerboseOn set to true, With this trace and debug will be turned off.
console.log('Test with All Off, level is set to INFO and isVerboseOn set to true: Started.')
logger.setAllOff()
logger.setLeve(logger.Leveles.INFO)
logger.isVerboseOn = true
testLogger()
console.log('Test with All Off, level is set to INFO and isVerboseOn set to true: Finished.')
console.log('==============================================================')