import { ILogger } from "./LoggerFactory";

class FileLogger implements ILogger {
  log(message: string): void {
    console.log(`[FileLogger] ${message}`);
  }
}

export default FileLogger;
