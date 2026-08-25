import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import {
  dafTruckFront,
  truckBlueSky,
  freightHighway,
  shuttleVan,
  warehouseBoxes,
} from '../assets/images'

const coreServices = [
  'Shipping Agent (Air, Road and Sea)',
  'Trans-shipment and Transportation',
  'Sea and Air Cargo consolidation',
  'Clearing and Forwarding',
  'Onsite delivery upon request',
]

const truckServices = [
  'Bulk goods transportation',
  'Construction materials delivery',
  'Agricultural produce transportation',
  'Wholesale and retail distribution',
  'Business inventory restocking',
  'Inter-district cargo movement',
]

const shuttleServices = [
  'Staff and corporate transport',
  'School and institutional transport',
  'Field operations transport',
  'Product distribution for small businesses',
  'Community outreach and mobile service support',
]

export default function Logistics() {
  return (
    <div>
      <PageHero
        crumb="Logistics"
        title="Logistics"
        subtitle="De-Mwananchi Logistics aims at becoming a major player in the logistics sector through its experienced and committed staff."
        image={dafTruckFront}
      />

      <section className="section-py bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title">Reliable Cargo &amp; Freight Services</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Services provided in this sector include:
            </p>
            <ul className="mt-6 space-y-4">
              {coreServices.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={warehouseBoxes} alt="Warehouse operations" className="h-[420px] w-full rounded-xl object-cover shadow-card" />
        </div>
      </section>

      <section className="section-py bg-slate-50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img src={truckBlueSky} alt="Heavy-duty logistics truck" className="h-96 w-full rounded-xl object-cover shadow-card" />
          <div>
            <p className="eyebrow">Truck Logistics Services</p>
            <h2 className="section-title">2 Heavy-Duty Trucks</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our trucks are designed to handle medium to large-scale transportation needs, offering:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {truckServices.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              These trucks are ideal for SMEs and growing enterprises that require safe, timely, and
              cost-effective movement of goods across Uganda.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Shuttle Transport Services</p>
            <h2 className="section-title">15 Shuttle Vehicles</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our well-maintained shuttle vehicles provide flexible and responsive transport solutions,
              including:
            </p>
            <ul className="mt-6 space-y-4">
              {shuttleServices.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              The shuttle fleet ensures quick mobility for organizations and businesses that depend on
              consistent, organized transportation.
            </p>
          </div>
          <img src={shuttleVan} alt="De-Mwananchi shuttle vehicle" className="h-[420px] w-full rounded-xl object-cover shadow-card" />
        </div>
      </section>

      <section className="section-py bg-primary-950">
        <div className="container-page grid gap-8 text-center sm:grid-cols-3">
          <div>
            <p className="text-4xl font-extrabold text-white">2</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-200">Heavy-Duty Trucks</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white">15</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-200">Shuttle Vehicles</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white">3</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-200">Transport Modes: Air, Road, Sea</p>
          </div>
        </div>
      </section>

      <CTABanner image={freightHighway} title="Need reliable cargo movement?" description="Talk to our logistics team about shipping, clearing, forwarding and onsite delivery." />
    </div>
  )
}
