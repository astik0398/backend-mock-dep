const express = require('express')
const { connection } = require('./db')
const app = express()
require('dotenv').config()
const cors = require('cors')

app.use(cors())

app.use(express.json())
const {userRouter} = require('./routes/user.route')

app.use('/user', userRouter)

app.listen(process.env.port, async()=> {
    try {
        await connection
        console.log('connected to db');
        console.log(`connected to port ${process.env.port}`);
    } catch (error) {
        console.log(error);
    }
})