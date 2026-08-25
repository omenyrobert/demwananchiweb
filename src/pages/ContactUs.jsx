import { useState } from 'react'
import PageHero from '../components/PageHero'
import { meetingLaptop } from '../assets/images'

const contactPoints = [
  {
    label: 'Phone',
    lines: ['+256 777 218 558', '+256 759 450 337'],
    icon: 'M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-.826 1.68l-1.293.646a11.05 11.05 0 0 0 5.516 5.516l.646-1.293a1.5 1.5 0 0 1 1.68-.826l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z',
  },
  {
    label: 'Email',
    lines: ['demwananchi@gmail.com', 'info@demwananchi.com'],
    icon: 'M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3ZM19 8.839l-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z',
  },
  {
    label: 'Location',
    lines: ['Plot 78, Trikundas Street,', 'Bugiri Municipality, Eastern Uganda'],
    icon: 'M9.69 18.933a.375.375 0 0 0 .62 0c.674-.998 1.65-2.309 2.632-3.62 2.35-3.135 4.058-6.106 4.058-8.313A7 7 0 0 0 3 7c0 2.207 1.708 5.178 4.058 8.313.982 1.311 1.958 2.622 2.632 3.62ZM10 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  },
]

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        crumb="Contact Us"
        title="Let&rsquo;s Keep In Touch"
        subtitle="Have a question about a loan, savings plan, or logistics service? Reach out — our team responds fast."
        image={meetingLaptop}
      />

      <section className="section-py bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="section-title">Let&rsquo;s Keep In Touch</h2>
            <div className="mt-8 space-y-5">
              {contactPoints.map((point) => (
                <div key={point.label} className="flex items-start gap-4 rounded-xl border border-slate-100 p-5 shadow-card">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d={point.icon} />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-primary-950">{point.label}</p>
                    {point.lines.map((line) => (
                      <p key={line} className="text-sm text-slate-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-100 shadow-card">
              <iframe
                title="De-Mwananchi location"
                src="https://www.google.com/maps?q=Bugiri%20Municipality%2C%20Uganda&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-slate-50 p-8 shadow-card sm:p-10">
              <p className="eyebrow">Send A Message</p>
              <h2 className="section-title">Tell Us Your Thoughts</h2>

              {submitted ? (
                <div className="mt-8 rounded-lg border border-primary-200 bg-primary-50 p-6 text-primary-800">
                  <p className="font-bold">Thank you, {form.name || 'there'}!</p>
                  <p className="mt-1 text-sm">
                    Your message has been received. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', message: '' })
                    }}
                    className="mt-4 text-sm font-bold text-primary-700 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="field-label">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="field-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="field-label">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="field-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="field-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="field-input resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
