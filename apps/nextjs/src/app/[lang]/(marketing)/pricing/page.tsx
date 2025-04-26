import { getCurrentUser } from "@saasfly/auth";

import { PricingCards } from "~/components/price/pricing-cards";
import { PricingFaq } from "~/components/price/pricing-faq";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import { trpc } from "~/trpc/server";

export const metadata = {
  title: "Pricing",
};

export default async function PricingPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const user = await getCurrentUser();
  const dict = await getDictionary(lang);
  let subscriptionPlan;

  if (user) {
    subscriptionPlan = await trpc.stripe.userPlans.query();
  }
  return (
    <div
      className="flex w-full flex-col gap-16 py-8 md:py-8"
      data-oid="oso3rap"
    >
      <PricingCards
        userId={user?.id}
        subscriptionPlan={subscriptionPlan}
        dict={dict.price}
        params={{ lang }}
        data-oid="j0szps8"
      />

      <hr className="container" data-oid="1:nqroh" />
      <PricingFaq params={{ lang }} dict={dict.price} data-oid="h9k1rzz" />
    </div>
  );
}
