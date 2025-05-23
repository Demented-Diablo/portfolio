import React, { useState, useEffect } from 'react'
import '../styles/LandingPage.css'
import '../styles/Contact.css'
import 'devicon/devicon.min.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState({})
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    const savedDraft = localStorage.getItem('contactDraft')
    if (savedDraft) {
      const draft = JSON.parse(savedDraft)
      setName(draft.name || '')
      setEmail(draft.email || '')
      setSubject(draft.subject || '')
      setMessage(draft.message || '')
      setConsent(draft.consent || false)
    }
  }, [])

  useEffect(() => {
    const draft = { name, email, subject, message, consent }
    localStorage.setItem('contactDraft', JSON.stringify(draft))
  }, [name, email, subject, message, consent])

  const validateFields = () => {
    let errs = {}
    if (!name.trim()) errs.name = 'Name is required.'
    if (!email.trim()) errs.email = 'Email is required.'
    if (!subject.trim()) errs.subject = 'Subject is required.'
    if (!message.trim()) errs.message = 'Message is required.'
    if (!consent) errs.consent = 'Consent is required.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateFields()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setFeedback('Sending...')

    try {
      const response = await fetch("https://gavin-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message })
      })

      const data = await response.json()
      if (data.success) {
        setFeedback('Message submitted successfully!')
        localStorage.removeItem('contactDraft')
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setConsent(false)
      } else {
        setFeedback(data.error || 'Something went wrong.')
      }
    } catch (err) {
      console.error(err)
      setFeedback('Server error. Try again later.')
    }
  }

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2 className="contact-heading">Contact Me</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className={errors.name ? 'error' : ''} />
          {errors.name && <div className="error-msg">{errors.name}</div>}

          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={errors.email ? 'error' : ''} />
          {errors.email && <div className="error-msg">{errors.email}</div>}

          <label>Subject</label>
          <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className={errors.subject ? 'error' : ''} />
          {errors.subject && <div className="error-msg">{errors.subject}</div>}

          <label>Message</label>
          <textarea rows="4" value={message} onChange={e => setMessage(e.target.value)} className={errors.message ? 'error' : ''}></textarea>
          {errors.message && <div className="error-msg">{errors.message}</div>}

          <div className="form-check">
            <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} />
            <label>I consent to be contacted and for my info to be stored securely.</label>
          </div>
          {errors.consent && <div className="error-msg">{errors.consent}</div>}

          <button type="submit">Send</button>
        </form>

        {feedback && <div className="feedback-msg">{feedback}</div>}

        <div className="social-icons">
          <a href="https://linkedin.com/in/gsharma06" target="_blank" rel="noopener noreferrer">
            <i className="devicon-linkedin-plain colored"></i>
          </a>
          <a href="https://github.com/Demented-Diablo" target="_blank" rel="noopener noreferrer">
            <i className="devicon-github-original colored"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
