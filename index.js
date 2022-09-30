const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const sessionStorage = require('sessionstorage-for-nodejs');


app.use(express.static('www'));

app.get('/health', (req, res) => {
    res.send('ok')
  })


app.get('/mot', (req, res) => {
    const d = new Date();
    let day = d.getDay();
    let word = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"][day]
    res.send(word)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })