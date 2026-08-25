import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import ArrowCircleIcon from '../components/ArrowCircleIcon'
import {
  personalLoanLaptop,
  hardhatDesk,
  solarPanelMan,
  doctorPatient,
  schoolKidsUniform,
  carDealer1,
  womanCash,
  coupleDocuments,
  womanCouchLaptop,
} from '../assets/images'

const kycDocs = [
  'Know Your Customer (KYC) documents for applicant',
  'Proof of regular income by customer',
  'Three (3) months bank statements',
  'Proper information coordination',
  'Security (Land or property)',
]

const keyFeatures = [
  'Short term in nature, financing needs that banks typically do not finance',
  'Loan repayment period from 1 month to 60 months',
  'Top-ups available after 50% payment of the initial loan',
  'No collateral required',
  'Early loan repayment allowed',
  'Loan size depends on employee’s salary and tenure of loan',
]

const salarySteps = [
  {
    title: 'Sign MOU',
    text: 'De-Mwananchi and the employer sign an MOU. The employer agrees to facilitate payroll deductions and remit them together with a deduction schedule.',
  },
  {
    title: 'Employee Application',
    text: 'Three latest pay slips, financial card & National ID, three latest bank statements, and an introductory letter from the employer.',
  },
  {
    title: 'Review of Application',
    text: 'We confirm the employee’s pay is within MOU conditions, run a Credit Reference Bureau check, reconfirm employment status, and disburse within 24 hours once approved.',
  },
  {
    title: 'Monthly Repayment',
    text: 'De-Mwananchi submits the repayment schedule; the employer uploads deductions on payroll and transfers them until the loan is fully paid off.',
  },
]

const advantages = [
  'Access to quick and easy financing',
  'Finance for education, personal development and other short-term funding needs',
  'Interest rates are fixed over the tenor of the loan, providing peace of mind',
  'Short turnaround time between 1 hour and 24 hours',
  'Existing loan refinance — replace existing facilities with new loans',
]

const instantAdvanceDocs = [
  'Three latest pay slips stamped by employer',
  'Three latest bank statements (stamped by bank)',
  'Introduction letter from employer',
  'Copy of valid National Identity Card',
  'Three passport photos',
]

const otherLoans = [
  { image: solarPanelMan, title: 'Solar Loans', text: 'Finance a full solar installation and cut your electricity bills.' },
  { image: doctorPatient, title: 'Medical Loans', text: 'Quick access to funds for medical bills and emergencies.' },
  { image: schoolKidsUniform, title: 'School Fees Loans', text: 'Flexible loans to cover school fees on time, every term.' },
  { image: carDealer1, title: 'Car Logbook Loans', text: 'Unlock capital from your vehicle while you keep driving it.' },
  { image: womanCash, title: 'Jipange Loans', text: 'Quick, flexible cash to help you get organized for anything.' },
  { image: coupleDocuments, title: 'Events Loans', text: 'Fund weddings, functions and family events stress-free.' },
]

export default function IndividualLoans() {
  return (
    <div>
      <PageHero
        crumb="Individual Loans"
        title="Individual Loans"
        subtitle="We provide different loan products to individuals in our society — fast, fair and built around your income."
        image={personalLoanLaptop}
      />

      <section className="section-py bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Non-Payroll Loans</p>
            <h2 className="section-title">Financing For Life&rsquo;s Emergencies</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              De-Mwananchi provides short term loans to individuals who are in employment or have proof of
              regular income. These products are issued to individuals requiring funding to meet emergency
              needs which may include school fees, medical bills, acquiring assets, building or expanding
              your home, refinancing loans and many other unforeseen expenses.
            </p>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-primary-950">Requirements</h3>
            <ul className="mt-4 space-y-3">
              {kycDocs.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-primary-600">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img src={hardhatDesk} alt="Loan application review" className="h-[420px] w-full rounded-xl object-cover shadow-card" />
        </div>
      </section>

      <section className="section-py bg-slate-50">
        <SectionHeading eyebrow="Key Features" title="Salary Loan Highlights" center />
        <div className="container-page mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((f) => (
            <div key={f} className="rounded-xl bg-white p-6 shadow-card">
              <p className="text-sm font-medium leading-relaxed text-slate-700">{f}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py bg-white">
        <SectionHeading eyebrow="Step By Step" title="How Salary Loan Works" center />
        <div className="container-page mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {salarySteps.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-slate-100 p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-lg font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-bold text-primary-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py bg-primary-950">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img src={womanCouchLaptop} alt="Client managing loan repayment" className="h-96 w-full rounded-xl object-cover shadow-card" />
          <div>
            <p className="eyebrow text-accent-400">Advantages</p>
            <h2 className="section-title text-white">Advantages Of Salary Loan To Employee</h2>
            <ul className="mt-6 space-y-4">
              {advantages.map((item) => (
                <li key={item} className="flex gap-3 text-primary-100">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-accent-400">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-page rounded-2xl bg-slate-50 p-8 sm:p-12">
          <p className="eyebrow">For Civil Servants</p>
          <h2 className="section-title">Instant Salary Advances</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            De-Mwananchi issues instant salary advance loans to civil servants. The documents required are as
            simple as below:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {instantAdvanceDocs.map((doc) => (
              <div key={doc} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-accent-600">
                  <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM5 6.75A.75.75 0 0 1 5.75 6h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 6.75Zm0 3A.75.75 0 0 1 5.75 9h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 9.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-slate-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-slate-50">
        <SectionHeading eyebrow="More Options" title="Other Individual Loans" center />
        <div className="container-page mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherLoans.map((loan) => (
            <div key={loan.title} className="overflow-hidden rounded-xl bg-white shadow-card">
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

      <CTABanner image={personalLoanLaptop} title="Need funds fast?" description="Apply for an individual loan today and get a response within 24 hours." />
    </div>
  )
}
