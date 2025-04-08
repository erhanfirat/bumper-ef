type ButtonProps = {
  label: string;
  icon?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
};

export default function Button({
  label,
  icon,
  onClick,
  variant = "primary",
  size = "md",
  rounded = false,
}: ButtonProps) {
  const baseStyles = `flex items-center justify-center font-medium transition-colors 
    focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${
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
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {label}
      {icon && (
        <img
          src={icon}
          alt={label}
          width={sizeIcon[size]}
          height={sizeIcon[size]}
          className="ml-2"
        />
      )}
    </button>
  );
}
