export default function SplitHeading({ dark, accent, center = false, light = false, size = 'lg' }) {
  const sizeClass = size === 'sm' ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'
  return (
    <div className={center ? 'text-center' : ''}>
      <h2 className={`${sizeClass} font-extrabold leading-tight ${light ? 'text-white' : 'text-primary-950'}`}>
        {dark}
        <span className="text-primary-600">{accent}</span>
      </h2>
      <div className={`mt-3 flex items-center gap-1.5 ${center ? 'justify-center' : ''}`}>
        <span className="flex gap-1">
          <span className="h-1 w-1 rounded-full bg-primary-300" />
          <span className="h-1 w-1 rounded-full bg-primary-300" />
          <span className="h-1 w-1 rounded-full bg-primary-300" />
        </span>
        <span className="h-1 w-10 rounded bg-primary-600" />
      </div>
    </div>
  )
}
