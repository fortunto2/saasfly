import * as React from "react";

export function DashboardShell(props: {
  title?: string;
  description?: React.ReactNode;
  breadcrumb?: boolean;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div data-oid="f0vm8ya">
      <div
        className="mb-4 flex items-center justify-between"
        data-oid="1r:psyn"
      >
        <div className="space-y-1" data-oid="rzxx0ok">
          <h1
            className="font-cal text-xl font-semibold leading-none"
            data-oid=".ecc4kn"
          >
            {props.title}
          </h1>
          {typeof props.description === "string" ? (
            <h2 className="text-base text-muted-foreground" data-oid="fgg6-dj">
              {props.description}
            </h2>
          ) : (
            props.description
          )}
        </div>
        {props.headerAction}
      </div>
      {/*{props.breadcrumb && <Breadcrumbs />}*/}
      <div className={props.className} data-oid="xrrmpr_">
        {props.children}
      </div>
    </div>
  );
}
