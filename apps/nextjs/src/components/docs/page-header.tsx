import { cn } from "@saasfly/ui";

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props} data-oid="tqwu-ho">
        <h1
          className="font-heading inline-block text-4xl lg:text-5xl"
          data-oid="v1og41:"
        >
          {heading}
        </h1>
        {text && (
          <p className="text-xl text-muted-foreground" data-oid="1:w26qr">
            {text}
          </p>
        )}
      </div>
      <hr className="my-4" data-oid="dwiutku" />
    </>
  );
}
