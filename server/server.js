const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config({debug: false})
const cors = require('cors')
const { getData } = require('./api/helpers')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/assets')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))

app.get('/results', async (req, res) => {
    res.send(await getData(req.query.term))

})

app.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
})