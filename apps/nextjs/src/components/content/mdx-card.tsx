import Link from "next/link";

import { cn } from "@saasfly/ui";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  disabled?: boolean;
}

export function MdxCard({
  href,
  className,
  children,
  disabled,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg",
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}
      {...props}
      data-oid="o9tu1ql"
    >
      <div
        className="flex flex-col justify-between space-y-4"
        data-oid="ona82y2"
      >
        <div
          className="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-muted-foreground"
          data-oid="2mw9v:b"
        >
          {children}
        </div>
      </div>
      {href && (
        <Link
          href={disabled ? "#" : href}
          className="absolute inset-0"
          data-oid="5841lqt"
        >
          <span className="sr-only" data-oid="bhnf254">
            View
          </span>
        </Link>
      )}
    </div>
  );
}
