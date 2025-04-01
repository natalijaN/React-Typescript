import ConsoleLogger from "./ConsoleLogger";
import FileLogger from "./FileLogger";

export interface ILogger {
  log(message: string): void;
}

class LoggerFactory {
  createLogger(logLevel: string): ILogger {
    switch (logLevel) {
      case "console":
        return new ConsoleLogger();
      case "file":
        return new FileLogger();
      default:
        throw new Error("Invalid log level.");
    }
  }
}

export default LoggerFactory;
