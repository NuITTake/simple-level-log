const logger = require('./logger.js');

function testLogger(testDescription) {
  console.log('=================================================================================');
  console.log(`${testDescription}: Begin.`);
  console.log('---------------------------------------------------------------------------------');
  logger.logStatus();
  console.log('---------------------------------------------------------------------------------');
  logger.error(new Error('This is an error message'));
  logger.warn('This is a warn message');
  logger.info('This is an info message');
  logger.log('This is a log message');
  logger.debug('This is a debug message');
  logger.trace('This is a trace message');
  logger.verbose('This is a verbose message');
  console.log('---------------------------------------------------------------------------------');
  console.log(`${testDescription}: End.`);
  console.log('=================================================================================');
}

// Test with default settings
testLogger('Test with default settings');

// Test with All On
logger.setAllOn();
testLogger('Test with all ON');

// Test with All Off
logger.setAllOff();
testLogger('Test with all OFF');

// Test with isDebugOn = true
logger.isDebugOn = true;
testLogger('Test with isDebugOn = true');

// Test by setting level to WARN, this will set isWarnOn and isErrorOn to true and others to false.
logger.setLevel(logger.Levels.WARN);
testLogger('Test by setting level to WARN');

// Test with All Off, level is set to INFO and isVerboseOn set to true, with this log, debug, and trace will be turned off.
logger.setAllOff();
logger.setLevel(logger.Levels.INFO);
logger.isVerboseOn = true;
testLogger('Test with All Off, level is set to INFO and isVerboseOn set to true');
