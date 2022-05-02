import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes <HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: Props) => {

  return (
    <label>
      <span>{label}</span>
      <input {...props} />
    </label>
  )
};

export default Input;{  }
