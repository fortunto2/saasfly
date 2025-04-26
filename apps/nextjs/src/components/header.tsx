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
    <div className="flex items-center justify-between px-2" data-oid="cmv4len">
      <div className="grid gap-1" data-oid="l5_nb:9">
        <h1 className="font-heading text-3xl md:text-4xl" data-oid="lpcrz28">
          {heading}
        </h1>
        {text && (
          <p className="text-lg text-muted-foreground" data-oid="ogxiiou">
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
