const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase').then((x) => {
    console.log(`Connected to MongoDB at ${mongoose.connection.host}`)
}).catch((err) => {
    console.error(err, err.reason)
})

const conApi = require('../backend/route/routes')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use('/api', conApi)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// find 404
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
        
    })  
})
