import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const MESSAGES_FILE = path.join(__dirname, 'messages.json')

app.get('/api/messages', (req, res) => {
  fs.readFile(MESSAGES_FILE, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read messages file' })
    }
    try {
      const messages = JSON.parse(data)
      res.json(messages)
    } catch (parseErr) {
      return res.status(500).json({ error: 'Error parsing messages file' })
    }
  })
})

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body

  const safeName = sanitizeName(name)
  const safeEmail = sanitizeEmail(email)
  const safeSubject = sanitizeSubject(subject)
  const safeMessage = sanitizeMessage(message)

  fs.readFile(MESSAGES_FILE, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read messages file' })
    }
    let messagesArray = []
    try {
      messagesArray = JSON.parse(data)
    } catch {
      messagesArray = []
    }
    const newEntry = {
      id: Date.now(),
      name: safeName,
      subject: safeSubject,
      message: safeMessage
    }
    messagesArray.push(newEntry)

    fs.writeFile(MESSAGES_FILE, JSON.stringify(messagesArray, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: 'Failed to write to messages file' })
      }
      return res.json({ success: true, message: 'Message saved successfully!' })
    })
  })
})

function sanitizeName(name) {
  return name.replace(/[^a-zA-ZÀ-ž\s'-]/g, '')
}
function sanitizeEmail(email) {
  return email.replace(/[^\w@\.\-+]/g, '')
}
function sanitizeSubject(subj) {
  return subj.replace(/[^a-zA-Z\s]/g, '')
}
function sanitizeMessage(msg) {
  return msg.replace(/[<>]/g, '')
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
