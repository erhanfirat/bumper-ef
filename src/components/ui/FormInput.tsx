import Image from "next/image";
import Input, { InputProps } from "./Input";
import { UseFormRegisterReturn } from "react-hook-form";

type OptionData = {
  label: string;
  value: string;
};

type FormInputProps = InputProps & {
  label: string;
  description?: string;
  icon?: string;
  formClassName?: string;
  options?: OptionData[];
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
};

export default function FormInput({
  label,
  icon,
  description,
  formClassName = "",
  options = [],
  error,
  register,
  ...htmlInputAttrs
}: FormInputProps) {
  const { className, ...restHtmlInputAttrs } = htmlInputAttrs;
  const inputId = label.replace(/\s+/g, "-").toLowerCase();

  const generateInputRadioIcons = () => {
    if (htmlInputAttrs.type === "radio") {
      if (error) {
        return (
          <Image
            src="/icons/exclamation.svg"
            className="block"
            alt={label}
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
              alt={label}
              width={20}
              height={20}
              unoptimized
            />
            <Image
              src="/icons/plus.svg"
              className="peer-checked:hidden block peer-invalid:hidden"
              alt={label}
              width={20}
              height={20}
              unoptimized
            />
          </>
        );
      }
    }
    return null;
  };

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

      {htmlInputAttrs.type === "radio" ? (
        <div className="flex gap-2">
          {options.map((option) => {
            return (
              <label
                key={option.value}
                className={`flex items-center justify-between gap-4 px-4 py-2 border 
                  border-black rounded-full cursor-pointer
                  transition-colors hover:bg-[#DCE6E6]
                  has-[:checked]:bg-black has-[:checked]:text-white
                  ${error ? "border-red-500" : ""}`}
              >
                <input
                  value={option.value}
                  className="peer hidden"
                  {...htmlInputAttrs}
                />
                <span className=" font-medium">{option.label}</span>
                {generateInputRadioIcons()}
              </label>
            );
          })}
        </div>
      ) : (
        <div className="relative">
          <Input
            id={inputId}
            className={`w-full ${error ? "border-red-500" : ""} ${
              className || ""
            }`}
            {...restHtmlInputAttrs}
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
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
