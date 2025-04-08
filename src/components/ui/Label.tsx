import Image from "next/image";
import { LabelHTMLAttributes, PropsWithChildren } from "react";

type FormInputProps = PropsWithChildren<
  LabelHTMLAttributes<HTMLLabelElement>
> & {
  label: string;
  icon?: string;
  formClassName?: string;
};

export default function FormInput({
  label,
  icon,
  formClassName = "",
  children,
}: FormInputProps) {
  return (
    <div className={`flex flex-col mt-3 mb-6 ${formClassName}`}>
      <label className="flex items-center font-semibold mb-2">
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
      {children}
    </div>
  );
}
