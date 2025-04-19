import { notFound } from "next/navigation";

import { getCurrentUser } from "@saasfly/auth";

import { MainNav } from "~/components/main-nav";
import { DashboardNav } from "~/components/nav";
import { SiteFooter } from "~/components/site-footer";
import { UserAccountNav } from "~/components/user-account-nav";
import type { Locale } from "~/config/i18n-config";
import { getDashboardConfig } from "~/config/ui/dashboard";
import { getDictionary } from "~/lib/get-dictionary";

interface EditLayoutProps {
  children?: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export default async function DashboardLayout({
  children,
  params: { lang },
}: EditLayoutProps) {
  const user = await getCurrentUser();
  const dict = await getDictionary(lang);

  const dashboardConfig = await getDashboardConfig({ params: { lang } });
  if (!user) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6" data-oid=":rcjdsi">
      <header
        className="sticky top-0 z-40 border-b bg-background"
        data-oid="axp-avx"
      >
        <div
          className="container flex h-16 items-center justify-between py-4"
          data-oid="_4x1js5"
        >
          <MainNav
            items={dashboardConfig.mainNav}
            params={{ lang: `${lang}` }}
            data-oid="h9407ud"
          />

          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
            params={{ lang: `${lang}` }}
            dict={dict.dropdown}
            data-oid="o8uk.31"
          />
        </div>
      </header>
      <div
        className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]"
        data-oid="0j0gby5"
      >
        <aside className="hidden w-[200px] flex-col md:flex" data-oid="s2pyugr">
          <DashboardNav
            items={dashboardConfig.sidebarNav}
            params={{ lang: `${lang}` }}
            data-oid="rdj9dtx"
          />
        </aside>
        <main
          className="flex w-full flex-1 flex-col overflow-hidden"
          data-oid="dft2e00"
        >
          {children}
        </main>
      </div>
      <SiteFooter
        className="border-t"
        params={{ lang: `${lang}` }}
        dict={dict.common}
        data-oid="8t7y7r3"
      />
    </div>
  );
}
