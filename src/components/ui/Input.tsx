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
