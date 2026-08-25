export default function SectionHeading({ eyebrow, title, description, center = false, light = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-primary-100' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
