// src/pages/Messages.jsx
import React, { useEffect, useState } from 'react'

function Messages() {
  const [messages, setMessages] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://gavin-backend.onrender.com/api/messages')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setMessages(data)
        } else {
          setError('Failed to load messages.')
        }
      })
      .catch(() => setError('Server error.'))
  }, [])

  return (
    <div className="container my-5">
      <h1>User Messages</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {messages.length === 0 && !error && <p>No messages yet.</p>}
      <div className="row">
        {messages.map(msg => (
          <div className="col-md-6 mb-3" key={msg.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{msg.name}</h5>
                <h6 className="card-subtitle text-muted">{msg.subject}</h6>
                <p className="card-text">{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Messages
