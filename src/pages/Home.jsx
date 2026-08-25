import { Link } from 'react-router-dom'
import {
  heroSchool,
  schoolKidsUniform,
  warehouseTeam1,
  businessmanCharts,
  coupleDocuments,
  carDealer1,
  marketWomanMask,
  marketVendorPos,
  saveJar,
  posSwipe,
  dafTruckFront,
  contractSign,
} from '../assets/images'
import Eyebrow from '../components/Eyebrow'
import ArrowCircleIcon from '../components/ArrowCircleIcon'
import SplitHeading from '../components/SplitHeading'
import ProductCard from '../components/ProductCard'
import HowItWorks from '../components/HowItWorks'
import StatsBand from '../components/StatsBand'
import HeroSlider from '../components/HeroSlider'
import TestimonialsGrid from '../components/TestimonialsGrid'
import CTABanner from '../components/CTABanner'

const heroImages = [heroSchool, marketVendorPos, warehouseTeam1, businessmanCharts, schoolKidsUniform]

const products = [
  {
    image: marketWomanMask,
    title: 'Individual Loans',
    description: 'We provide different loan products to individuals in our society.',
    to: '/individual-loans',
  },
  {
    image: marketVendorPos,
    title: 'Business Loans',
    description: 'We offer different loan products to companies and institutions that provide services.',
    to: '/business-loans',
  },
  {
    image: saveJar,
    title: 'Savings',
    description: 'We offer savings services to individuals, groups and companies.',
    to: '/savings',
  },
  {
    image: posSwipe,
    title: 'Agent Banking',
    description: 'CIC Insurance agent, third party, motorcycle & commercial insurance.',
    to: '/agent-banking',
  },
]

const coreValues = [
  {
    text: 'Preferred financial Institution by Individual and SME customers in our chosen markets through offering innovative products and services.',
    icon: 'M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z',
  },
  {
    text: 'Increase value in our society by lending responsibly and supporting the society in which we operate.',
    icon: 'M12 20.354c-.31.174-.686.174-.996 0C7.65 18.283 3 14.847 3 10.125 3 7.294 5.294 5 8.125 5c1.53 0 2.903.68 3.875 1.756A5.169 5.169 0 0 1 15.875 5C18.706 5 21 7.294 21 10.125c0 4.722-4.65 8.158-8.004 10.229Z',
    stroke: true,
  },
  {
    text: 'Preferred employer by attracting, developing and retaining good quality employees.',
    icon: 'M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z',
  },
]

const philosophy = [
  'Great customer service and experience',
  "Making access to short term financing easy for both individuals and SME's",
  'Innovative and efficient channels for clients to access financing',
  'Short turnaround time, minimal documentation, precise credit appraisal and efficient service to all',
]

