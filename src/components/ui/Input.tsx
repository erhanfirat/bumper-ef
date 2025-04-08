import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type InputProps<T extends FieldValues = FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?:
      | string
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<T>>
      | undefined;
    className?: string;
    register?: UseFormRegister<T>;
    validationRules?: RegisterOptions;
  };

export default function Input({
  type = "text",
  onChange = () => {},
  error,
  className = "",
  name = "",
  register,
  validationRules = {},
  ...htmlInputAttrs
}: InputProps) {
  return (
    <>
      <input
        type={type}
        {...((register && register(name, validationRules)) || {})}
        onChange={onChange}
        className={`border rounded-full px-4 py-2 focus:outline-none 
          focus:ring-2 focus:ring-green-500 ${
            error ? "border-red-500" : "border-black"
          } ${className}`}
        {...htmlInputAttrs}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </>
  );
}
