import { useId } from "react";

interface InputProps {
  labelText: string;
  value: string;
  type: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = (props: any) => {
  const { value, name, type, labelText, ...inputProps } = props;
  const inputStyles = `mt-2 w-full rounded-lg border-solid border-black bg-zinc-300 px-5 py-3 placeholder-white`;
  let uniqueId = useId();

  return (
    <>
      <div className="mt-6">
        <label htmlFor={uniqueId}>{labelText}:</label>
        <input
          id={uniqueId}
          {...inputProps}
          name={name}
          type={type}
          value={value}
          className={`${inputStyles}`}
        />
      </div>
    </>
  );
};

export default Input;
