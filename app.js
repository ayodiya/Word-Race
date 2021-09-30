const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')

const app = express()

// Init Middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:8000'
}))

// Connect Database
connectDB()

// Define Routes
app.use('/api/leaderboard', require('./routes/api/leaderboard'))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server running on port ${port}`))
