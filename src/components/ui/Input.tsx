"use client";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};

export default function Input({
  type = "text",
  error,
  className = "",
  ...htmlInputAttrs
}: InputProps) {
  return (
    <>
      <input
        type={type}
        className={`border rounded-full px-4 py-2 focus:outline-none ${
          error ? "border-red-500" : "border-black"
        } ${className}`}
        {...htmlInputAttrs}
      />
    </>
  );
}
