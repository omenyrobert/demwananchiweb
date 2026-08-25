import { Link } from 'react-router-dom'
import ArrowCircleIcon from './ArrowCircleIcon'

export default function CTABanner({
  image,
  title = 'Ready to grow with De-Mwananchi?',
  description = 'Talk to our team today and find a financing solution that fits your needs.',
}) {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-accent-900/60" />
      <div className="container-page relative flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-primary-100">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/apply" className="btn-primary bg-accent-600 hover:bg-accent-700">
            Apply For Loan
            <ArrowCircleIcon className="h-5 w-5" />
          </Link>
          <Link to="/contact-us" className="btn-secondary">
            Contact Us
            <ArrowCircleIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
