const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LeaderboardSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    trim: true
  },
  numberOfGamesPlayed: {
    type: Number,
    required: true
  },
  averageScore: {
    type: Number,
    required: true
  },
  highestScore: {
    type: Number,
    required: true
  },
  maxLevelReached: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('leaderboard', LeaderboardSchema)
