import { ReactNode } from "react";

type Props = {
  type: "submit" | "reset" | "button";
  extraClass?: string;
  handleButtonClick: (value: boolean) => void;
  children: ReactNode;
};

const Button = (props: Props) => {
  const { extraClass, children, type, handleButtonClick, ...buttonProps } =
    props;
  return (
    <button
      {...buttonProps}
      className={`${
        extraClass ? extraClass : "bg-emerald-500"
      } rounded-md  px-10 py-2 hover:bg-primary-500 hover:text-white `}
      type={type}
      onClick={() => handleButtonClick(false)}
    >
      {children}
    </button>
  );
};

export default Button;
