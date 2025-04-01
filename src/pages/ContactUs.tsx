import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import configService from "../services/ConfigService";
import { useEffect, useState } from "react";
import LoggerFactory from "../services/Logger/LoggerFactory";
import { LIGHT } from "../shared/constants";

const ContactUs = () => {
  const [config, setConfig] = useState(configService.getInstance());
  const [theme, setTheme] = useState(LIGHT);

  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm();

  useEffect(() => {
    setTheme(config.getTheme().theme);
    setConfig(configService.getInstance());
  }, []);

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const handleFactoryPatternExample = () => {
    const loggerFactory = new LoggerFactory();
    const consoleLogger = loggerFactory.createLogger("console");
    consoleLogger.log("Submit user form");
  };

  return (
    <div
      id="contactus"
      className={`${
        theme === LIGHT ? "bg-emerald-50" : "bg-emerald-200"
      } "h-full  mx-aut p-48`}
    >
      <div>
        <span className={`${theme === LIGHT ? "" : ""} text-primary-500`}>
          CONTACT US
        </span>{" "}
        for more informations
      </div>

      <p className="my-5">
        Lorem ipsum dolor sit amet. Rem autem voluptates et aspernatur
        voluptates aut exercitationem modi et similique culpa. Eos itaque
        excepturi ab sunt repudiandae hic labore eaque sed quae nemo id optio
        ipsam id impedit incidunt aut assumenda corrupti!
      </p>
      <div className="mt-10 justify-between gap-16 md:flex">
        <div className="mt-20 basis-3/5 md:mt-0">
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/your@email.com"
            method="POST"
          >
            <Input
              type="text"
              placeholder="NAME"
              labelText="Enter Your Name"
              value={getValues("name")}
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className=" text-red-500">
                {errors.name.type === "required" && "Name is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <Input
              type="text"
              placeholder="EMAIL"
              labelText="Enter Your Email"
              value={getValues("email")}
              {...register("email", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.email && (
              <p className=" text-red-500">
                {errors.email.type === "required" && "Email is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <div className="mt-8">
              <Button
                type="submit"
                handleButtonClick={() => handleFactoryPatternExample()}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
