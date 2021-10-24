const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9090
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

app.get('/', (req, res) => {
    res.json({'message': 'Application is up!'})
})

app.get('/randomName', (req, res) => {
    res.json(uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }))
})

require("../src/routes")(app);

app.listen(port, () => {
    console.log(`Anonymous forum application backend running at http://localhost:${port}`)
})