import Image from "next/image";
import ContactForm from "./ContactForm";
import MotionEffects from "./MotionEffects";

const DONATION_URL = "";
const ASSOCIATION_NAME = "African Catholic Community Association of Phoenix, Arizona";
const CONTACT_EMAIL = "accaphoenixarizona@gmail.com";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Event", href: "#event" },
  { label: "Sponsor", href: "#sponsor" },
  { label: "Contact", href: "#contact" }
];

const impactItems = [
  {
    title: "Cultural catering",
    amount: "500 guests",
    text: "Authentic African dishes served freely as an act of hospitality."
  },
  {
    title: "Event logistics",
    amount: "Stage, sound, tents",
    text: "Reliable equipment and shaded outdoor space for a safe celebration."
  },
  {
    title: "Community outreach",
    amount: "Citywide invitation",
    text: "Promotional materials that welcome neighbors across the Phoenix area."
  }
];

const revealWords =
  "This celebration is built for families, neighbors, and sponsors who believe culture can become hospitality and faith can become a shared table.".split(
    " "
  );

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "African Festival/Mass 2026",
  description:
    "A free public African Festival and Mass celebrating faith, African heritage, gospel music, authentic cuisine, cultural dances, and community unity.",
  startDate: "2026-09-19",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  isAccessibleForFree: true,
  location: {
    "@type": "Place",
    name: "St. Helen Catholic Parish",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5510 W. Cholla St.",
      addressLocality: "Glendale",
      addressRegion: "AZ",
      postalCode: "85304",
      addressCountry: "US"
    }
  },
  organizer: {
    "@type": "Organization",
    name: ASSOCIATION_NAME,
    email: CONTACT_EMAIL,
    telephone: "+1-602-575-8356"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ASSOCIATION_NAME,
  email: CONTACT_EMAIL,
  telephone: "+1-602-575-8356",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5510 W. Cholla St.",
    addressLocality: "Glendale",
    addressRegion: "AZ",
    postalCode: "85304",
    addressCountry: "US"
  }
};

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label={`${ASSOCIATION_NAME} home`}>
      <span className="brand-seal" aria-hidden="true">
        <Image
          src="/assets/acca-phoenix-logo.png"
          alt=""
          width={1164}
          height={1164}
          priority
        />
      </span>
      <span>
        <strong>{ASSOCIATION_NAME}</strong>
        <small>Phoenix, Arizona</small>
        <em>Together with Christ</em>
      </span>
    </a>
  );
}

function Icon({
  children,
  label
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <span className="icon" aria-label={label} role="img">
      {children}
    </span>
  );
}

