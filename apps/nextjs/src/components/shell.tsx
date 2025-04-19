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
    <div data-oid="6b_u39l">
      <div
        className="mb-4 flex items-center justify-between"
        data-oid="nw:w99k"
      >
        <div className="space-y-1" data-oid="z_x_w89">
          <h1
            className="font-cal text-xl font-semibold leading-none"
            data-oid="_6_-k57"
          >
            {props.title}
          </h1>
          {typeof props.description === "string" ? (
            <h2 className="text-base text-muted-foreground" data-oid="w19koms">
              {props.description}
            </h2>
          ) : (
            props.description
          )}
        </div>
        {props.headerAction}
      </div>
      {/*{props.breadcrumb && <Breadcrumbs />}*/}
      <div className={props.className} data-oid="nf-.6sh">
        {props.children}
      </div>
    </div>
  );
}
