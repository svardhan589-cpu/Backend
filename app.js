const express = require('express')

const app = express()

// GET /
app.get('/', (request, response) => {
  response.send('Welcome to Node.js and Express Server')
})

// GET /about
app.get('/about', (request, response) => {
  response.json({
    name: 'Sri Vardhan',
    section: 'Your Section',
  })
})

// GET /time
app.get('/time', (request, response) => {
  const currentDateTime = new Date()

  response.json({
    dateAndTime: currentDateTime,
  })
})

// 404 route
app.use((request, response) => {
  response.status(404).send('404 - Page Not Found')
})

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})