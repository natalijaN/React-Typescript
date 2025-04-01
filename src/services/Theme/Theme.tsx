import { useEffect, useState } from "react";
import configService from "../ConfigService";
import { DARK, LIGHT } from "../../shared/constants";
import Button from "../../components/Button/Button";

const Theme = () => {
  const [config, setConfig] = useState(configService.getInstance());
  const [theme, setTheme] = useState(LIGHT);

  useEffect(() => {
    setTheme(config.getTheme().theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = config.getTheme().theme === LIGHT ? DARK : LIGHT;
    config.setTheme(newTheme);
    setConfig(configService.getInstance());
    setTheme(newTheme);
  };

  const buttonStyle = theme === LIGHT ? "bg-emerald-300" : "bg-emerald-500";

  return (
    <Button
      type="submit"
      extraClass={`${buttonStyle}`}
      handleButtonClick={() => toggleTheme()}
    >
      Toggle Theme
    </Button>
  );
};

export default Theme;
