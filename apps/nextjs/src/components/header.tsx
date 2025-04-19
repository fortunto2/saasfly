interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2" data-oid="8qidvs3">
      <div className="grid gap-1" data-oid="gj42l43">
        <h1 className="font-heading text-3xl md:text-4xl" data-oid="rk069hx">
          {heading}
        </h1>
        {text && (
          <p className="text-lg text-muted-foreground" data-oid="jzygja5">
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
