import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Banknote, Check, ChevronRight, Clock, Phone, Plus, Weight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import { PHOTOS } from "@/config/gallery";
import { SERVICES_LIST, STARTING_PRICE, STARTING_PRICE_LABEL } from "@/config/services";
import { SERVICE_PAGES } from "@/config/service-pages";
import { getPageMetadata, SITE_URL } from "@/config/seo";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatTelUri, formatWhatsAppUri } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

const STEPS = [
  { title: "Позвоните или напишите", text: "Звонки и сообщения в WhatsApp принимаем круглосуточно." },
  { title: "Опишите автомобиль", text: "Ответьте на вопросы из списка — по ним согласуем погрузку." },
  { title: "Согласуйте цену и маршрут", text: "Стоимость называем до начала работ, затем выезжаем." },
];

function findService(slug: string) {
  const service = SERVICES_LIST.find((item) => item.slug === slug);
  const page = SERVICE_PAGES[slug];
  return service && page ? { service, page } : null;
}

export function generateStaticParams() {
  return SERVICES_LIST.filter((service) => SERVICE_PAGES[service.slug]).map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const found = findService(slug);
  if (!found) return {};
  const { page } = found;
  return getPageMetadata(page.metaTitle, `${page.metaDescription} Тел.: ${BUSINESS_CONFIG.contacts.primaryPhoneFormatted}.`, `/services/${slug}`);
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const found = findService(slug);
  if (!found) notFound();
  const { service, page } = found;

  const telLink = formatTelUri(BUSINESS_CONFIG.contacts.primaryPhone);
  const waLink = formatWhatsAppUri(BUSINESS_CONFIG.contacts.whatsappPhone, page.whatsappText);
  const [lead, ...rest] = page.photos.map((key) => PHOTOS[key]);
  const related = SERVICES_LIST.filter((item) => item.slug !== slug && SERVICE_PAGES[item.slug]);
  const url = `${SITE_URL}/services/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: page.metaDescription,
      url,
      areaServed: [
        { "@type": "City", name: "Бишкек" },
        { "@type": "Country", name: "Кыргызстан" },
        { "@type": "City", name: "Алматы" },
      ],
      provider: {
        "@type": "TowingService",
        name: BUSINESS_CONFIG.brandName,
        telephone: BUSINESS_CONFIG.contacts.primaryPhone,
        url: SITE_URL,
        openingHours: "Mo-Su 00:00-23:59",
      },
      offers: {
        "@type": "Offer",
        priceSpecification: { "@type": "PriceSpecification", minPrice: STARTING_PRICE, priceCurrency: "KGS" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="border-b border-zinc-800 bg-zinc-950" aria-labelledby="service-title">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-20 lg:pt-12">
          <div>
            <nav aria-label="Хлебные крошки" className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-zinc-500">
              <Link href="/" className="hover:text-amber-400">Главная</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link href="/services" className="hover:text-amber-400">Услуги</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-zinc-300" aria-current="page">{service.title}</span>
            </nav>

            <h1 id="service-title" className="hero-rise font-display text-[clamp(2.1rem,4.6vw,3.9rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white [text-wrap:balance]">
              {page.h1}
            </h1>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telLink} aria-label={`Позвонить: ${BUSINESS_CONFIG.contacts.primaryPhoneFormatted}`} className="press inline-flex min-h-14 items-center justify-center gap-3 whitespace-nowrap bg-amber-500 px-6 text-lg font-bold tabular-nums text-zinc-950 hover:bg-amber-400">
                <Phone className="h-5 w-5 fill-zinc-950" aria-hidden="true" />
                {BUSINESS_CONFIG.contacts.primaryPhoneFormatted}
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-14 items-center justify-center gap-3 whitespace-nowrap border border-zinc-700 px-6 text-base font-semibold text-white hover:border-emerald-500 hover:text-emerald-300">
                <WhatsAppIcon className="h-5 w-5 text-emerald-400" />
                Написать в WhatsApp
              </a>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-300 sm:grid-cols-3 sm:gap-6">
              <li className="flex items-center gap-2.5"><Clock className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />{BUSINESS_CONFIG.operatingHours}</li>
              <li className="flex items-center gap-2.5"><Banknote className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />Цена {STARTING_PRICE_LABEL}</li>
              <li className="flex items-center gap-2.5"><Weight className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />Нагрузка {BUSINESS_CONFIG.vehicleCapacity}</li>
            </ul>
          </div>

          <ParallaxImage src={lead.src} alt={lead.alt} sizes="(max-width: 1023px) 100vw, 45vw" priority amount={10} className="hero-reveal aspect-[4/3] lg:aspect-[4/5]" />
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-zinc-950 py-16 sm:py-24" aria-labelledby="checklist-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <h2 id="checklist-title" className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-100 sm:text-4xl">Что сообщить при заказе</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400">Чем точнее ответы, тем быстрее согласуем погрузку и назовём цену. Фото и точку на карте удобно отправить в WhatsApp.</p>
            <ul className="mt-8 border-b border-zinc-800">
              {page.checklist.map((item) => (
                <li key={item} className="flex gap-4 border-t border-zinc-800 py-4 text-base text-zinc-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-100 sm:text-4xl">Как заказать</h2>
            <ol className="mt-8 border-b border-zinc-800">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-5 border-t border-zinc-800 py-6">
                  <span className="font-display text-sm font-semibold tabular-nums text-amber-400">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">{step.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-zinc-400">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 bg-zinc-900/60 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-400">Стоимость</p>
              <p className="mt-3 font-display text-4xl font-bold tracking-[-0.03em] text-amber-400">от {STARTING_PRICE.toLocaleString("ru-RU")} сом</p>
              <p className="mt-3 text-base leading-relaxed text-zinc-400">Итог зависит от автомобиля, состояния, сложности погрузки и маршрута. Оплата наличными или по QR-коду.</p>
            </div>
          </div>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="border-b border-zinc-800 bg-zinc-950 py-16 sm:py-24" aria-label="Фотографии перевозок">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:px-8">
            {rest.map((photo) => (
              <ParallaxImage key={photo.src} src={photo.src} alt={photo.alt} sizes="(max-width: 639px) 100vw, 50vw" className="group aspect-[4/3]" imageClassName="transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.03]" />
            ))}
          </div>
        </section>
      )}

      <section className="border-b border-zinc-800 bg-zinc-900/40 py-16 sm:py-24" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <h2 id="faq-title" className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-100 sm:text-4xl">Частые вопросы</h2>
          <div className="border-b border-zinc-800">
            {page.faq.map((item, index) => (
              <details key={item.id} open={index === 0} className="group border-t border-zinc-800">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-bold text-zinc-100 hover:text-amber-400 sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus className="h-5 w-5 shrink-0 text-amber-400 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-6 text-base leading-relaxed text-zinc-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-zinc-950 py-16 sm:py-24" aria-labelledby="related-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-title" className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-100 sm:text-4xl">Другие услуги</h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-12 border-b border-zinc-800 md:grid-cols-2">
            {related.map((item) => (
              <li key={item.id} className="border-t border-zinc-800">
                <Link href={`/services/${item.slug}`} className="group flex min-h-16 items-center justify-between gap-4 py-5 text-lg font-bold text-zinc-100 hover:text-amber-400">
                  {item.title}
                  <ArrowRight className="h-5 w-5 shrink-0 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-amber-400" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
