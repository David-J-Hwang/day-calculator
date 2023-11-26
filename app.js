const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/days', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'days.html'))
})

app.get('/weeks', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'weeks.html'))
})

app.get('/months', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'months.html'))
})

app.get('/years', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'years.html'))
})

app.get('/d-day', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dday.html'))
})


app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`)
})