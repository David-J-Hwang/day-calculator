const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/days', (req, res) => {
    res.send('Days calculation page');
});

app.get('/weeks', (req, res) => {
    res.send('Weeks calculation page');
});

app.get('/months', (req, res) => {
    res.send('Months calculation page');
});

app.get('/years', (req, res) => {
    res.send('Years calculation page');
});

app.get('/d-day', (req, res) => {
    res.send('D-day calculation page');
});


app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`)
})