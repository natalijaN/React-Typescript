import { ILogger } from "./LoggerFactory";

class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log(`[ConsoleLogger] ${message}`);
  }
}

export default ConsoleLogger;
