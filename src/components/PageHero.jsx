import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, image, crumb }) {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/95 to-primary-900/70" />
      <div className="container-page relative py-20 sm:py-28">
        <nav className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-300">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{crumb}</span>
        </nav>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-primary-100 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}
