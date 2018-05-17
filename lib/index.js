/**
 * A wrapper for winston logger exposing basic APIs
 */

const winston = require('winston');

module.exports = class Logger {

    /**
     * @param {Boolean} enableFileLog - whether to allow file logging
     */
    constructor(enableFileLog = false) {
        this.logger = new winston.Logger({
            transports: this.initTransports(enableFileLog),
            levels: {
                debug: 3,
                info: 2,
                warn: 1,
                error: 0
            },
            exitOnError: false
        });

        winston.addColors({
            debug: 'white',
            info: 'green',
            warn: 'yellow',
            error: 'red'
        });
    }

    initTransports(enableFileLog) {
        let transports = [];
        if (enableFileLog) {
            transports.push(
                new winston.transports.File({
                    filename: 'app-filelog.log',
                    level: 'info',
                    maxsize: 5242880, // 5MB
                    json: true,
                    colorize: false
                })
            );
        }
        
        transports.push(
            new winston.transports.Console({
                name: 'console-log',
                colorize: true,
                level: 'debug',
                handleExceptions: true
            })
        );
        return transports;
    }

    /**
     * Creates a debug log
     * @param {Any} data - the data to log
     */
    debug(data) {
        this.logger.debug(data);
    }

    /**
     * Creates an information log
     * @param {Any} data - the data to log
     */
    info(data) {
        this.logger.info(data);
    }

    /**
     * Creates an app warning log
     * @param {Any} data - the data to log
     */
    warn(data) {
        this.logger.warn(data);
    }

    /**
     * Creates an app error log
     * @param {Any} data - the data to log
     */
    error(data) {
        this.logger.error(data);
    }
};