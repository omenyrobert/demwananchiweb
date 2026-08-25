import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import {
  saveJar,
  coupleDocuments,
  womanCouchLaptop,
  doctorPatient,
} from '../assets/images'

const solutions = [
  {
    image: coupleDocuments,
    title: 'Personal Savings Plans',
    text: 'Ideal for school fees, medical expenses, land purchase, weddings, and other personal goals.',
  },
  {
    image: womanCouchLaptop,
    title: 'Business Savings Plans',
    text: 'Designed for SMEs to build working capital, manage cash flow, and prepare for expansion.',
  },
  {
    image: saveJar,
    title: 'Goal-Based Savings',
    text: 'Save toward a specific target within a defined timeframe.',
  },
  {
    image: doctorPatient,
    title: 'Emergency Savings',
    text: 'Build a financial cushion for unexpected situations.',
  },
]

const keyFeatures = [
  'Flexible saving schedules (daily, weekly, or monthly)',
  'Affordable minimum deposit requirements',
  'Secure and confidential account management',
  'Clear terms and transparent processes',
  'Professional financial guidance',
]

const whySave = [
  'Trusted and regulated financial institution',
  'Customer-centered service',
  'Structured plans that promote financial discipline',
  'Support for both individuals and growing businesses',
]

export default function Savings() {
  return (
    <div>
      <PageHero
        crumb="Savings"
        title="Savings"
        subtitle="Financial stability begins with disciplined saving — build your foundation for the future with De-Mwananchi."
        image={saveJar}
      />

      <section className="section-py bg-white">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">At De-Mwananchi Financial Services</p>
          <h2 className="section-title">Save With Confidence</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            We understand that financial stability begins with disciplined saving. Our Savings Program is
            designed to help individuals and Small &amp; Medium Enterprises (SMEs) in Uganda build strong
            financial foundations while preparing for future opportunities and emergencies. As a financial
            services company registered and supervised by the Bank of Uganda, we uphold the highest
            standards of transparency, security, and accountability &mdash; giving you confidence that your
            money is safe.
          </p>
        </div>
      </section>

      <section className="section-py bg-slate-50">
        <SectionHeading eyebrow="Our Savings Solutions" title="Structured Plans For Every Goal" center />
        <div className="container-page mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div key={s.title} className="overflow-hidden rounded-xl bg-white shadow-card">
              <img src={s.image} alt={s.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-base font-bold text-primary-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-primary-600 p-8 text-white shadow-card sm:p-10">
            <h3 className="text-xl font-extrabold">Key Features</h3>
            <ul className="mt-6 space-y-3">
              {keyFeatures.map((f) => (
                <li key={f} className="flex gap-3 text-primary-50">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-white">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-accent-600 p-8 text-white shadow-card sm:p-10">
            <h3 className="text-xl font-extrabold">Why Save With De-Mwananchi?</h3>
            <ul className="mt-6 space-y-3">
              {whySave.map((f) => (
                <li key={f} className="flex gap-3 text-accent-50">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-white">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="container-page mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-slate-600">
          At De-Mwananchi Financial Services, we believe that consistent saving is the first step toward
          financial empowerment. Whether you are planning for tomorrow or building capital for growth, we
          are here to walk with you every step of the way.
        </p>
      </section>

      <CTABanner image={womanCouchLaptop} title="Start your savings journey today" description="Open a savings plan built around your personal or business goals." />
    </div>
  )
}
