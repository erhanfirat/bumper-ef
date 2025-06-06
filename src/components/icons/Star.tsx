export default function Star({
  width = 16,
  height = 16,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
    >
      <path d="M15.5763 5.81999H9.75326L7.96074 0.283325L6.1576 5.81999L0.33461 5.80937L5.04394 9.23529L3.2408 14.772L7.95013 11.346L12.6595 14.772L10.8669 9.23529L15.5763 5.81999Z" />
    </svg>
  );
}
