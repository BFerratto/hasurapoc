import React, { InputHTMLAttributes, useState, useEffect } from "react";

export type OnChange = (val: string) => void;
export type Props = InputHTMLAttributes<HTMLInputElement> & {
  onChange?: OnChange;
  label?: string;
  error?: string;
};
export const testid = "Input";
export const Input: React.FC<Props> = ({
  value,
  onChange,
  label,
  error,
  ...props
}) => {
  const [currentValue, setValue] = useState(value);
  useEffect(() => {
    setValue(value);
  }, [value]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <>
      <div data-testid={testid}>
        {!!label && <label data-testid={`${testid}_label`}>{label}</label>}
        <input value={currentValue} {...props} onChange={handleChange}></input>
        {!!error && <h4 data-testid={`${testid}_error`}>{error}</h4>}
      </div>
    </>
  );
};
