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
    <div className="flex min-h-screen flex-col space-y-6" data-oid="1wc1.bn">
      <header
        className="sticky top-0 z-40 border-b bg-background"
        data-oid="jff.uf2"
      >
        <div
          className="container flex h-16 items-center justify-between py-4"
          data-oid="cru.sls"
        >
          <MainNav
            items={dashboardConfig.mainNav}
            params={{ lang: `${lang}` }}
            data-oid="dzq71xo"
          />

          <div className="flex items-center space-x-3" data-oid="hkwhc-k">
            <LocaleChange url={"/dashboard"} data-oid="hw1fwb1" />
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
              params={{ lang: `${lang}` }}
              dict={dict.dropdown}
              data-oid="x_wa:1:"
            />
          </div>
        </div>
      </header>
      <div
        className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]"
        data-oid="yxge3h5"
      >
        <aside className="hidden w-[200px] flex-col md:flex" data-oid="fgaob7r">
          <DashboardNav
            items={dashboardConfig.sidebarNav}
            params={{ lang: `${lang}` }}
            data-oid="6lv4:7u"
          />
        </aside>
        <main
          className="flex w-full flex-1 flex-col overflow-hidden"
          data-oid="flghh60"
        >
          {children}
        </main>
      </div>
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
        data-oid="8sbishc"
      />
    </div>
  );
}
