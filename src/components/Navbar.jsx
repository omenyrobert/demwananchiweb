import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { logo } from '../assets/images'
import ArrowCircleIcon from './ArrowCircleIcon'

const whoWeAreLinks = [
  { to: '/who-we-are', label: 'About Us' },
  { to: '/who-we-are#how-it-works', label: 'How It Works' },
]

const productLinks = [
  { to: '/individual-loans', label: 'Individual Loans' },
  { to: '/business-loans', label: 'Business Loans' },
  { to: '/savings', label: 'Savings' },
  { to: '/agent-banking', label: 'Agent Banking' },
]

function DesktopDropdown({ label, links }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 py-2 text-[16px] font-semibold text-slate-800 transition hover:text-primary-600"
        aria-expanded={open}
      >
        {label}
        <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full w-56 rounded-lg border border-slate-100 bg-white py-2 shadow-card">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="block px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-primary-50 hover:text-primary-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileAccordion({ label, links, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-white"
      >
        {label}
        <svg viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="pb-2 pl-3">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={onNavigate}
              className="block py-2 text-sm font-medium text-primary-100 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinkClass = ({ isActive }) =>
    `py-2 text-[16px] font-semibold transition hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-slate-800'}`

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${scrolled ? 'shadow-[0_4px_20px_-6px_rgba(15,30,90,0.18)]' : ''}`}
    >
      <div className="mx-auto flex w-full max-w-[1720px] items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="De-Mwananchi Financial Services" className="h-14 w-auto" />
          <span className="hidden text-[32px] font-extrabold leading-tight tracking-tight text-slate-900 sm:block">
            De-Mwananchi
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <DesktopDropdown label="Who We Are" links={whoWeAreLinks} />
          <DesktopDropdown label="Our Products" links={productLinks} />
          <NavLink to="/logistics" className={navLinkClass}>
            Logistics
          </NavLink>
          <NavLink to="/contact-us" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/apply" className="hidden items-center gap-2 bg-primary-600 px-6 py-6 text-sm font-bold uppercase tracking-wide text-white shadow-card transition hover:bg-primary-700 sm:inline-flex">
            Apply for Loan
            <ArrowCircleIcon className="h-5 w-5" />
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-primary-950 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-24 z-40 overflow-y-auto bg-primary-950 lg:hidden">
          <div className="container-page py-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 py-3 text-base font-semibold text-white"
            >
              Home
            </Link>
            <MobileAccordion label="Who We Are" links={whoWeAreLinks} onNavigate={() => setMobileOpen(false)} />
            <MobileAccordion label="Our Products" links={productLinks} onNavigate={() => setMobileOpen(false)} />
            <Link
              to="/logistics"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 py-3 text-base font-semibold text-white"
            >
              Logistics
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 py-3 text-base font-semibold text-white"
            >
              Contact Us
            </Link>
            <Link
              to="/apply"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-md bg-accent-600 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white"
            >
              Apply for Loan
              <ArrowCircleIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
