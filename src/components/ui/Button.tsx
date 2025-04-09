import Image from "next/image";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  className?: string;
  "aria-label"?: string;
};

export default function Button({
  label,
  icon,
  onClick,
  variant = "primary",
  size = "md",
  rounded = false,
  className = "",
  "aria-label": ariaLabel,
  ...htmlBtnAttrs
}: ButtonProps) {
  const baseStyles = `group transition-all flex items-center justify-center font-medium 
    focus:outline-none cursor-pointer hover:text-white ${
      rounded ? "rounded-full" : "rounded-md"
    } `;

  const variantStyles = {
    primary: "bg-green-500 text-black border border-black hover:bg-green-400",
    secondary: "bg-black text-white border border-white hover:bg-gray-800",
    tertiary: "bg-transparent text-black hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const sizeIcon = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel || label}
      {...htmlBtnAttrs}
    >
      {label}
      {icon && (
        <Image
          src={icon}
          alt=""
          width={sizeIcon[size]}
          height={sizeIcon[size]}
          className="transition-all ml-2 group-hover:brightness-0 group-hover:invert"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
