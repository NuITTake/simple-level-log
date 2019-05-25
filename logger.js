module.exports = {

    // Boolean flags to control individual log methods.
    isVerboseOn: true,
    isTraceOn: true,
    isDebugOn: true,
    isInfoOn: true,
    isWarnOn: true,
    isErrorOn: true,

    Leveles: {
        ALL: 7,
        VERBOSE: 6,
        TRACE: 5,
        DEBUG: 4,
        INFO: 3,
        WARN: 2,
        ERROR: 1,
        NONE: 0
    },

    logStatus() {
        console.log(`isVerboseOn: ${this.isVerboseOn}`)
        console.log(`isTraceOn: ${this.isTraceOn}`)
        console.log(`isDebugOn: ${this.isDebugOn}`)
        console.log(`isInfoOn: ${this.isInfoOn}`)
        console.log(`isWarnOn: ${this.isWarnOn}`)
        console.log(`isErrorOn: ${this.isErrorOn}`)
    },

    setLeve(level) {
        let newLevel = level
        if (level < this.Leveles.NONE) {
            newLevel = this.Leveles.NONE
        } else if (level > this.Leveles.ALL) {
            newLevel = this.Leveles.ALL
        }

        this.isVerboseOn = true
        this.isTraceOn = true
        this.isDebugOn = true
        this.isInfoOn = true
        this.isWarnOn = true
        this.isErrorOn = true

        switch (newLevel) {
            case this.Leveles.NONE:
                this.isErrorOn = false
            case this.Leveles.ERROR:
                this.isWarnOn = false
            case this.Leveles.WARN:
                this.isInfoOn = false
            case this.Leveles.INFO:
                this.isDebugOn = false
            case this.Leveles.DEBUG:
                this.isTraceOn = false
            case this.Leveles.TRACE:
                this.isVerboseOn = false
        }
    },

    setAllOn() {
        this.setLeve(this.Leveles.ALL)
    },

    setAllOff() {
        this.setLeve(this.Leveles.NONE)
    },

    verbose(message) {
        if (true !== this.isVerboseOn) {
            return
        }
        console.log(`[v]: ${message}`)
    },

    trace(message) {
        if (true !== this.isTraceOn) {
            return
        }
        console.trace(`[t]: ${message}`)
    },

    debug(message) {
        if (true !== this.isDebugOn) {
            return
        }
        console.debug(`[d]: ${message}`)
    },

    info(message) {
        if (true !== this.isInfoOn) {
            return
        }
        console.info(`[i]: ${message}`)
    },

    warn(message) {
        if (true !== this.isWarnOn) {
            return
        }
        console.warn(`[w]: ${message}`)
    },

    error(e) {
        if (true !== this.isWarnOn) {
            return
        }
        console.error(`[e]: ${e}`)
        console.error(e)
    }
}