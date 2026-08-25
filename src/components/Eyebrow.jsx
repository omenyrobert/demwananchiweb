export default function Eyebrow({ children, center = false }) {
  return (
    <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <span className="h-[3px] w-6 rounded bg-primary-600" />
      <span className="font-script text-2xl font-semibold leading-none text-primary-600">{children}</span>
    </div>
  )
}
