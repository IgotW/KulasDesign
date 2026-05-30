import './App.css'
import Navbar from './components/Navbar'
import kdLogo from './assets/kd_logo.png'
import kdLogoApparel from './assets/kd_logo_apparel.png'
import customApparel from './assets/categories/custom_apparel.png'
import lanyard from './assets/categories/lanyard.png'
import medal from './assets/categories/medal.png'
import printCollateral from './assets/categories/print_collateral.png'
import tarpaulin from './assets/categories/tarpaulin.png'
import apparel from './assets/services/apparel.jpg'
import banner from './assets/services/banner.jpg'
import decals from './assets/services/decals.jpg'
import landyards from './assets/services/landyard.jpg'
import medals from './assets/services/medal.jpg'
import plaques from './assets/services/plaques.jpg'
import sash from './assets/services/sash.jpg'
import signages from './assets/services/signages.jpg'
import tent from './assets/services/tent.jpg'

function App() {
  // const serviceCards = ['Vehicle Wrap', 'Signage', 'Business Kits', 'Apparel', 'Tarpaulins', 'Lanyards', 'Custom Medals', 'Print Collateral']
  // Replace serviceCards array:
  const serviceCards = [
    {
      name: 'Apparel',
      row: 'top',
      image: {apparel},
    },
    {
      name: 'Signages',
      row: 'top',
      image: {signages},
    },
    {
      name: 'Plaques',
      row: 'top',
      image: {plaques},
    },
    {
      name: 'Lanyard',
      row: 'top',
      image: {landyards},
    },
    {
      name: 'Medals',
      row: 'top',
      image: {medals},
    },
    {
      name: 'Decals',
      row: 'bottom',
      image: {decals},
    },
    {
      name: 'Tent',
      row: 'bottom',
      image: {tent},
    },
    {
      name: 'Sash',
      row: 'bottom',
      image: {sash},
    },
    {
      name: 'Banner',
      row: 'bottom',
      image: {banner},
    },
  ]

const processSteps = [
  { title: 'Consultation', text: 'Message us on Facebook, Email, or visit our Cebu shop and tell us what you need.' },
  { title: 'Send Your Design', text: 'Provide your artwork or let our team create and refine a layout for you.' },
  { title: 'Proof Approval', text: 'We send a digital proof for your sign-off before anything goes to print.' },
  { title: 'Receive & Enjoy', text: 'Collect in store or arrange delivery. Your order, exactly as imagined.' },
]

  // const processSteps = [
  //   { title: 'Consult', text: 'Share your goals, references, and quantity requirements.' },
  //   { title: 'Create', text: 'We develop layouts and proofs that match your brand.' },
  //   { title: 'Print', text: 'Your approved design is produced with premium materials.' },
  //   { title: 'Deliver', text: 'Receive your finished prints on schedule and ready to use.' },
  // ]
  const categoryCards = [
    'Custom Apparel',
    'Tarpaulins',
    'Lanyards',
    'Custom Medals',
    'Print Collateral',
  ]
  const testimonials = [
    {
      quote:
        'Fast turnaround and excellent quality. Their team handled our campaign launch smoothly.',
      author: 'A. Santos',
      role: 'Marketing Lead',
    },
    {
      quote:
        'From concept to installation, everything was professional and on-brand for our store.',
      author: 'R. Lim',
      role: 'Business Owner',
    },
    {
      quote: 'Reliable printing partner for our recurring events and corporate collaterals.',
      author: 'C. Villanueva',
      role: 'Events Coordinator',
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() || ''
    const email = formData.get('email')?.toString().trim() || ''
    const phone = formData.get('phone')?.toString().trim() || ''
    const service = formData.get('service')?.toString().trim() || ''
    const details = formData.get('details')?.toString().trim() || ''

    const subject = encodeURIComponent(`Request a Quote - ${name || 'Website Inquiry'}`)
    const body = encodeURIComponent(
      [
        'New inquiry from Kulas Design website:',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        '',
        'Project details:',
        details,
      ].join('\n'),
    )

    window.location.href = `mailto:markrhiz.17@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="page">
      <Navbar />

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow-row">
              <span className="hero-eyebrow-label">Cebu's Print Specialist</span>
              <span className="hero-eyebrow-line" />
            </div>
            <h1 className="hero-h1">
              <span className="h1-outline">Kulas Design</span>
              <span className="h1-white">Your Daily Printing</span>
              <span className="h1-teal">Partner</span>
            </h1>   
            <p className="hero-copy">
              Kulas Design delivers premium printing and design services for businesses, events, and personal projects.
              <br />
              We turn your ideas into personalized creations—crafted with detail, creativity, and lasting quality.
            </p>
          </div>
          <div className="hero-right">
            <img src={kdLogo} alt="Kulas Design Logo" className="hero-logo" />
            <p className="hero-brand-name">Kulas Design Inc.</p>
          </div>
        </div>
      </section>

      {/* <section className="hero">
        <p className="eyebrow">Kulas Design</p>
        <h1>
          Your Daily Printing
          <br />
          Partner
        </h1>
        <p className="hero-copy">
          From custom apparel to large-format prints, we help brands in Cebu create materials
          that stand out and deliver impact.
        </p>
        <a className="hero-cta" href="#contact">
          Request a Quote
        </a>
      </section> */}

      {/* <section id="services" className="section">
        <p className="eyebrow">What we do</p>
        <h2>Our Services</h2>
        <div className="service-grid">
          {serviceCards.map((service) => (
            <article key={service} className="tile">
              <span>{service}</span>
            </article>
          ))}
        </div>
      </section> */}
      <section id="services" className="section">
        <div className="services-eyebrow-row">
          <span className="services-eyebrow-line" />
          <p className="eyebrow">What We Offer</p>
        </div>
        <h2>Our Services</h2>
        <p className="services-sub">
          Every order — large or small — receives our full attention from concept to delivery.
        </p>
        <div className="service-mosaic">
          <div className="service-row top-row">
            {serviceCards.filter(s => s.row === 'top').map((service) => (
              <article
              key={service.name}
              className="mosaic-tile"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              <span>{service.name}</span>
            </article>
            ))}
          </div>
          <div className="service-row bottom-row">
            {serviceCards.filter(s => s.row === 'bottom').map((service) => (
              <article
              key={service.name}
              className="mosaic-tile"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
                <span>{service.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="difference" className="section difference-section">
        <div className="difference-left">
          <div className="difference-eyebrow-row">
            <span className="difference-eyebrow-line" />
            <p className="eyebrow">Why Choose Us</p>
          </div>
          <h2 className="difference-heading">The Kulas Design Difference</h2>
          <p className="difference-sub">
            Every project is tailored to you, combining creativity, precision, and quality to deliver results that exceed expectations.
          </p>
          <ol className="difference-items">
            <li>
              <span className="diff-num">01</span>
              <div>
                <strong>Fast Turnaround</strong>
                <p>Rush orders handled with care. We meet tight deadlines without compromising quality.</p>
              </div>
            </li>
            <li>
              <span className="diff-num">02</span>
              <div>
                <strong>Vivid, Lasting Colour</strong>
                <p>Premium inks and materials ensure prints stay sharp and vibrant for years.</p>
              </div>
            </li>
            <li>
              <span className="diff-num">03</span>
              <div>
                <strong>Fair, Transparent Pricing</strong>
                <p>Competitive rates with no hidden fees. Bulk orders get even better deals.</p>
              </div>
            </li>
            <li>
              <span className="diff-num">04</span>
              <div>
                <strong>Free Design Assistance</strong>
                <p>Our team can polish and prepare your artwork at no extra cost.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="difference-right">
          <div className="difference-logo-panel">
            <div className="diff-logo-block">
              <img src={kdLogo} alt="Kulas Design Logo" className="diff-logo" />
              <p className="diff-logo-label">Kulas Design Inc.</p>
            </div>
            <div className="diff-divider">
              <span className="diff-divider-teal" />
              <span className="diff-divider-red" />
            </div>
            <div className="diff-logo-block">
              <img src={kdLogoApparel} alt="Kulas Apparels Logo" className="diff-logo diff-logo-circle" />
            </div>
          </div>
        </div>
      </section>

      {/* <section id="difference" className="section split">
        <div>
          <p className="eyebrow">Why choose us</p>
          <h2>The Kulas Design Difference</h2>
          <ul className="difference-list">
            <li>Consistent quality for both short and bulk runs.</li>
            <li>Color-accurate output with durable print materials.</li>
            <li>Hands-on support from inquiry to final delivery.</li>
          </ul>
        </div>
        <div className="badge-wrap">
          <div className="badge">KD</div>
        </div>
      </section> */}

      <section className="section steps-section">
        <div className="steps-eyebrow-row">
          <span className="steps-eyebrow-line" />
          <p className="eyebrow">How It Works</p>
        </div>
        <h2 className="steps-heading">Four Steps. One Great Print.</h2>
        <div className="steps-grid">
          {processSteps.map((step, i) => (
            <article key={step.title} className="step">
              <div className={`step-circle ${i >= 2 ? 'step-circle-red' : ''}`}>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="section">
        <p className="eyebrow">How we work</p>
        <h2>Four Steps. One Great Print.</h2>
        <div className="steps-grid">
          {processSteps.map((step) => (
            <article key={step.title} className="step">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section> */}

<section id="categories" className="section categories-section">
  <div className="categories-header">
    <div>
      <div className="categories-eyebrow-row">
        <span className="categories-eyebrow-line" />
        <p className="eyebrow">Our Work</p>
      </div>
      <h2 className="categories-heading">Crafted for Every Occasion</h2>
    </div>
    <a href="#contact" className="see-more-btn">See More</a>
  </div>

  <div className="bento-grid">
    <article className="bento-card bento-large">
      <img src={customApparel} alt="Custom Apparel" className="bento-img" />
      <div className="bento-overlay" />
      <div className="bento-text">
        <span className="bento-tag">Featured</span>
        <h3>Custom Apparel</h3>
      </div>
    </article>

    <div className="bento-small-grid">
      <article className="bento-card">
        <img src={tarpaulin} alt="Tarpaulins" className="bento-img" />
        <div className="bento-overlay" />
        <div className="bento-text">
          <span className="bento-tag">Large Format</span>
          <h3>Tarpaulins</h3>
        </div>
      </article>

      <article className="bento-card">
        <img src={landyard} alt="Lanyards" className="bento-img" />
        <div className="bento-overlay" />
        <div className="bento-text">
          <span className="bento-tag">Corporate</span>
          <h3>Lanyards</h3>
        </div>
      </article>

      <article className="bento-card">
        <img src={medal} alt="Custom Medals" className="bento-img" />
        <div className="bento-overlay" />
        <div className="bento-text">
          <span className="bento-tag">Events</span>
          <h3>Custom Medals</h3>
        </div>
      </article>

      <article className="bento-card">
        <img src={printCollateral} alt="Print Collaterals" className="bento-img" />
        <div className="bento-overlay" />
        <div className="bento-text">
          <span className="bento-tag">Business</span>
          <h3>Print Collaterals</h3>
        </div>
      </article>
    </div>
  </div>
</section>

      {/* <section id="categories" className="section">
        <p className="eyebrow">Products</p>
        <h2>Crafted for Every Occasion</h2>
        <div className="category-grid">
          {categoryCards.map((card) => (
            <article key={card} className="category-card">
              <span>{card}</span>
            </article>
          ))}
        </div>
      </section> */}

<section className="section testimonials-section">
  <div className="testimonials-eyebrow-row">
    <span className="testimonials-eyebrow-line" />
    <p className="eyebrow">Client Feedback</p>
  </div>
  <h2 className="testimonials-heading">Trusted by Many in Cebu</h2>

  <div className="testimonials-container">
    {[
      {
        quote: 'The tarpaulins were delivered on time and the colours were incredibly vivid. Perfect for our fiesta — highly recommended!',
        author: 'Maria R.',
        initials: 'MR',
        role: 'Event Organizer, Cebu',
      },
      {
        quote: '50 custom polo shirts for our team — they looked absolutely professional. Great quality at a very fair price.',
        author: 'Jun L.',
        initials: 'JL',
        role: 'Business Owner',
      },
      {
        quote: 'Lanyards and ID cards for our school event were flawless. Kulas Design made the whole process smooth and easy.',
        author: 'Anna C.',
        initials: 'AC',
        role: 'School Coordinator',
      },
    ].map((t, i) => (
      <article key={t.author} className="tcard">
        <div className="tcard-stars">
          {[...Array(5)].map((_, s) => (
            <span key={s} className="tstar">★</span>
          ))}
        </div>
        <p className="tcard-quote">"{t.quote}"</p>
        <div className="tcard-author">
          <div className="tcard-avatar">{t.initials}</div>
          <div>
            <p className="tcard-name">{t.author}</p>
            <p className="tcard-role">{t.role}</p>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

      {/* <section className="section">
        <p className="eyebrow">Testimonials</p>
        <h2>Trusted by Many in Cebu</h2>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="quote">
              <p>"{testimonial.quote}"</p>
              <span>
                {testimonial.author} - {testimonial.role}
              </span>
            </article>
          ))}
        </div>
      </section> */}

      {/* <section id="contact" className="section contact">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2>Ready to Print? Let&apos;s Talk.</h2>
          <p>
            Tell us what you need and we&apos;ll send the best option for your timeline, budget, and
            quantity.
          </p>
        </div>
        <form className="quote-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" />

          <label htmlFor="service">Service Needed</label>
          <input id="service" name="service" placeholder="e.g. Tarpaulin, Shirt Printing" />

          <label htmlFor="details">Project Details</label>
          <textarea id="details" name="details" rows="5" required />

          <button type="submit">Send Inquiry</button>
        </form>
      </section> */}

<section id="contact" className="section contact-section">
  <div className="contact-left">
    <div className="contact-eyebrow-row">
      <span className="contact-eyebrow-line" />
      <p className="eyebrow">Get In Touch</p>
    </div>
    <h2 className="contact-heading">
      Ready to Print?<br />Let's Talk.
    </h2>
    <p className="contact-sub">
      Reach out on Facebook or fill the form — we'll respond quickly with a quote tailored to your needs.
    </p>

    <div className="contact-info-grid">
      <a href="https://www.facebook.com/KulasDesigns" target="_blank" rel="noreferrer" className="contact-info-card">
        <div className="cinfo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </div>
        <div>
          <p className="cinfo-label">Facebook Page</p>
          <p className="cinfo-value">https://www.facebook.com/KulasDesigns</p>
        </div>
      </a>

      <a href="https://www.instagram.com/kulasdesign/" target="_blank" rel="noreferrer" className="contact-info-card">
        <div className="cinfo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </div>
        <div>
          <p className="cinfo-label">Instagram</p>
          <p className="cinfo-value">https://www.instagram.com/kulasdesign/</p>
        </div>
      </a>

      <div className="contact-info-card">
        <div className="cinfo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <p className="cinfo-label">Location</p>
          <p className="cinfo-value">MGM Bldg, Pob. Occ Consolacion Cebu,<br />Consolacion, Philippines, 6001</p>
        </div>
      </div>

      <div className="contact-info-card">
        <div className="cinfo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div>
          <p className="cinfo-label">Business Hours</p>
          <p className="cinfo-value">Monday - Saturday, 9 AM - 6 PM</p>
        </div>
      </div>
    </div>
  </div>

  <div className="contact-right">
    <form className="quote-form" onSubmit={handleSubmit}>
      <p className="form-title">Request a Quote</p>
      <hr className="form-divider" />

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Your Name" required />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" placeholder="+63 9XX XXX XXXX" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="service">Service Needed</label>
        <select id="service" name="service">
          <option value="" disabled selected>Select a service</option>
          <option>Apparel</option>
          <option>Signages</option>
          <option>Tarpaulins</option>
          <option>Lanyards</option>
          <option>Custom Medals</option>
          <option>Plaques</option>
          <option>Decals</option>
          <option>Tent</option>
          <option>Sash</option>
          <option>Banner</option>
          <option>Print Collaterals</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="details">Project Details</label>
        <textarea id="details" name="details" rows="4" placeholder="Tell us about your project requirements, timeline, and any specific details..." required />
      </div>

      <button type="submit" className="form-submit">Send Inquiry</button>
    </form>
  </div>
</section>
    </div>
  )
}

export default App
