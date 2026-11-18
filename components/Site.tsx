import Image from "next/image";
import Header from "./Header";
import OpenStatus from "./OpenStatus";
import Booking, { WaIcon } from "./Booking";
import Gallery from "./Gallery";
import HoursTable from "./HoursTable";
import { salon, serviceGroups, reviews } from "@/lib/salon";
import { dicts, type Locale } from "@/lib/dict";

const Stars = ({ n = 5 }: { n?: number }) => (
  <span className="stars" aria-label={`${n}/5`}>
    {"★★★★★".slice(0, Math.round(n))}
  </span>
);

function jsonLd(locale: Locale) {
  const t = dicts[locale];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${salon.url}/#shop`,
    name: locale === "ar" ? salon.nameAr : salon.name,
    alternateName: locale === "ar" ? salon.name : salon.nameAr,
    description: t.meta.description,
    url: locale === "ar" ? `${salon.url}/ar` : salon.url,
    telephone: salon.phone,
    image: [`${salon.url}/img/hero.jpg`, `${salon.url}/img/chairs.jpg`, `${salon.url}/img/building.jpg`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Ghubra North",
      addressLocality: "Muscat",
      addressRegion: "Muscat Governorate",
      addressCountry: "OM",
    },
    geo: { "@type": "GeoCoordinates", latitude: salon.geo.lat, longitude: salon.geo.lng },
    hasMap: salon.mapsLink,
    openingHoursSpecification: salon.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayNames[h.day]}`,
      opens: h.open,
      closes: h.close,
    })),
    makesOffer: serviceGroups.flatMap((g) =>
      g.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: dicts.en.services.items[s.id][0] } }))
    ),
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: `https://wa.me/${salon.whatsapp}` },
    },
  };
}

