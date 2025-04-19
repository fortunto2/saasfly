"use client";

import { Drawer } from "vaul";

import { cn } from "@saasfly/ui";
import { Dialog, DialogContent, DialogTitle } from "@saasfly/ui/dialog";

import useMediaQuery from "~/hooks/use-media-query";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModal: () => void;
}

export function Modal({
  children,
  className,
  showModal,
  setShowModal,
}: ModalProps) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={showModal} onClose={setShowModal} data-oid="9iyietd">
        <Drawer.Overlay
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          data-oid="cmz2pb0"
        />

        <Drawer.Portal data-oid="o9mglty">
          <Drawer.Content
            className={cn(
              "fixed inset-x-0 bottom-0 z-50 mt-24 overflow-hidden rounded-t-2xl border bg-background",
              className,
            )}
            data-oid="ns33a_s"
          >
            <div
              className="sticky top-0 z-20 flex w-full items-center justify-center bg-inherit"
              data-oid="h17ez81"
            >
              <div
                className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20"
                data-oid="rzwob9z"
              />
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay data-oid="1veel3c" />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <Dialog open={showModal} onOpenChange={setShowModal} data-oid="vhbtwes">
      <DialogTitle data-oid="1pwli5z"></DialogTitle>
      <DialogContent
        className="overflow-hidden p-0 md:max-w-md md:rounded-2xl md:border"
        data-oid="6uygs2."
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
