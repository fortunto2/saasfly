import { notFound } from "next/navigation";

import { getCurrentUser } from "@saasfly/auth";

import { LocaleChange } from "~/components/locale-change";
import { MainNav } from "~/components/main-nav";
import { DashboardNav } from "~/components/nav";
import { SiteFooter } from "~/components/site-footer";
import { UserAccountNav } from "~/components/user-account-nav";
import { i18n, type Locale } from "~/config/i18n-config";
import { getDashboardConfig } from "~/config/ui/dashboard";
import { getDictionary } from "~/lib/get-dictionary";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function DashboardLayout({
  children,
  params: { lang },
}: DashboardLayoutProps) {
  const user = await getCurrentUser();
  const dict = await getDictionary(lang);
  if (!user) {
    return notFound();
  }
  const dashboardConfig = await getDashboardConfig({ params: { lang } });
  return (
    <div className="flex min-h-screen flex-col space-y-6" data-oid="jdx642v">
      <header
        className="sticky top-0 z-40 border-b bg-background"
        data-oid="sq75r7t"
      >
        <div
          className="container flex h-16 items-center justify-between py-4"
          data-oid="sq1._df"
        >
          <MainNav
            items={dashboardConfig.mainNav}
            params={{ lang: `${lang}` }}
            data-oid="trix6y9"
          />

          <div className="flex items-center space-x-3" data-oid="9evh3vv">
            <LocaleChange url={"/dashboard"} data-oid="h26cewa" />
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
              params={{ lang: `${lang}` }}
              dict={dict.dropdown}
              data-oid="-:q-kmp"
            />
          </div>
        </div>
      </header>
      <div
        className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]"
        data-oid="shez2m5"
      >
        <aside className="hidden w-[200px] flex-col md:flex" data-oid="y1i8o8m">
          <DashboardNav
            items={dashboardConfig.sidebarNav}
            params={{ lang: `${lang}` }}
            data-oid="-s3.j0n"
          />
        </aside>
        <main
          className="flex w-full flex-1 flex-col overflow-hidden"
          data-oid="4o.wh09"
        >
          {children}
        </main>
      </div>
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
        data-oid="wc.90p3"
      />
    </div>
  );
}