export default function Site({ locale }: { locale: Locale }) {
  const t = dicts[locale];
  const wa = `https://wa.me/${salon.whatsapp}`;
  const weekOrder = [6, 0, 1, 2, 3, 4, 5]; // Saturday first, as the Omani week runs

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }} />
      <a className="skip" href="#main">Skip to content</a>
      <Header t={t} />

      <main id="main">
        {/* HERO */}
        <section className="hero">
          <Image src="/img/hero.jpg" alt={locale === "ar" ? "داخل صالون الإسترخاء للرجال في الغبرة" : "Inside Relax Saloon, a men's barber in Al Ghubra"} fill priority sizes="100vw" className="hero-img" />
          <div className="hero-shade" />
          <div className="wrap hero-in">
            <p className="kicker">{t.hero.kicker}</p>
            <h1>
              <span>{t.hero.title[0]}</span>
              <span className="accent">{t.hero.title[1]}</span>
            </h1>
            <p className="lead">{t.hero.text}</p>
            <div className="hero-ctas">
              <a className="btn btn-wa" href="#book"><WaIcon /> {t.hero.book}</a>
              <a className="btn btn-ghost" href={`tel:${salon.phone}`}>{t.hero.call}</a>
            </div>
            <div className="hero-meta">
              <a className="pill" href={salon.reviewsLink} target="_blank" rel="noopener">
                <Stars n={5} /> <b>{locale === "ar" ? "٤٫٦" : salon.rating}</b> · {locale === "ar" ? "١٢٠" : salon.reviewCount} {t.hero.reviews}
              </a>
              <OpenStatus t={t} className="pill" />
            </div>
          </div>
        </section>

        {/* FACTS */}
        <section className="facts" aria-label="Highlights">
          <div className="wrap facts-in">
            {t.facts.map((f) => (
              <div key={f.v} className="fact">
                <b>{f.k}</b>
                <span>{f.v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="kicker">{t.services.kicker}</p>
              <h2>{t.services.title}</h2>
              <p className="muted">{t.services.text}</p>
            </div>
            <div className="svc-grid">
              {serviceGroups.map((g) => (
                <article key={g.id} className="svc">
                  <div className="svc-img">
                    <Image src={g.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                    <h3>{t.services.groups[g.id]}</h3>
                  </div>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s.id}>
                        <div>
                          <b>{t.services.items[s.id][0]}</b>
                          <span>{t.services.items[s.id][1]}</span>
                        </div>
                        <em>{s.price ?? t.services.ask}</em>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="sec about">
          <div className="wrap about-in">
            <div className="about-img">
              <Image src="/img/stations.jpg" alt={locale === "ar" ? "محطات الحلاقة في صالون الإسترخاء" : "Barber stations at Relax Saloon"} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="about-txt">
              <p className="kicker">{t.about.kicker}</p>
              <h2>{t.about.title}</h2>
              <ol className="points">
                {t.about.points.map(([h, p], k) => (
                  <li key={h}>
                    <span className="num">{locale === "ar" ? `٠${"١٢٣"[k]}` : `0${k + 1}`}</span>
                    <div>
                      <b>{h}</b>
                      <p>{p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section id="book" className="sec book">
          <div className="wrap book-in">
            <div className="sec-head">
              <p className="kicker">{t.booking.kicker}</p>
              <h2>{t.booking.title}</h2>
              <p className="muted">{t.booking.text}</p>
            </div>
            <Booking t={t} />
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="kicker">{t.gallery.kicker}</p>
              <h2>{t.gallery.title}</h2>
            </div>
            <Gallery t={t} />
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="sec reviews">
          <div className="wrap">
            <div className="rev-head">
              <div className="sec-head">
                <p className="kicker">{t.reviewsS.kicker}</p>
                <h2>{t.reviewsS.title}</h2>
              </div>
              <div className="score">
                <b>{locale === "ar" ? "٤٫٦" : "4.6"}</b>
                <div>
                  <Stars n={5} />
                  <span>{t.reviewsS.basedOn}</span>
                </div>
              </div>
            </div>
            <div className="rev-grid">
              {reviews.map((r, k) => (
                <figure key={r.name} className={`rev ${k === 0 ? "rev-big" : ""}`}>
                  <Stars n={r.rating} />
                  <blockquote lang="en" dir="ltr">“{r.text}”</blockquote>
                  <figcaption>
                    <span className="av" aria-hidden="true">{r.name[0].toUpperCase()}</span>
                    <span>
                      <b>{r.name.replace(/\b\w/g, (c) => c.toUpperCase())}</b>
                      <small>Google · {r.when[locale]}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="rev-links">
              <a className="btn btn-line" href={salon.reviewsLink} target="_blank" rel="noopener">{t.reviewsS.all}</a>
              <a className="link" href={salon.writeReviewLink} target="_blank" rel="noopener">{t.reviewsS.write} {locale === "ar" ? "←" : "→"}</a>
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="sec visit">
          <div className="wrap visit-in">
            <div className="visit-txt">
              <p className="kicker">{t.visit.kicker}</p>
              <h2>{t.visit.title}</h2>
              <p className="muted">{t.visit.look}</p>
              <div className="visit-sign">
                <Image src="/img/sign.jpg" alt={locale === "ar" ? "لافتة صالون الإسترخاء للرجال" : "The RELAX Salon for Men sign"} fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
              <dl className="visit-dl">
                <dt>{t.visit.address}</dt>
                <dd>{salon.address[locale]}<br /><small>Plus code: {salon.plusCode}</small></dd>
                <dt>{t.visit.hours}</dt>
                <dd>
                  <HoursTable t={t} order={weekOrder} />
                  <OpenStatus t={t} />
                </dd>
              </dl>
              <div className="visit-ctas">
                <a className="btn" href={salon.directionsLink} target="_blank" rel="noopener">{t.visit.directions}</a>
                <a className="btn btn-line" href={`tel:${salon.phone}`}>{t.visit.call} <span dir="ltr">{salon.phoneDisplay}</span></a>
                <a className="btn btn-line" href={wa} target="_blank" rel="noopener"><WaIcon /> {t.visit.whatsapp}</a>
              </div>
            </div>
            <div className="map">
              <iframe title={t.visit.title} src={salon.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">R</span>
            <span className="brand-txt">
              <b>{locale === "ar" ? "الإسترخاء" : "Relax"}</b>
              <small>{locale === "ar" ? "صالون للرجال" : "Salon for men"}</small>
            </span>
          </div>
          <p>
            {salon.address[locale]} · <a href={`tel:${salon.phone}`} dir="ltr">{salon.phoneDisplay}</a>
            <br />
            <small>© {new Date().getFullYear()} {locale === "ar" ? salon.nameAr : salon.name}. {t.footer.rights} {t.footer.photos}</small>
          </p>
          <a className="lang" href={locale === "en" ? "/ar" : "/"}>{t.nav.switchTo}</a>
        </div>
      </footer>

      <nav className="mbar" aria-label="Quick actions">
        <a href={`tel:${salon.phone}`}>{t.mobileBar.call}</a>
        <a href={wa} target="_blank" rel="noopener">{t.mobileBar.whatsapp}</a>
        <a href="#book" className="mbar-book">{t.mobileBar.book}</a>
      </nav>
    </>
  );
}
