"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useToast } from "./use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="6ed2yzo">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="zh5_gxx">
            <div className="grid gap-1" data-oid="p-qvrb3">
              {title && <ToastTitle data-oid="dw.l6kh">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="0lt6cy6">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="2siy2--" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="wrdnfnq" />
    </ToastProvider>
  );
}
