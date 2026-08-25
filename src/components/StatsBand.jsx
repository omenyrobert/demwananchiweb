import StatCounter from './StatCounter'

const defaultStats = [
  { value: 157, suffix: '+', label: 'Clients' },
  { value: 98, suffix: '%', label: 'Benefits' },
  { value: 17, suffix: '+', label: 'Loans' },
  { value: 99, suffix: '%', label: 'Impact' },
]

export default function StatsBand({ image, stats = defaultStats }) {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary-950/85" />
      <div className="container-page relative grid grid-cols-2 gap-8 py-16 sm:grid-cols-4 sm:py-20">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
