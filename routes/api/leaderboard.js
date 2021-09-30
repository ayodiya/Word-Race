const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Leaderboard = require('../../models/Leaderboard')

// @route    POST api/leaderboard
// @desc     add leaderboard details
// @access   Public

router.post(
  '/',
  check('username', 'Name is required').notEmpty(),
  check('highestScore', 'Highest score is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      username,
      highestScore,
    } = req.body

    try {
      let user = await Leaderboard.findOne({ username })
      

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'Name already exist' }] })
      }

      const leaderboard = await new Leaderboard({
        username,
        highestScore,
      }).save()

      res.status(200).send('Data saved successfully ')
    } catch (err) {
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
    res.status(500).send('Server Error')
  }
})

module.exports = router
