const express = require('express')
const app = express()
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const dotEnv = require('dotenv')
const cors = require('cors')


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
dotEnv.config()
app.use(body_parser.json())

app.use('/api', require('./routes/routes'))

const db = async () => {
    try {
        await mongoose.connect(process.env.db_url)
        console.log('db connect')
    } catch (error) {

    }
}
db()
const port = process.env.Port

app.get('/', (req, res) => res.send('Hello Express is One'))
app.listen(port, () => {

    console.log("connected to server..." + port);
});