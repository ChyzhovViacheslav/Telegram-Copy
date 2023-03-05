const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '.env')})
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.PORT || 2000

const userRouter = require('./routes/usersRouter')

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/user', userRouter)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()