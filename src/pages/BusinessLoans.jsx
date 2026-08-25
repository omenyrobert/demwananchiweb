import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import ArrowCircleIcon from '../components/ArrowCircleIcon'
import {
  hardhatBuilding,
  blueprint1,
  architectureModel,
  bodaFleet,
  freightHighway,
  carKeysWoman,
  farmTablet,
  manMoneyDesk,
} from '../assets/images'

const requirements = [
  'Know Your Customer (KYC) documents',
  'Business documentation',
  'Personal account with De-Mwananchi',
  'Acceptable security',
]

const features = [
  { label: 'Loan Tenure', value: '1 to 60 months' },
  { label: 'Loan Amounts', value: 'UGX 100,000 to UGX 50,000,000' },
  { label: 'Registration', value: 'Duly incorporated with URSB or local authority' },
  { label: 'Repayment', value: 'Easy mobile money repayment via MTN & Airtel' },
]

const otherBusinessLoans = [
  { image: farmTablet, title: 'Asset Financing Loans', text: 'Finance equipment and productive assets to scale your operations.' },
  { image: bodaFleet, title: 'Boda Loans', text: 'Own your own motorcycle and grow a reliable income stream.' },
  { image: architectureModel, title: 'Development Loans', text: 'Capital for development projects from planning to completion.' },
  { image: blueprint1, title: 'Land Purchase & Construction', text: 'Secure land or fund a construction project with structured financing.' },
  { image: hardhatBuilding, title: 'Real Estate Development & Renovation', text: 'Financing for real estate development and property renovation.' },
  { image: carKeysWoman, title: 'Used & New Motor Vehicle Financing', text: 'Import financing for used and new vehicles, sourced from Japan.' },
]

export default function BusinessLoans() {
  return (
    <div>
      <PageHero
        crumb="Business Loans"
        title="Business Loans"
        subtitle="Security-backed financing for Small and Medium Enterprises duly incorporated and registered in Uganda."
        image={hardhatBuilding}
      />

      <section className="section-py bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Term Loans</p>
            <h2 className="section-title">Working Capital For Growing SMEs</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              De-Mwananchi is a security backed loan that is open to all Small and Medium Enterprises that
              are duly incorporated and registered with URSB or a local authority, with evidence of the same.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              SMEs with proven track records and regular cash flows from servicing reputable corporate
              organizations may qualify for a short-term working capital loan ranging from 1 to 60 months.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.label} className="rounded-lg border border-slate-100 p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary-600">{f.label}</p>
                  <p className="mt-1.5 text-sm font-semibold text-primary-950">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={blueprint1} alt="Business planning session" className="h-[460px] w-full rounded-xl object-cover shadow-card" />
        </div>
      </section>

      <section className="section-py bg-slate-50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img src={manMoneyDesk} alt="SME growth" className="order-2 h-96 w-full rounded-xl object-cover shadow-card lg:order-1" />
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Requirements</p>
            <h2 className="section-title">What You&rsquo;ll Need To Apply</h2>
            <ul className="mt-6 space-y-4">
              {requirements.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              De-Mwananchi contributes to the improvement of household livelihood by offering Home
              Improvement Loans for a period of up to 60 months. Security of our customer transactions
              remains cardinal to the company&rsquo;s daily operations &mdash; we run a computerized environment
              that helps to ensure customers&rsquo; personal information integrity and highly limits the risks of
              fraud and theft.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <SectionHeading eyebrow="More Options" title="Other Business Loans" center />
        <div className="container-page mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherBusinessLoans.map((loan) => (
            <div key={loan.title} className="overflow-hidden rounded-xl border border-slate-100 shadow-card">
              <img src={loan.image} alt={loan.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary-950">{loan.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{loan.text}</p>
                <Link to="/apply" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700">
                  Apply Now
                  <ArrowCircleIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py bg-primary-950">
        <div className="container-page grid items-center gap-10 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-4xl font-extrabold text-white">1-60</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-200">Months Tenure</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-white">50M</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-200">Max Loan (UGX)</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-white">MTN / Airtel</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-200">Mobile Repayment</p>
          </div>
        </div>
      </section>

      <CTABanner image={freightHighway} title="Ready to grow your business?" description="Get security-backed working capital tailored to your business cycle." />
    </div>
  )
}
