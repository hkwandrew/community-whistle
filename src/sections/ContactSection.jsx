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

const ContactSection = ({ copy = defaultCopy }) => (
  <section id="contact" className="panel contact-panel">
    <h2 className="section-title archivo-800">{copy.title}</h2>
    <p className="body-medium text-center">
      {copy.intro}
    </p>
    <form className="contact-form">
      <label>
        <span>{copy.labels.name}</span>
        <input type="text" name="name" placeholder={copy.placeholders.name} />
      </label>
      <label>
        <span>{copy.labels.email}</span>
        <input type="email" name="email" placeholder={copy.placeholders.email} />
      </label>
      <label>
        <span>{copy.labels.message}</span>
        <textarea name="message" rows="5" placeholder={copy.placeholders.message} />
      </label>
      <button type="submit" className="submit-button">{copy.submit}</button>
    </form>
  </section>
)

export default ContactSection
