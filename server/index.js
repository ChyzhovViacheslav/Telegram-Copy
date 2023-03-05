const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 2000

const userRouter = require('./routes/usersRouter')

app.use(express.json())
app.use('/user', userRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://PomPushka:zx12zx12@cloza.6sbglbk.mongodb.net/telegram_copy?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()