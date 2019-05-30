module.exports = {

    // Boolean flags to control individual loging methods.
    isErrorOn: true,
    isWarnOn: true,
    isInfoOn: true,
    isLogOn: true,
    isDebugOn: true,
    isTraceOn: true,
    isVerboseOn: true,
  
    // Higher the level number larger the log output size.
    Levels: {
        NONE: 0,
        ERROR: 1,
        WARN: 2,
        INFO: 3,
        LOG: 4,
        DEBUG: 5,
        TRACE: 6,
        VERBOSE: 7,
        ALL: 8,
    },

    logStatus() {
       console.log(`isErrorOn: ${this.isErrorOn}`);
       console.log(`isWarnOn: ${this.isWarnOn}`);
       console.log(`isInfoOn: ${this.isInfoOn}`);
       console.log(`isLogOn: ${this.isLogOn}`);
       console.log(`isDebugOn: ${this.isDebugOn}`);
       console.log(`isTraceOn: ${this.isTraceOn}`);
       console.log(`isVerboseOn: ${this.isVerboseOn}`);
   },

    setLeve(level) {
        let newLevel = level;
        if (level < this.Levels.NONE) {
            newLevel = this.Levels.NONE;
        } else if (level > this.Levels.ALL) {
            newLevel = this.Levels.ALL;
        }

        this.isErrorOn = true;
        this.isWarnOn = true;
        this.isInfoOn = true;
        this.isLogOn = true;
        this.isDebugOn = true;
        this.isTraceOn = true;
        this.isVerboseOn = true;
     
        switch (newLevel) {
            case this.Levels.NONE:
                this.isErrorOn = false;
            case this.Levels.ERROR:
                this.isWarnOn = false;
            case this.Levels.WARN:
                this.isInfoOn = false;
            case this.Levels.INFO:
                this.isDebugOn = false;
            case this.Levels.LOG:
                this.isDebugOn = false;
            case this.Levels.DEBUG:
                this.isTraceOn = false;
            case this.Levels.TRACE:
                this.isVerboseOn = false;
        }
    },

    setAllOn() {
        this.setLeve(this.Levels.ALL);
    },

    setAllOff() {
        this.setLeve(this.Levels.NONE);
    },

    error(e) {
        if (true !== this.isWarnOn) {
            return;
        }
        // console.error('[E]: ' + e);
        console.error(e);
    },

    warn(message) {
        if (true !== this.isWarnOn) {
            return;
        }
        console.warn(`[W]: ${message}`);
    },

    info(message) {
        if (true !== this.isInfoOn) {
            return;
        }
        console.info(`[I]: ${message}`);
    },

    log(message) {
        if (true !== this.isDebugOn) {
            return;
        }
        console.log(`[L]: ${message}`);
    },
 
    debug(message) {
        if (true !== this.isDebugOn) {
            return;
        }
        console.debug(`[D]: ${message}`);
    },

    trace(message) {
        if (true !== this.isTraceOn) {
            return;
        }
        console.trace(`[T]: ${message}`);
    },

    verbose(message) {
        if (true !== this.isVerboseOn) {
            return;
        }
        console.log(`[V]: ${message}`);
    },
}