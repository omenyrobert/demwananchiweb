import { testimonials } from '../data/testimonials'

function Stars({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1.2}
          className={`h-5 w-5 ${i < rating ? 'text-amber-400' : 'text-amber-300'}`}
        >
          <path d="M10 1.5l2.472 5.01 5.528.803-4 3.899.944 5.507L10 14.25l-4.944 2.469.944-5.507-4-3.899 5.528-.803L10 1.5Z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <div key={t.name} className="rounded-xl bg-white p-8 shadow-card ring-1 ring-slate-100">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9 text-primary-100">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-4v-10h10z" />
          </svg>
          <p className="mt-4 text-sm italic leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-primary-950">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
            <Stars rating={t.rating} />
          </div>
        </div>
      ))}
    </div>
  )
}