const whyChooseUs = [
  'We engage our clients to find out how we can improve our service delivery.',
  'We work with employers to ensure needs of employees are met.',
  'We provide mobile service to reduce the cost to both the employer and the employee.',
  'We are efficient & effective.',
  'We add value to the lives of our clients by providing access to other products through our strategic move.',
]

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-card ring-1 ring-slate-100">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      </span>
      <p className="text-sm font-medium leading-relaxed text-slate-700">{children}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950">
        <HeroSlider images={heroImages} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
        <div className="container-page relative flex min-h-[620px] flex-col items-center justify-center py-24 text-center sm:min-h-[680px]">
          <h1 className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-6xl">
            <span className="block">Supporting Individuals</span>
            <span className="block">and SME&rsquo;s</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">
            Availing Financial Needs Through Short And Medium Term Loan Schemes
          </p>
          <div className="mt-10">
            <Link to="/who-we-are" className="btn-primary">
              Learn More
              <ArrowCircleIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section-py bg-slate-50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img src={coupleDocuments} alt="Client reviewing loan documents" className="h-[420px] w-full rounded-xl object-cover shadow-card" />
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold text-primary-950">
                Our <span className="text-primary-600">Vision</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                To be the most quick financial service providers, reliable and member friendly society.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-primary-950">
                Our <span className="text-primary-600">Mission</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                To be unique member owned financial institution aimed at gearing financial growth for members
                so as to attain stable household incomes hence bettering their standards of living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-py bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <div className="mt-2">
              <SplitHeading dark="About " accent="De-Mwananchi" />
            </div>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              De-Mwananchi Financial Services is a registered Financial Services Company providing short to
              medium term financing to Individuals, Small and Medium sized Enterprises (SME) in Uganda.
              De-Mwananchi is registered and supervised by the Bank of Uganda. The Company commenced
              operations in 2021.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              De-Mwananchi team is young, vibrant and innovative and has significant experience in the
              financial services industry.
            </p>

            <div className="mt-8">
              <p className="text-sm font-bold text-primary-950">Client&rsquo;s Reviews</p>
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Client&rsquo;s Satisfaction</span>
                <span>87%</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[87%] rounded-full bg-primary-600" />
              </div>
            </div>

            <Link to="/contact-us" className="btn-primary mt-8">
              Contact Us
              <ArrowCircleIcon className="h-5 w-5" />
            </Link>
          </div>
          <img src={carDealer1} alt="De-Mwananchi client" className="h-[460px] w-full rounded-xl object-cover shadow-card" />
        </div>
      </section>

      {/* Core Values */}
      <section className="section-py bg-slate-50">
        <div className="container-page">
          <SplitHeading dark="Our Core " accent="Values" center />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {coreValues.map((v) => (
              <div key={v.text} className="rounded-xl bg-white p-8 text-center shadow-card ring-1 ring-slate-100">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill={v.stroke ? 'none' : 'currentColor'}
                    stroke={v.stroke ? 'currentColor' : 'none'}
                    strokeWidth={v.stroke ? 1.5 : 0}
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                  </svg>
                </span>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-py bg-white">
        <div className="container-page text-center">
          <Eyebrow center>What We Offer</Eyebrow>
          <div className="mt-2">
            <SplitHeading dark="DE-MWANANCHI " accent="PRODUCTS" center />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            De-mwananchi logistics supports Individuals and SME&rsquo;s by availing them with financial needs
            through short and medium term loan schemes. Our loans products are sub divided into two
            different categories.
          </p>
        </div>
        <div className="container-page mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-py bg-slate-50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img src={dafTruckFront} alt="De-Mwananchi logistics" className="h-96 w-full rounded-xl object-cover shadow-card" />
          <div>
            <SplitHeading dark="OUR " accent="PHILOSOPHY" size="sm" />
            <div className="mt-8 space-y-4">
              {philosophy.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-py bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>What makes us better</Eyebrow>
            <div className="mt-2">
              <SplitHeading dark="Why Choose " accent="Us" />
            </div>
            <div className="mt-8 space-y-4">
              {whyChooseUs.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </div>
          </div>
          <img src={marketWomanMask} alt="De-Mwananchi client in the market" className="h-[560px] w-full rounded-xl object-cover shadow-card" />
        </div>
      </section>

      {/* How it works + Stats */}
      <HowItWorks />
      <StatsBand image={contractSign} />

      {/* Testimonials */}
      <section className="section-py bg-white">
        <div className="container-page text-center">
          <Eyebrow center>Clients</Eyebrow>
          <div className="mt-2">
            <SplitHeading dark="Our " accent="Testimonials" center />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            For the past years we have serviced several clients from different sectors of the economy
            within the country. Our clients provide goods and services individuals, institutions
            Non-Government Organizations, large Corporates, the Banking Sector, Telecoms Industry and
            agricultural community among others.
          </p>
        </div>
        <div className="container-page mt-14">
          <TestimonialsGrid />
        </div>
      </section>

      <CTABanner image={contractSign} />
    </div>
  )
}
