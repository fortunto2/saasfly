import { Suspense } from "react";

import { getCurrentUser } from "@saasfly/auth";

import { ModalProvider } from "~/components/modal-provider";
import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";
import type { Locale } from "~/config/i18n-config";
import { getMarketingConfig } from "~/config/ui/marketing";
import { getDictionary } from "~/lib/get-dictionary";

export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const user = await getCurrentUser();
  return (
    <div className="flex min-h-screen flex-col" data-oid="ml8jtwk">
      <Suspense fallback="..." data-oid="ljb4el6">
        <NavBar
          items={
            (await getMarketingConfig({ params: { lang: `${lang}` } })).mainNav
          }
          params={{ lang: `${lang}` }}
          scroll={true}
          user={user}
          marketing={dict.marketing}
          dropdown={dict.dropdown}
          data-oid="tr0p2w:"
        />
      </Suspense>
      <ModalProvider dict={dict.login} data-oid="r8q2hva" />
      <main className="flex-1" data-oid="5vvzwtx">
        {children}
      </main>
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
        data-oid="pv8jc69"
      />
    </div>
  );
}
