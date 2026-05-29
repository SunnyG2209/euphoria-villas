import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  Download,
  MapPin,
  Phone,
  Mail,
  Waves,
  Dumbbell,
  Flower2,
  Trophy,
  Gamepad2,
  LibraryBig,
  Trees,
  Home,
  ShieldCheck,
  Building2,
  Sparkles,
  Car,
  CheckCircle2,
  Compass,
  Menu,
  X
} from 'lucide-react'
import './styles.css'

import heroImage from './assets/page-02.jpg'
import masterPlanImage from './assets/page-03.jpg'
import clubhouseImage from './assets/page-04.jpg'
import parkImage from './assets/page-05.jpg'
import elevationImage from './assets/page-06.jpg'
import eastVillaImage from './assets/page-08.jpg'
import eastPlanImage from './assets/page-09.jpg'
import westVillaImage from './assets/page-10.jpg'
import westPlanImage from './assets/page-11.jpg'
import locationImage from './assets/page-13.jpg'
import legacyImage from './assets/page-14.jpg'

const brochureUrl = `${import.meta.env.BASE_URL}euphoria-villa-brochure.pdf`

const navItems = [
  ['overview', 'Overview'],
  ['masterplan', 'Masterplan'],
  ['amenities', 'Amenities'],
  ['plans', 'Plans'],
  ['specifications', 'Specifications'],
  ['brochure', 'Brochure'],
  ['location', 'Location'],
  ['visit', 'Book a Visit'],
]

const stats = [
  { value: '4.10', label: 'Acres of planned community' },
  { value: '44', label: 'Exclusive luxury villas' },
  { value: '303', label: 'Sq. yd land area options' },
  { value: '5,500+', label: 'Sq. ft built-up villa living' },
]

const amenities = [
  { icon: Waves, title: 'Swimming Pool', text: 'A calm resort-style pool for wellness, leisure, and family evenings.' },
  { icon: Dumbbell, title: 'Gymnasium', text: 'A dedicated fitness zone designed for active everyday living.' },
  { icon: Flower2, title: 'Yoga Room', text: 'A quiet space for mindful mornings and restorative routines.' },
  { icon: Trophy, title: 'Tennis & Badminton', text: 'Premium recreation courts for energetic weekends.' },
  { icon: Gamepad2, title: 'Games Room', text: 'Indoor play and entertainment designed for all age groups.' },
  { icon: LibraryBig, title: 'Library & AV Room', text: 'Spaces for reading, screening, learning, and social gatherings.' },
  { icon: Trees, title: 'Central Park', text: 'A lush community heart with play areas, open greens, and walking zones.' },
  { icon: Home, title: 'Clubhouse', text: 'A fully loaded community clubhouse for wellness, recreation, and social life.' },
]

const specs = [
  {
    title: 'Core Structure',
    points: ['RCC framed structure', 'Red brick masonry super structure', 'Premium cement: KCP / Ultratech / Zuari', 'High-grade steel: SAIL / VSP / JSW']
  },
  {
    title: 'Premium Finishes',
    points: ['Italian marble flooring across three floors', 'Solid core flush doors with elegant teak veneer finish', 'UPVC sliding windows with mosquito mesh', 'Granite staircase with stainless steel railing']
  },
  {
    title: 'Modern Utilities',
    points: ['Individual 4-inch bore water supply', 'CPVC / UPVC premium plumbing by Ashirvad', '3-phase power with concealed Finolex / Havells wiring', 'Dedicated 5 kV backup per villa', 'Private 4–6 passenger lift in every home']
  },
]

