"use client";

import Image from "next/image";
import Input, { InputProps } from "./Input";

export type FormInputProps = InputProps & {
  label: string;
  description?: string;
  icon?: string;
  formClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInput({
  label,
  icon,
  description,
  formClassName = "",
  error,
  className,
  ...restInputProps
}: FormInputProps) {
  const inputId = label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className={`flex flex-col mt-3 mb-6 ${formClassName}`}>
      <label className="flex items-center font-semibold mb-2" htmlFor={inputId}>
        {icon && (
          <Image
            src={icon}
            alt={label}
            width={16}
            height={16}
            className="mr-2"
          />
        )}
        {label}
      </label>
      {description && (
        <p className="text-gray-700 text-sm mt-[-6px] mb-2">{description}</p>
      )}

      <div className="relative">
        <Input
          id={inputId}
          className={`w-full ${error ? "border-red-500" : ""} ${
            className || ""
          }`}
          {...restInputProps}
        />
        <Image
          src="/icons/exclamation.svg"
          className={`${
            error ? "block" : "hidden"
          } absolute right-4 top-1/2 transform -translate-y-1/2`}
          alt={label}
          height={20}
          width={5}
          unoptimized
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
