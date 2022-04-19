require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const connectDB = require('./db/connect')

const cardRouter = require('./routes/cards')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.use('/api/v1/', cardRouter)

const port = process.env.PORT || 3001

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is connected to database and listening on port ${3001}...`))
    } catch (error) {
        console.error(error)
    }
}

start()