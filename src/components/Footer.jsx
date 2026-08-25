import { Link } from 'react-router-dom'
import { logo } from '../assets/images'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/who-we-are', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/logistics', label: 'Logistics' },
]

const loanLinks = [
  { to: '/individual-loans', label: 'Individual Loans' },
  { to: '/business-loans', label: 'Business Loans' },
  { to: '/savings', label: 'Savings' },
  { to: '/agent-banking', label: 'Agent Banking' },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94Z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    path: 'M22 5.9c-.68.3-1.4.5-2.16.6a3.76 3.76 0 0 0 1.66-2.08c-.73.43-1.53.75-2.39.92A3.75 3.75 0 0 0 12.85 9c0 .3.03.58.1.85A10.66 10.66 0 0 1 3.15 5.1a3.75 3.75 0 0 0 1.16 5A3.7 3.7 0 0 1 2.6 9.6v.05a3.75 3.75 0 0 0 3 3.68c-.35.1-.72.14-1.1.14-.27 0-.53-.02-.79-.07a3.76 3.76 0 0 0 3.5 2.6A7.53 7.53 0 0 1 2 17.54a10.62 10.62 0 0 0 5.75 1.69c6.9 0 10.68-5.72 10.68-10.68l-.01-.49A7.6 7.6 0 0 0 22 5.9Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M6.94 8.5H3.56V20.5h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.5h-3.37v-6.3c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33v6.41H9.18V8.5h3.24v1.64h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.75 2.63 4.75 5.7v7.43Z',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    path: 'M16.6 2h-3.2v13.36a2.72 2.72 0 1 1-2.72-2.72c.24 0 .48.03.72.1V9.5a5.9 5.9 0 1 0 5.2 5.86V8.72a8.1 8.1 0 0 0 4.6 1.44V6.94a4.86 4.86 0 0 1-4.6-4.94Z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src={logo} alt="De-Mwananchi" className="h-11 w-auto rounded bg-white p-1" />
            <span className="text-lg font-extrabold text-white">De-Mwananchi</span>
          </div>
          <p className="text-sm leading-relaxed text-primary-200">
            De-Mwananchi Financial Services is a registered Financial Services Company providing short to
            medium term financing to Individuals, Small and Medium sized Enterprises (SME) in Uganda.
            De-Mwananchi is registered and supervised by the Bank of Uganda.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent-600"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-primary-200 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Loans We Offer</h4>
          <ul className="space-y-2.5 text-sm">
            {loanLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-primary-200 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-200">
            <li>Tel: +256 777 218 558</li>
            <li>Tel: +256 759 450 337</li>
            <li>Email: demwananchi@gmail.com</li>
            <li>Email: info@demwananchi.com</li>
            <li>Plot 78, Trikundas Street, Bugiri Municipality, Eastern Uganda</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-primary-900">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-primary-300 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} De-Mwananchi. All Rights Reserved.</p>
          <p>Powered By Jireh Dev Software</p>
        </div>
      </div>
    </footer>
  )
}
