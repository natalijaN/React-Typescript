import { LIGHT } from "../shared/constants";

type Config = {
  theme: string;
};

class ConfigService {
  private static instance: ConfigService;
  private config: { theme: string };

  private constructor() {
    this.config = {
      theme: LIGHT,
    };
  }

  public static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService();
    }
    return ConfigService.instance;
  }

  public getTheme(): Config {
    return this.config;
  }

  public setTheme(theme: string): void {
    this.config = { ...this.config, theme };
  }
}

export default ConfigService;
