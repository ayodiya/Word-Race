const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Init Middleware
app.use(express.json())

// Connect Database
connectDB()

// Define Routes
app.use('/api/leaderboard', require('./routes/api/leaderboard'))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server running on port ${port}`))
