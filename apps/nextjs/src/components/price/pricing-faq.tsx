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
    <section className="container max-w-3xl py-2" data-oid="11x_ch_">
      <div className="mb-14 space-y-6 text-center" data-oid="m_7i5wc">
        <h1
          className="font-heading text-center text-3xl md:text-5xl"
          data-oid="eqpib5c"
        >
          <Balancer data-oid="hwwhhux">{dict.faq}</Balancer>
        </h1>
        <p className="text-md text-muted-foreground" data-oid=".:u-28c">
          <Balancer data-oid="o2zbqex">{dict.faq_detail}</Balancer>
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        data-oid="-hep-8d"
      >
        {pricingFaqData?.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id} data-oid="ha-f8b9">
            <AccordionTrigger data-oid="c.v39_c">
              {faqItem.question}
            </AccordionTrigger>
            <AccordionContent data-oid="ajnrfuh">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
