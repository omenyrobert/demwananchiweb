import { Link } from 'react-router-dom'
import ArrowCircleIcon from './ArrowCircleIcon'

export default function ProductCard({ image, title, description, to }) {
  return (
    <Link
      to={to}
      className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-xl shadow-card"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/50 to-transparent transition group-hover:from-accent-800/90" />
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-primary-100">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white opacity-0 transition group-hover:opacity-100">
          Learn more
          <ArrowCircleIcon className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
