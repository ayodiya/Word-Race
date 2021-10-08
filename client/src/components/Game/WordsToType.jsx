import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import randomWords from 'random-words'
import useSound from 'use-sound'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

import GameOverDialog from './GameOverDialog'
import successTypeSound from '../../asset/success-sound-effect.mp3'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'row',
  margin: '2px',
  backgroundColor: '#EFB512'
}))

const words = randomWords(20)

const initialScore = 0
const seconds = 10
let scoreMultiplier = 0
let index = 0
let stringIndex = 0

const WordsToType = () => {
  const [score, setScore] = useState(initialScore)
  const [timeLeft, setTimeLeft] = useState(seconds)
  const [strIndex, setStrIndex] = useState(stringIndex)
  const [wordIndex, setWordIndex] = useState(index)
  const [word, setWord] = useState(words[index])
  const [multiplier, setMultiplier] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [correctIndexInput, setCorrectIndexInput] = useState([])

  const [play] = useSound(successTypeSound)

  const letters = word.split('')

  const statsItems = [
    {
      heading: 'POINTS',
      itemToDisplay: score
    },
    {
      heading: 'MULTIPLIER',
      itemToDisplay: multiplier
    },
    {
      heading: 'Time',
      itemToDisplay: timeLeft
    }
  ]

  const onChange = e => {
    const insertedText = e.target.value

    const wordLength = insertedText.length

    setStrIndex(++stringIndex)

    document.addEventListener('keyup', (event) => {
      const name = event.key

      if (letters[wordLength - 1] === name) {
        return correctIndexInput.push(wordLength - 1)
      }
    }, false)

    if (word[strIndex] !== insertedText[strIndex]) {
      setMultiplier(multiplier - multiplier, (scoreMultiplier = 0))
    }

    if (insertedText === word) {
      play()
      setWordIndex(++index)
      setWord(words[index])
      setCorrectIndexInput([])
      setMultiplier(++scoreMultiplier)
      setStrIndex(stringIndex = 0)
      updateScore()
      setTimeLeft(timeLeft + 2)
      // clear
      e.target.value = ''
    }
  }

  const closeGameOverDialog = () => setGameOver(false)

  const refreshPage = () => {
    window.location.reload(false)
  }

  const updateScore = () => {
    setScore(prevscore =>
      prevscore === 0 || multiplier === 0
        ? prevscore + 1
        : (score + 1) * multiplier
    )
  }

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft || wordIndex === words.length) return setGameOver(true)

    // save intervalId to clear the interval when the
    // component re-renders

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft, wordIndex])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-evenly'
        }}
      >
        {statsItems.map(({ heading, itemToDisplay }) => (
          <Box
            key={heading}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingBottom: '50px'
            }}
          >
            <Box
              sx={{ color: '#EDB50B', fontWeight: 'bold', fontSize: '25px' }}
            >
              {heading}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { md: 'center' },
                color: 'white',
                fontSize: { xs: '20px' }
              }}
            >
              {itemToDisplay}
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          padding: { xs: '40px 40px 0 40px' }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {letters.map((letter, index) =>
                <Item
                  sx={{
                    fontSize: { md: '30px' },
                    color: {
                      xs: correctIndexInput.includes(index) ? 'green' : 'white'
                    }

                  }}
                  key={index}
                >
                  {letter}
                </Item>
              )}

            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '30px'
              }}
            >
              <TextField
                sx={{
                  '& .MuiOutlinedInput-input': {
                    background: 'white'
                  }
                }}
                type='text'
                id='text'
                placeholder='type the words here'
                onChange={onChange}
              />
            </Box>
            <Box
              sx={
                (timeLeft === 0 ? { display: 'flex' } : { display: 'none' },
                { flexDirection: 'column' })
              }
            />
          </Box>
        </Box>
        <GameOverDialog
          open={gameOver}
          close={closeGameOverDialog}
          score={score}
          handleTryAgain={refreshPage}
        />
      </Box>
    </>
  )
}

export default WordsToType
