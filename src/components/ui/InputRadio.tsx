"use client";

import Image from "next/image";
import { InputProps } from "./Input";

export type InputRadioProps = InputProps & {
  label: string;
  "data-test"?: string;
};

export default function InputRadio({
  error,
  label = "",
  ...htmlInputAttrs
}: InputRadioProps) {
  const { "data-test": dataTest, ...restInputAttrs } = htmlInputAttrs;
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
        data-test={dataTest}
      >
        <input type="radio" className="peer hidden" {...restInputAttrs} />
        <span className="font-medium">{label}</span>
        {generateInputRadioIcons()}
      </label>
    </>
  );
}
