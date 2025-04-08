import Link from "next/link";
import { usePathname } from "next/navigation";

const activeLinkStyles = `
after:content-['']
after:absolute
after:h-[8px]
after:left-0
after:right-0
after:bottom-[-4px]
after:bg-orange-500
after:rounded-2xl`;

const hoverLinkStyles = `
hover:after:content-['']
hover:after:absolute
hover:after:h-[8px]
hover:after:left-0
hover:after:right-0
hover:after:bottom-[-4px]
hover:after:bg-white
hover:after:rounded-2xl`;

export default function HeaderLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      // EF: aria-current is chosen for accessibility to indicate the current page semantically
      aria-current={isActive ? "page" : undefined}
      className={`relative text-sm h-[44px] flex items-center ${hoverLinkStyles}`}
    >
      {label}
    </Link>
  );
}
