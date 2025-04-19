import Link from "next/link";
import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

export function FinalCta({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  return (
    <div
      className="w-full py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-3xl"
      data-oid="emm0z9a"
    >
      <div
        className="flex flex-col items-center text-center max-w-3xl mx-auto px-4"
        data-oid="h5hu:8x"
      >
        <h2 className="text-3xl font-bold mb-6" data-oid="vm_sz1a">
          {dict?.final_cta ?? ""}
        </h2>

        <Link href="/signup" data-oid="4b7i7d0">
          <Button
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg px-8 py-6 h-14 font-medium mb-3"
            data-oid="la63slc"
          >
            {dict?.get_started ?? "Start Creating for Free"}
            <Icons.ArrowRight className="h-5 w-5 ml-2" data-oid="u_jzb.." />
          </Button>
        </Link>

        <p
          className="text-sm text-neutral-500 dark:text-neutral-400"
          data-oid="9w43_x2"
        >
          {dict?.no_credit_card ?? "No credit card required"}
        </p>
      </div>
    </div>
  );
}
