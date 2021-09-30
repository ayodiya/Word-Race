const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LeaderboardSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  
  highestScore: {
    type: Number,
    required: true
  },
})

module.exports = mongoose.model('leaderboard', LeaderboardSchema)
