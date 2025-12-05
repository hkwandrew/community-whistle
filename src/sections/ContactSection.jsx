import { useState } from 'react'

const defaultCopy = {
  title: 'Contact Us',
  intro: 'Have a question or suggestion? Use the form below to reach our site admins. We’ll respond as quickly as possible.',
  labels: {
    name: 'Your Name (required)',
    email: 'Email Address (required)',
    message: 'Your Message (required)'
  },
  placeholders: {
    name: 'Fran Wilson',
    email: 'name@domain.com',
    message: 'Please type your message here...'
  },
  submit: 'Submit'
}

const ContactSection = ({ copy = defaultCopy }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const contactEnabled = import.meta.env.VITE_CONTACT_ENABLED === 'true'

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please fill out all required fields.' })
      return
    }

    if (!contactEnabled) {
      setStatus({
        state: 'sent',
        message: 'Thanks! This preview is for demo only—messages are not sent from this build.'
      })
      setFormData({ name: '', email: '', message: '' })
      return
    }

    setStatus({ state: 'sending', message: '' })

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      let data = {}
      try {
        data = await response.json()
      } catch {
        data = {}
      }

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Send failed. Please try again.')
      }

      setStatus({ state: 'sent', message: 'Thanks! We received your message.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'Something went wrong. Please try again later.' })
    }
  }

  return (
    <section id="contact" className="panel contact-panel flex-container flex-dir-col">
      <h2 className="section-title archivo-800">{copy.title}</h2>
      <p className="body-medium roboto-400 text-center">
        {copy.intro}
      </p>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name" className="roboto-400 body-medium">
          <span>{copy.labels.name}</span>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={copy.placeholders.name}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email" className="roboto-400 body-medium">
          <span>{copy.labels.email}</span>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={copy.placeholders.email}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="message" className="roboto-400 body-medium">
          <span>{copy.labels.message}</span>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder={copy.placeholders.message}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button
          type="submit"
          className="submit-button hotline-button archivo-800 body-xlarge"
          disabled={status.state === 'sending'}
        >
          {status.state === 'sending' ? 'Sending…' : copy.submit}
        </button>
        {status.state !== 'idle' && status.message && (
          <p
            className={`form-status body-medium roboto-400 ${status.state === 'error' ? 'form-status--error' : 'form-status--success'}`}
            role={status.state === 'error' ? 'alert' : undefined}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  )
}

export default ContactSection
