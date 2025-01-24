import chalk from 'chalk';
import util from 'util';

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
    private static formatMessage(level: LogLevel, message: string, ...args: unknown[]): string {
        const timestamp = new Date().toISOString();
        const levelStyle = Logger.getLevelStyle(level);
        const formattedArgs = args
            .map((arg) => (typeof arg === 'object' ? util.inspect(arg) : String(arg)))
            .join(' ');
        
        return `${ timestamp } ${ levelStyle }: ${ message } ${ formattedArgs }`.trim();
    }
    
    private static getLevelStyle(level: LogLevel): string {
        switch (level) {
            case 'info':
                return chalk.blue('[INFO]');
            case 'warn':
                return chalk.yellow('[WARN]');
            case 'error':
                return chalk.red('[ERROR]');
            case 'debug':
                return chalk.gray('[DEBUG]');
            default:
                return chalk.white(`[${ (level as string).toUpperCase() }]`);
        }
    }
    
    public static info(message: string, ...args: unknown[]): void {
        const formatted = Logger.formatMessage('info', message, ...args);
        console.log(formatted);
    }
    
    public static warn(message: string, ...args: unknown[]): void {
        const formatted = Logger.formatMessage('warn', message, ...args);
        console.warn(formatted);
    }
    
    public static error(message: string, ...args: unknown[]): void {
        const formatted = Logger.formatMessage('error', message, ...args);
        console.error(formatted);
    }
    
    public static debug(message: string, ...args: unknown[]): void {
        if (process.env.DEBUG === 'true') {
            const formatted = Logger.formatMessage('debug', message, ...args);
            console.log(formatted);
        }
    }
}

/**
 * Logger utility class for logging messages to the console.
 */
export default Logger;
