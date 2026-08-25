import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import HowItWorks from '../components/HowItWorks'
import CTABanner from '../components/CTABanner'
import {
  meetingLaptop,
  hardhatDesk,
  businessmanCharts,
  warehouseTeamTop,
  contractSign,
} from '../assets/images'

const coreValues = [
  {
    title: 'Customer Preference',
    text: 'Preferred financial institution by Individual and SME customers in our chosen markets through offering innovative products and services.',
  },
  {
    title: 'Responsible Lending',
    text: 'Increase value in our society by lending responsibly and supporting the society in which we operate.',
  },
  {
    title: 'Employer of Choice',
    text: 'Preferred employer by attracting, developing and retaining good quality employees.',
  },
]

export default function WhoWeAre() {
  return (
    <div>
      <PageHero
        crumb="Who We Are"
        title="Who We Are"
        subtitle="A young, vibrant and innovative team built to close the financing gap for individuals and SMEs in Uganda."
        image={meetingLaptop}
      />

      <section className="section-py bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About De-Mwananchi</p>
            <h2 className="section-title">Financial Services You Can Trust</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              De-Mwananchi Financial Services is a registered Financial Services Company providing short to
              medium term financing to Individuals, Small and Medium sized Enterprises (SME) in Uganda.
              De-Mwananchi is registered and supervised by the Bank of Uganda. The Company commenced
              operations in 2021.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The De-Mwananchi team is young, vibrant and innovative and has significant experience in the
              financial services industry. De-Mwananchi Financial Services was founded based on the need to
              fill a gap in the way financial services are offered to individuals and Small and Medium
              Enterprises.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              In order to provide the kind of services that not only ensure the retention of our customers
              but also attract others, we have established partnerships with some of the most reputable
              companies in the service industry in Uganda, Africa and across the globe. Our dedicated team of
              experts works around the clock to make sure that our customers get the best services,
              information, business management and marketing talent they need to become more profitable,
              better informed and competitive throughout their business cycle.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={hardhatDesk} alt="De-Mwananchi credit team" className="h-56 w-full rounded-xl object-cover shadow-card" />
            <img src={businessmanCharts} alt="Financial review" className="mt-8 h-56 w-full rounded-xl object-cover shadow-card" />
            <img src={warehouseTeamTop} alt="De-Mwananchi operations team" className="h-56 w-full rounded-xl object-cover shadow-card" />
            <img src={contractSign} alt="Client signing loan contract" className="mt-8 h-56 w-full rounded-xl object-cover shadow-card" />
          </div>
        </div>
      </section>

      <section className="section-py bg-slate-50">
        <SectionHeading eyebrow="What We Stand For" title="Our Core Values" center />
        <div className="container-page mt-14 grid gap-6 sm:grid-cols-3">
          {coreValues.map((v, i) => (
            <div key={v.title} className="rounded-xl bg-white p-8 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-lg font-extrabold text-accent-600">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-primary-950">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks id="how-it-works" />

      <section className="section-py bg-white">
        <div className="container-page grid gap-8 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-100 p-8 text-center shadow-card">
            <p className="text-4xl font-extrabold text-primary-600">2021</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Operations Commenced</p>
          </div>
          <div className="rounded-xl border border-slate-100 p-8 text-center shadow-card">
            <p className="text-4xl font-extrabold text-primary-600">BOU</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Registered &amp; Supervised</p>
          </div>
          <div className="rounded-xl border border-slate-100 p-8 text-center shadow-card">
            <p className="text-4xl font-extrabold text-primary-600">157+</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Clients Served</p>
          </div>
        </div>
      </section>

      <CTABanner image={meetingLaptop} title="Want to know more about us?" description="Reach out to our team — we would love to walk you through our products and process." />
    </div>
  )
}
