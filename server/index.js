const path = require('path')
const http = require('http')
require('dotenv').config({path: path.resolve(__dirname, '.env')})
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 2000

const userRouter = require('./routes/usersRouter')
const messageRouter = require('./routes/messageRouter')
const initSocket = require('./socket')

app.use(cors({credentials: true, origin: process.env.FRONT_URL}))
app.use(cookieParser())
app.use(express.json())
app.use('/user', userRouter)
app.use('/room', messageRouter)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        initSocket(io)

        server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()