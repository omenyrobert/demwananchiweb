import SplitHeading from './SplitHeading'

const steps = [
  {
    title: 'Approach Our Office',
    text: 'An individual approaches our office for a loan.',
    icon: 'M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.061-1.061l-8.69-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689ZM12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z',
  },
  {
    title: 'KYC Verification',
    text: 'De-Mwananchi confirms individual KYC documentation and supporting documents.',
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    stroke: true,
  },
  {
    title: 'Credit Appraisal',
    text: 'A thorough credit appraisal is conducted on the application.',
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z',
    stroke: true,
  },
  {
    title: 'Committee Approval',
    text: 'Our credit committee reviews and approves the facility.',
    icon: 'M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z',
  },
  {
    title: 'Funds Disbursed',
    text: 'Security perfection is undertaken and finance is advanced to the client.',
    icon: 'M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3C17.25 3.851 14.9 1.5 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z',
  },
]

export default function HowItWorks({ id }) {
  return (
    <section id={id} className="section-py bg-white">
      <div className="container-page">
        <SplitHeading dark="How it " accent="Works" center />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.title} className="relative rounded-xl bg-white p-6 text-center shadow-card ring-1 ring-slate-100">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill={step.stroke ? 'none' : 'currentColor'}
                  stroke={step.stroke ? 'currentColor' : 'none'}
                  strokeWidth={step.stroke ? 1.5 : 0}
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
              </span>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{step.text}</p>
              {i < steps.length - 1 && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="absolute -right-4 top-10 hidden h-6 w-6 text-primary-200 lg:block"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