function DonateLink({ children, className = "button button-primary" }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={DONATION_URL || "#donation-url-placeholder"}>
      {children}
      <span aria-hidden="true" className="button-arrow">
        -&gt;
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <MotionEffects />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <header className="site-header">
        <div className="nav-shell">
          <BrandMark />
          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <DonateLink>Donate</DonateLink>
        </div>
      </header>

      <main id="home" className="page-shell">
        <section className="hero section">
          <div className="hero-bg" aria-hidden="true">
            <Image
              src="/assets/desert-cross.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="cover"
            />
          </div>
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <h1>
                Together in Faith,{" "}
                <span className="headline-image" aria-hidden="true" />
                Community, and Culture
              </h1>
              <p className="lead">
                Join {ASSOCIATION_NAME} for African Festival/Mass 2026, a free
                public celebration of African heritage, gospel music, cuisine,
                cultural dance, and Christ-centered hospitality.
              </p>
              <div className="hero-actions">
                <DonateLink>Donate / Sponsor</DonateLink>
                <a className="button button-secondary" href="#event">
                  Event details
                  <span aria-hidden="true" className="button-arrow">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
            <div className="hero-media scale-media">
              <div className="image-oval group-hover-media">
                <Image
                  src="/assets/community-hero.png"
                  alt={`${ASSOCIATION_NAME} members gathered outside St. Helen Catholic Parish`}
                  width={1448}
                  height={1086}
                  priority
                />
              </div>
              <div className="mission-ribbon">
                <span className="cross-symbol" aria-hidden="true" />
                <p>
                  One faith.<br />
                  One family.<br />
                  <strong>One mission.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="event-marquee" aria-label="African Festival/Mass 2026 highlights">
          <div className="marquee-track">
            <span>September 19, 2026</span>
            <span>St. Helen Catholic Parish</span>
            <span>Free public celebration</span>
            <span>Gospel music</span>
            <span>African cuisine</span>
            <span>Cultural dances</span>
            <span>September 19, 2026</span>
            <span>St. Helen Catholic Parish</span>
            <span>Free public celebration</span>
            <span>Gospel music</span>
            <span>African cuisine</span>
            <span>Cultural dances</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="section-copy reveal">
              <h2>Faith made visible through welcome, worship, and culture.</h2>
              <p>
                African Festival/Mass 2026 brings families, neighbors, parish
                communities, and friends together at St. Helen Catholic Parish.
                The celebration honors the diverse heritage and deep faith of
                African Catholics while opening the doors to the wider community.
              </p>
              <div className="statement-list">
                <div>
                  <strong>Celebrate heritage</strong>
                  <span>Traditional gospel music, cultural dances, and African cuisine.</span>
                </div>
                <div>
                  <strong>Foster unity</strong>
                  <span>A public, family-friendly invitation to learn and gather.</span>
                </div>
                <div>
                  <strong>Serve with love</strong>
                  <span>Free admission so hospitality can reach every guest.</span>
                </div>
              </div>
              <p className="word-reveal">
                {revealWords.map((word, index) => (
                  <span key={`${word}-${index}`}>{word} </span>
                ))}
              </p>
            </div>
            <div className="about-media-grid scale-media">
              <Image
                src="/assets/church-community.png"
                alt="African Catholic community gathered inside a church"
                width={1448}
                height={1086}
                className="about-main-image"
              />
              <div className="about-note">
                <span>$25,000 goal</span>
                <strong>$10,000 funding gap</strong>
                <p>Your gift helps keep the festival free and welcoming.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section event-section" id="event">
          <div className="container">
            <div className="event-heading reveal">
              <div>
                <h2>African Festival/Mass 2026</h2>
              </div>
              <p>
                A bi-annual celebration of faith, African culture, and community
                education on the church grounds at St. Helen Catholic Parish.
              </p>
            </div>
            <div className="event-card reveal">
              <div className="date-block">
                <span>Sep</span>
                <strong>19</strong>
                <span>2026</span>
              </div>
              <div className="event-details">
                <span className="free-badge">Free and open to the public</span>
                <h3>Saturday, September 19, 2026</h3>
                <ul>
                  <li>St. Helen Catholic Parish, 5510 W. Cholla St., Glendale, AZ 85304</li>
                  <li>Traditional gospel music, authentic African cuisine, and cultural dances</li>
                  <li>Family-friendly gathering designed for fellowship, learning, and service</li>
                </ul>
              </div>
              <div className="event-image-wrap scale-media">
                <Image
                  src="/assets/festival-dance.png"
                  alt="African Festival participants dancing and drumming outdoors"
                  width={1448}
                  height={1086}
                  className="event-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section sponsor-section" id="sponsor">
          <div className="container sponsor-bento">
            <div className="section-copy sponsor-main reveal">
              <h2>Help bridge the final $10,000.</h2>
              <p>
                To make this event safe, joyous, and accessible to all, the
                committee is raising funds for catering, logistics, and outreach.
                Donations of $500 or more may be acknowledged in the event
                program and during the opening remarks.
              </p>
              <div className="funding-panel">
                <div>
                  <span>Total festival goal</span>
                  <strong>$25,000</strong>
                </div>
                <div>
                  <span>Current funding gap</span>
                  <strong>$10,000</strong>
                </div>
              </div>
              <div className="sponsor-actions">
                <DonateLink>Give when link is live</DonateLink>
                <a
                  className="button button-secondary"
                  href={`mailto:${CONTACT_EMAIL}?subject=African%20Festival%2FMass%202026%20Sponsorship`}
                >
                  Ask about sponsorship
                  <span aria-hidden="true" className="button-arrow">
                    -&gt;
                  </span>
                </a>
              </div>
              <p className="placeholder-note" id="donation-url-placeholder">
                Online giving link coming soon. Until then, contact Dr. Chris
                Azode at {CONTACT_EMAIL} or (602) 575-8356.
              </p>
            </div>
            <div className="sponsor-image-panel scale-media">
              <Image
                src="/assets/community-hero.png"
                alt={`${ASSOCIATION_NAME} community gathered outside St. Helen Catholic Parish`}
                width={1448}
                height={1086}
              />
              <p>For donations of $500 or more, the committee may include your name or business logo in the event program.</p>
            </div>
            <div className="impact-stack">
              {impactItems.map((item) => (
                <article className="impact-card reveal" key={item.title}>
                  <span>{item.amount}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-bg" aria-hidden="true">
            <Image src="/assets/desert-cross.png" alt="" fill sizes="100vw" className="cover" />
          </div>
          <div className="container contact-grid">
            <div className="section-copy reveal">
              <h2>Walk with us in faith and fellowship.</h2>
              <p>
                Reach out to support African Festival/Mass 2026, ask about
                sponsorship, or learn how to participate in the celebration.
              </p>
              <div className="contact-list">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=5510%20W.%20Cholla%20St.%2C%20Glendale%2C%20AZ%2085304"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon label="Location">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21s7-5.3 7-12a7 7 0 0 0-14 0c0 6.7 7 12 7 12Z" />
                      <circle cx="12" cy="9" r="2.4" />
                    </svg>
                  </Icon>
                  <span>
                    <strong>St. Helen Catholic Parish</strong>
                    5510 W. Cholla St., Glendale, AZ 85304
                  </span>
                </a>
                <a href="tel:+16025758356">
                  <Icon label="Phone">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 4.5 8.6 4l2.1 5-2.2 1.4a13.5 13.5 0 0 0 5.1 5.1l1.4-2.2 5 2.1-.5 3.6c-.1.8-.8 1.4-1.6 1.4A15.9 15.9 0 0 1 3.6 6.1c0-.8.6-1.5 1.4-1.6Z" />
                    </svg>
                  </Icon>
                  <span>
                    <strong>Dr. Chris Azode</strong>
                    (602) 575-8356
                  </span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <Icon label="Email">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 6.5h16v11H4z" />
                      <path d="m4.5 7 7.5 6 7.5-6" />
                    </svg>
                  </Icon>
                  <span>
                    <strong>Email</strong>
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </div>
            </div>
            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandMark />
            <p>
              Uniting African Catholics in Arizona through faith, fellowship,
              culture, and service.
            </p>
            <strong>One faith. One family. One mission.</strong>
          </div>
          <div>
            <h2>Quick links</h2>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <h2>Event</h2>
            <p>Saturday, September 19, 2026</p>
            <p>St. Helen Catholic Parish</p>
            <p>Free and open to the public</p>
          </div>
          <div>
            <h2>Get involved</h2>
            <a href="#sponsor">Make a donation</a>
            <a href={`mailto:${CONTACT_EMAIL}?subject=African%20Festival%2FMass%202026%20Volunteer`}>
              Volunteer
            </a>
            <a href={`mailto:${CONTACT_EMAIL}?subject=African%20Festival%2FMass%202026%20Sponsor`}>
              Sponsor an event
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>{"\u00a9"} 2026 {ASSOCIATION_NAME}. All rights reserved.</span>
          <span>African Festival/Mass 2026</span>
        </div>
      </footer>
    </>
  );
}
