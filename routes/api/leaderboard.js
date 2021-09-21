const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Leaderboard = require('../../models/Leaderboard')

// @route    POST api/leaderboard
// @desc     add leaderboard details
// @access   Public

router.post(
  '/',
  check('name', 'Name is required').notEmpty(),
  check('numberOfGamesPlayed', 'Number of games played is required').notEmpty(),
  check('averageScore', 'Average score is required').notEmpty(),
  check('highestScore', 'Highest score is required').notEmpty(),
  check('maxLevelReached', 'Max level reached is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      name,
      numberOfGamesPlayed,
      averageScore,
      highestScore,
      maxLevelReached
    } = req.body

    try {
      let user = await Leaderboard.findOne({ name })
      console.log(user)

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'Name already exist' }] })
      }

      const leaderboard = await new Leaderboard({
        name,
        numberOfGamesPlayed,
        averageScore,
        highestScore,
        maxLevelReached
      }).save()

      res.status(200).json(leaderboard)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    get api/leaderboard
// @desc     get all records in  leaderboard
// @access   Public

router.get('/', async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().sort([['highestScore', -1]])
    res.status(200).json(leaderboard)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
