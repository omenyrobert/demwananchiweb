import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import { agentPos, posSwipe, marketVendorPos } from '../assets/images'

const partnerBanks = ['Centenary Bank', 'Stanbic Bank Uganda', 'Equity Bank Uganda']

const services = [
  'Deposit money into bank accounts',
  'Withdraw cash',
  'Check account balances',
  'Transfer funds',
  'Pay utility bills',
  'Make school fees payments',
  'Perform other supported bank transactions',
]

const whyUs = [
  { title: 'Convenience', text: 'Access banking services closer to your home or business.' },
  { title: 'Time-Saving', text: 'Avoid long queues at bank branches.' },
  { title: 'Secure Transactions', text: 'All transactions are processed through official bank systems.' },
  { title: 'Extended Service Hours', text: 'Enjoy flexible operating hours.' },
  { title: 'Trusted Service Provider', text: 'Operated by a regulated financial services company supervised by the Bank of Uganda.' },
]

export default function AgentBanking() {
  return (
    <div>
      <PageHero
        crumb="Agent Banking"
        title="Agent Banking"
        subtitle="Banking services brought closer to you — quick, convenient and secure, without visiting a branch."
        image={agentPos}
      />

      <section className="section-py bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">In Partnership With Leading Banks</p>
            <h2 className="section-title">Banking Services, Closer To You</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              At De-Mwananchi Financial Services, we bring banking services closer to you through our
              convenient and reliable Agent Banking solutions. In partnership with leading financial
              institutions in Uganda, we enable our customers to access essential banking services quickly
              and securely &mdash; without the need to visit a bank branch.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {partnerBanks.map((bank) => (
                <div key={bank} className="rounded-lg border-2 border-primary-100 bg-primary-50 px-4 py-4 text-center text-sm font-bold text-primary-800">
                  {bank}
                </div>
              ))}
            </div>
          </div>
          <img src={marketVendorPos} alt="Agent banking transaction" className="h-[420px] w-full rounded-xl object-cover shadow-card" />
        </div>
      </section>

      <section className="section-py bg-slate-50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img src={posSwipe} alt="Card payment via POS" className="order-2 h-96 w-full rounded-xl object-cover shadow-card lg:order-1" />
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Services Offered</p>
            <h2 className="section-title">Everything You Need, In One Place</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Through our authorized agent banking platform, customers can:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-slate-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <SectionHeading eyebrow="Why Use Our Agent Banking Services?" title="Built For Your Convenience" center />
        <div className="container-page mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyUs.map((item) => (
            <div key={item.title} className="rounded-xl bg-slate-50 p-6 text-center shadow-card">
              <h3 className="text-sm font-bold text-primary-950">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="container-page mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-slate-600">
          Our goal is to enhance financial inclusion by making banking services accessible, especially to
          individuals and SMEs who may not easily reach traditional bank branches. At De-Mwananchi Financial
          Services, we are committed to providing reliable, secure, and customer-focused financial solutions
          that support your daily banking needs.
        </p>
      </section>

      <CTABanner image={agentPos} title="Find an agent near you" description="Visit our office or reach out on WhatsApp to locate your nearest agent banking point." />
    </div>
  )
}
