"use client";

import Image from "next/image";
import { InputProps } from "./Input";

export type InputRadioProps = InputProps & {
  label: string;
};

export default function InputRadio({
  error,
  label = "",
  ...htmlInputAttrs
}: InputRadioProps) {
  const generateInputRadioIcons = () => {
    if (error) {
      return (
        <Image
          src="/icons/exclamation.svg"
          className="block"
          alt="Error"
          height={20}
          width={5}
          unoptimized
        />
      );
    } else {
      return (
        <>
          <Image
            src="/icons/check.svg"
            className="peer-checked:block hidden"
            alt="Not selected"
            width={20}
            height={20}
            unoptimized
          />
          <Image
            src="/icons/plus.svg"
            className="peer-checked:hidden block peer-invalid:hidden"
            alt="Selected"
            width={20}
            height={20}
            unoptimized
          />
        </>
      );
    }
  };

  return (
    <>
      <label
        className={`flex items-center justify-between gap-4 px-4 py-2 border 
                        border-black rounded-full cursor-pointer
                        transition-colors hover:bg-[#DCE6E6]
                        has-[:checked]:bg-black has-[:checked]:text-white
                        ${error ? "border-red-500" : ""}`}
      >
        <input type="radio" className="peer hidden" {...htmlInputAttrs} />
        <span className="font-medium">{label}</span>
        {generateInputRadioIcons()}
      </label>
    </>
  );
}
