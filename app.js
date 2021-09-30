const express = require('express')
const cors = require('cors')
const path = require('path')

const connectDB = require('./config/db')

const app = express()

// Init Middleware
app.use(express.json())
app.use(cors())

// Connect Database
connectDB()

// Define Routes
app.use('/api/leaderboard', require('./routes/api/leaderboard'))

const port = process.env.PORT || 8000



if(process.env.NODE_ENV === 'production'){
        app.use(express.static(path.resolve(__dirname,'client/build')));
        
        app.get('*', (req,res) => (
            res.sendFile(path.resolve(__dirname, 'client/build', 'index.html' ))
        ))
}

app.listen(port, () => console.log(`Server running on port ${port}`))
