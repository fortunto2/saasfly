import Balancer from "react-wrap-balancer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

import type { Locale } from "~/config/i18n-config";
import { priceFaqDataMap } from "~/config/price/price-faq-data";

export function PricingFaq({
  params: { lang },
  dict,
}: {
  params: { lang: Locale };
  dict: Record<string, string>;
}) {
  const pricingFaqData = priceFaqDataMap[lang];
  return (
    <section className="container max-w-3xl py-2" data-oid="577ie_u">
      <div className="mb-14 space-y-6 text-center" data-oid="y3a:32q">
        <h1
          className="font-heading text-center text-3xl md:text-5xl"
          data-oid="lzu0-6x"
        >
          <Balancer data-oid="rzer2j8">{dict.faq}</Balancer>
        </h1>
        <p className="text-md text-muted-foreground" data-oid="o1hoomg">
          <Balancer data-oid="ks-696t">{dict.faq_detail}</Balancer>
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        data-oid="oi.tg0s"
      >
        {pricingFaqData?.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id} data-oid="..lafis">
            <AccordionTrigger data-oid="dpaax_c">
              {faqItem.question}
            </AccordionTrigger>
            <AccordionContent data-oid="336ohke">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
