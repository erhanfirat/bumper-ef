import Image from "next/image";
import Input, { InputProps } from "./Input";

type FormInputProps = InputProps & {
  label: string;
  icon?: string;
  formClassName?: string;
};

export default function FormInput({
  label,
  icon,
  formClassName = "",
  ...htmlInputAttrs
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
      <Input {...htmlInputAttrs} />
    </div>
  );
}