const connectivity = [
  '100 ft Tadigadapa Airport Road and 60 ft wide internal access roads',
  'Near Kamineni Hospitals and established healthcare access',
  'Close to Chaitanya, Narayana IIT/PMT Academy, Shamrock International, and Siddhartha Law College',
  'Swift access to Vijayawada–Machilipatnam 200 ft MRO corridor',
]

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.12 })
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Header() {
  const [open, setOpen] = useState(false)
  const handleNav = id => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="site-header">
      <button className="brand" onClick={() => handleNav('top')} aria-label="Go to top">
        <span className="brand-mark">EV</span>
        <span><strong>Euphoria Villa</strong><small>The High Life Dream Villa</small></span>
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        {navItems.map(([id, label]) => <button key={id} onClick={() => handleNav(id)}>{label}</button>)}
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,18,17,.94), rgba(9,18,17,.68), rgba(9,18,17,.2)), url(${heroImage})` }} />
      <div className="hero-content reveal visible">
        <span className="eyebrow">Luxury gated villa community · Vijayawada</span>
        <h1>Start life at your piece of paradise.</h1>
        <p>Euphoria Villa brings together expansive villa living, open greens, modern amenities, and strategic connectivity in Kanuru, Tadigadapa.</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => scrollToSection('visit')}>Book a Private Tour <ArrowRight size={18}/></button>
          <a className="secondary" href={brochureUrl} download>Download Brochure <Download size={18}/></a>
        </div>
      </div>
      <div className="hero-card reveal visible">
        <p>Exclusive community</p>
        <strong>44 Luxury Villas</strong>
        <span>Across 4.10 acres with central greens and clubhouse living.</span>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section id="overview" className="section overview">
      <div className="section-heading reveal">
        <span className="eyebrow">Overview</span>
        <h2>An escape within the city.</h2>
        <p>A curated villa estate designed for families who want privacy, scale, greenery, and everyday convenience without moving away from Vijayawada’s growth corridor.</p>
      </div>
      <div className="stats-grid reveal">
        {stats.map(item => <div className="stat" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </div>
      <div className="split reveal">
        <img src={elevationImage} alt="Euphoria Villa street elevation" />
        <div className="content-card">
          <h3>Urban elegance in every detail.</h3>
          <p>Every home is planned around spacious halls, comfortable family zones, private sanctuaries, home entertainment spaces, terrace living, and convenient car parking.</p>
          <ul className="check-list">
            <li><CheckCircle2/> Spacious hall and comfortable family living rooms</li>
            <li><CheckCircle2/> Dedicated home theatre and sophisticated bar counter</li>
            <li><CheckCircle2/> Open terrace garden and balcony deck</li>
            <li><CheckCircle2/> Expansive bedrooms with en-suite bathrooms</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Masterplan() {
  return (
    <section id="masterplan" className="section dark-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Masterplan</span>
        <h2>A private estate planned around openness.</h2>
        <p>Forty-four aligned villa plots are arranged around wide internal roads, a central park, and thoughtfully placed community spaces.</p>
      </div>
      <div className="image-panel reveal">
        <img src={masterPlanImage} alt="Euphoria Villa masterplan layout" />
        <div className="floating-grid">
          <div><Compass/><strong>Easy Navigation</strong><span>Wide, uncluttered internal roads.</span></div>
          <div><Trees/><strong>Central Park</strong><span>The lush, breathing heart of the estate.</span></div>
          <div><ShieldCheck/><strong>Planned Privacy</strong><span>Optimized villa positioning and spacing.</span></div>
        </div>
      </div>
    </section>
  )
}

function Amenities() {
  return (
    <section id="amenities" className="section amenities-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Amenities</span>
        <h2>Engage, share, and enjoy a fully loaded clubhouse life.</h2>
        <p>Wellness, recreation, children’s play, outdoor fitness, and family spaces come together to create a community that feels active, social, and private.</p>
      </div>
      <div className="amenity-showcase reveal">
        <img src={clubhouseImage} alt="Euphoria Villa clubhouse" />
        <img src={parkImage} alt="Euphoria Villa central park and open gym" />
      </div>
      <div className="amenities-grid reveal">
        {amenities.map(({ icon: Icon, title, text }) => <article className="amenity" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  )
}

function Plans() {
  return (
    <section id="plans" className="section plans-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Villa Plans</span>
        <h2>Choose your orientation. Keep the luxury.</h2>
        <p>East-facing and west-facing villas are designed around generous built-up areas, family lounges, master suites, entertainment spaces, and private outdoor zones.</p>
      </div>
      <div className="plan-grid reveal">
        <article className="plan-card">
          <img src={eastVillaImage} alt="East face villa elevation" />
          <div>
            <span className="tag">East Face Villa</span>
            <h3>A peaceful haven with abundant morning light.</h3>
            <p>Land area: 303 sq. yd · Total built-up area: approximately 5,577 sq. ft.</p>
          </div>
        </article>
        <article className="plan-card">
          <img src={westVillaImage} alt="West face villa elevation" />
          <div>
            <span className="tag">West Face Villa</span>
            <h3>Splendour, refreshing open spaces, and refined interiors.</h3>
            <p>Land area: 303 sq. yd · Total built-up area: approximately 5,583 sq. ft.</p>
          </div>
        </article>
      </div>
      <div className="blueprints reveal">
        <img src={eastPlanImage} alt="East face villa blueprints" />
        <img src={westPlanImage} alt="West face villa blueprints" />
      </div>
    </section>
  )
}

function Specifications() {
  return (
    <section id="specifications" className="section specifications-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Specifications</span>
        <h2>Premium specifications with long-term integrity.</h2>
        <p>Every villa is backed by quality construction, refined finishes, modern utilities, and private conveniences designed for comfortable family ownership.</p>
      </div>
      <div className="spec-grid reveal">
        {specs.map(spec => (
          <article className="spec-card" key={spec.title}>
            <Building2 />
            <h3>{spec.title}</h3>
            <ul>{spec.points.map(point => <li key={point}>{point}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Brochure() {
  return (
    <section id="brochure" className="section brochure-section">
      <div className="brochure-card reveal">
        <div>
          <span className="eyebrow">Brochure</span>
          <h2>Explore the complete villa story.</h2>
          <p>Download the official brochure for the estate layout, villa orientations, amenities, specifications, location map, and project contact details.</p>
        </div>
        <a className="primary" href={brochureUrl} download>Download Brochure <Download size={18}/></a>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section id="location" className="section location-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Location</span>
        <h2>Strategic connectivity in Kanuru, Tadigadapa.</h2>
        <p>Placed close to education, healthcare, and major transport corridors, Euphoria Villa keeps daily convenience within reach while preserving a calm residential setting.</p>
      </div>
      <div className="split reveal">
        <img src={locationImage} alt="Euphoria Villa location map" />
        <div className="content-card light">
          <h3>Connected to what matters.</h3>
          <ul className="check-list">{connectivity.map(item => <li key={item}><MapPin/>{item}</li>)}</ul>
          <div className="address-card">
            <strong>Site & Office Address</strong>
            <span>Euphoria Villa, S.R. Builders, Income Tax Colony, near Kamineni Hospital, Kanuru, Tadigadapa Municipality, Vijayawada.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function VisitForm() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <section id="visit" className="section visit-section">
      <div className="visit-wrap reveal">
        <div>
          <span className="eyebrow">Book a Visit</span>
          <h2>Secure your piece of paradise today.</h2>
          <p>Share your details and our sales team can coordinate a private site visit. This version uses a static form placeholder; connect it later to Google Forms, Formspree, or a CRM.</p>
          <div className="contact-lines">
            <a href="tel:+91951359366"><Phone size={18}/> +91 951359366</a>
            <a href="tel:+91963887777"><Phone size={18}/> +91 963887777</a>
            <a href="https://www.meechirunama.com" target="_blank" rel="noreferrer"><Mail size={18}/> www.meechirunama.com</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="lead-form">
          <label>Name<input required name="name" placeholder="Your full name" /></label>
          <label>Phone<input required name="phone" placeholder="Mobile number" /></label>
          <label>Preferred Visit Date<input name="date" type="date" /></label>
          <label>Message<textarea name="message" placeholder="I am interested in Euphoria Villa..." /></label>
          <button className="primary" type="submit">Request Site Visit <ArrowRight size={18}/></button>
          {submitted && <p className="success">Thank you. Static demo submitted. Connect this form before going live.</p>}
        </form>
      </div>
    </section>
  )
}

function Legacy() {
  return (
    <section className="section legacy-section">
      <div className="split reveal">
        <div className="content-card dark-card">
          <span className="eyebrow">Builder Legacy</span>
          <h2>Building homes, building trust, building the future.</h2>
          <p>S.R. Builders brings decades of architectural experience, transparent pricing, customer-centric execution, and a successful residential delivery legacy.</p>
          <div className="legacy-points">
            <div><Sparkles/><strong>Since 1994</strong><span>Turning dreams into reality with honest delivery.</span></div>
            <div><Car/><strong>18.5 lakh sq. ft</strong><span>Constructed residential space completed successfully.</span></div>
          </div>
        </div>
        <img src={legacyImage} alt="S.R. Builders legacy page" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="brand footer-brand"><span className="brand-mark">EV</span><span><strong>Euphoria Villa</strong><small>The High Life Dream Villa</small></span></div>
      <p>Luxury villas in Kanuru, Tadigadapa, Vijayawada.</p>
      <button onClick={() => scrollToSection('top')}>Back to top</button>
    </footer>
  )
}

function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Masterplan />
        <Amenities />
        <Plans />
        <Specifications />
        <Brochure />
        <Location />
        <VisitForm />
        <Legacy />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
