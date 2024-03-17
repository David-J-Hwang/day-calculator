const colors = require('colors')

const express = require('express')
const path = require('path')
const app = express()
const PORT = 5500

app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/days', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'days.html'))
})

app.get('/weeks', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'weeks.html'))
})

app.get('/months', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'months.html'))
})

app.get('/years', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'years.html'))
})

app.get('/d-day', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'dday.html'))
})

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}...`.bgCyan)
})