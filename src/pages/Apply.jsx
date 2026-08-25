import { useState } from 'react'
import PageHero from '../components/PageHero'
import { contractSign } from '../assets/images'

const loanTypes = [
  'Individual Loan',
  'Business Loan',
  'Salary Loan',
  'School Fees',
  'Medical Loan',
  'Solar Loan',
  'Car Logbook Loan',
  'Jipange Loan',
  'Events Loan',
  'Asset Financing',
  'Boda Loan',
  'Development Loan',
  'Land Purchase & Construction',
  'Real Estate Development & Renovation',
  'Motor Vehicle Financing',
]

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  occupation: '',
  dob: '',
  gender: 'Male',
  loanType: loanTypes[0],
  amount: '',
  purpose: '',
}

export default function Apply() {
  const [form, setForm] = useState(initialState)
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
        crumb="Apply For Loan"
        title="Apply For A Loan"
        subtitle="Fill in the form below and one of our loan officers will get back to you within 24 hours."
        image={contractSign}
      />

      <section className="section-py bg-white">
        <div className="container-page mx-auto max-w-4xl">
          {submitted ? (
            <div className="rounded-2xl border border-primary-200 bg-primary-50 p-10 text-center shadow-card">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
              </span>
              <h2 className="mt-6 text-2xl font-extrabold text-primary-950">Application Received</h2>
              <p className="mt-3 text-slate-600">
                Thank you, {form.name || 'valued client'}. Your {form.loanType.toLowerCase()} application has
                been submitted. Our loan officers will contact you shortly on {form.phone || 'your provided phone number'}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setForm(initialState)
                }}
                className="btn-primary mt-8"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">
                    Name
                  </label>
                  <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Name" className="field-input" />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email" className="field-input" />
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="Phone Number" className="field-input" />
                </div>
                <div>
                  <label htmlFor="address" className="field-label">
                    Address
                  </label>
                  <input id="address" name="address" required value={form.address} onChange={handleChange} placeholder="Address" className="field-input" />
                </div>
                <div>
                  <label htmlFor="occupation" className="field-label">
                    Occupation
                  </label>
                  <input id="occupation" name="occupation" required value={form.occupation} onChange={handleChange} placeholder="Occupation" className="field-input" />
                </div>
                <div>
                  <label htmlFor="dob" className="field-label">
                    Date Of Birth
                  </label>
                  <input id="dob" name="dob" type="date" required value={form.dob} onChange={handleChange} className="field-input" />
                </div>
                <div>
                  <label htmlFor="gender" className="field-label">
                    Gender
                  </label>
                  <select id="gender" name="gender" value={form.gender} onChange={handleChange} className="field-input">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="loanType" className="field-label">
                    Loan Type
                  </label>
                  <select id="loanType" name="loanType" value={form.loanType} onChange={handleChange} className="field-input">
                    {loanTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="amount" className="field-label">
                    Amount (UGX)
                  </label>
                  <input id="amount" name="amount" type="number" min="0" required value={form.amount} onChange={handleChange} placeholder="Amount" className="field-input" />
                </div>
                <div>
                  <label htmlFor="purpose" className="field-label">
                    Loan Purpose
                  </label>
                  <input id="purpose" name="purpose" required value={form.purpose} onChange={handleChange} placeholder="Loan Purpose" className="field-input" />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                Apply Now
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
