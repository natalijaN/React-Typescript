import Button from "../components/Button/Button";
import Theme from "../services/Theme/Theme";
import LoggerFactory from "../services/Logger/LoggerFactory";
import Hero from "../assets/Hero.avif";
import { useEffect, useState } from "react";
import { numberGenerator } from "../utils/generators";
import Card from "../components/Card/Card";
import { CardProps } from "../types/interfaces";

const cars: CardProps[] = [
  {
    country: "",
    description: "",
    name: "",
  },
  {
    country: "UNITED STATES (USA)",
    description: "Passenger Car",
    name: "AMERICAN HONDA MOTOR CO., INC.",
  },
  {
    country: "MEXICO",
    description: "Passenger Car",
    name: "HONDA DE MEXICO, S.A. DE C.V.",
  },
  {
    country: "JAPAN",
    description: "Motorcycle",
    name: "HONDA MOTOR CO., LTD.",
  },
];

const Home = () => {
  const [value, setValue] = useState<number | null>(null);
  const [gen, setGen] = useState<Iterator<number> | null>(null);

  useEffect(() => {
    const generator = numberGenerator(3);
    setGen(generator);
    nextNumber();
  }, []);

  const handleFactoryPatternExample = () => {
    const loggerFactory = new LoggerFactory();
    const fileLogger = loggerFactory.createLogger("file");
    fileLogger.log("Send log to a file!");
  };

  const nextNumber = () => {
    if (gen) {
      const result = gen.next();
      if (!result.done) {
        setValue(result.value);
      } else {
        setValue(0);
      }
    }
  };

  return (
    <div className=" bg-emerald-50 mx-aut p-48 mt-8">
      <h1
        data-testid="cypress-title"
        className="flex justify-center mb-4 basis-3/5 font-montserrat text-3xl font-bold"
      >
        CHOOSE SMART
      </h1>
      <img src={Hero} alt="hero image" width="1150" height="430" />

      <div className="flex items-center justify-between mt-16">
        <Theme />

        <Button
          type="submit"
          handleButtonClick={() => handleFactoryPatternExample()}
        >
          Send log to File
        </Button>
      </div>
      <div className="flex items-center justify-start gap-8 mt-16">
        <p>Click on the button to find you car!</p>

        <Button type="submit" handleButtonClick={() => nextNumber()}>
          Find your dream car
        </Button>
      </div>
      <div>
        {value ? (
          <Card {...cars[value]} />
        ) : value === 0 ? (
          "No more cars!"
        ) : null}
      </div>
    </div>
  );
};

export default Home;
