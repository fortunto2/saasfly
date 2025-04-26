import Link from "next/link";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";

import { UserAuthForm } from "~/components/user-auth-form";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

export default async function RegisterPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div
      className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
      data-oid="qq4v7k0"
    >
      <Link
        href={`/${lang}/login`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8",
        )}
        data-oid="kia9m_7"
      >
        {dict.marketing.login}
      </Link>
      <div className="hidden h-full bg-muted lg:block" data-oid="gbuse:f" />
      <div className="lg:p-8" data-oid="vrbr-ty">
        <div
          className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
          data-oid="0q4cm01"
        >
          <div
            className="flex flex-col space-y-2 text-center"
            data-oid="qp1-cq:"
          >
            {/*<Icons.Logo className="mx-auto h-6 w-6" />*/}
            <h1
              className="text-2xl font-semibold tracking-tight"
              data-oid="z66c0.n"
            >
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground" data-oid="mrau_ar">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm
            lang={lang}
            dict={dict.login}
            disabled={true}
            data-oid="_rsuept"
          />

          <p
            className="px-8 text-center text-sm text-muted-foreground"
            data-oid="n3.7.ti"
          >
            By clicking continue, you agree to our{" "}
            <Link
              href={`/${lang}/terms`}
              className="hover:text-brand underline underline-offset-4"
              data-oid="6nzol--"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href={`/${lang}/privacy`}
              className="hover:text-brand underline underline-offset-4"
              data-oid="505gx9q"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
