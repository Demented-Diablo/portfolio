// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react'

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateFields()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})

    try {
      const response = await fetch('https://gavin-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        setFeedback(data.error || 'Error submitting the form.')
      }
    } catch (err) {
      setFeedback('Server error. Please try again later.')
    }
  }

  const validateFields = () => {
    let errs = {}
    if (!name.trim()) errs.name = 'Name is required.'
    if (!email.trim()) errs.email = 'Email is required.'
    if (!subject.trim()) errs.subject = 'Subject is required.'
    if (!message.trim()) errs.message = 'Message is required.'
    if (!consent) errs.consent = 'You must consent to be contacted.'
    return errs
  }

  return (
    <div className="container my-5">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label" htmlFor="contactName">Name</label>
          <input
            id="contactName"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="contactEmail">Email</label>
          <input
            id="contactEmail"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="contactSubject">Subject</label>
          <input
            id="contactSubject"
            type="text"
            className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="contactMessage">Message</label>
          <textarea
            id="contactMessage"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <div className="form-check mb-3">
          <input
            id="consentCheck"
            type="checkbox"
            className={`form-check-input ${errors.consent ? 'is-invalid' : ''}`}
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="consentCheck">
            I consent to be contacted and for my info to be stored securely.
          </label>
          {errors.consent && <div className="invalid-feedback d-block">{errors.consent}</div>}
        </div>

        <button className="btn btn-primary" type="submit">Send</button>
      </form>

      {feedback && <div className="alert alert-info mt-3">{feedback}</div>}
    </div>
  )
}

export default Contact
