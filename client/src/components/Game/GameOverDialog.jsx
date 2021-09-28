import * as React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import DialogComponent from '../DialogComponent'

export default function GameOverDialog ({
  open,
  close,
  score,
  handleTryAgain
}) {
  const [username, setUsername] = React.useState('')
  const onChange = e => {
    setUsername(e.target.value)
  }

  return (
    <DialogComponent
      title='Game Over'
      open={open}
      close={close}
      content={`Your score is ${score}`}
      actionButtons={
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <TextField
                sx={{
                  '& .MuiOutlinedInput-input': {
                    background: 'white'
                  }
                }}
                type='text'
                id='text'
                value={username}
                placeholder='your username'
                onChange={onChange}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box sx={{ paddingTop: '20px' }}>
                <Button
                  variant='contained'
                  onClick={handleTryAgain}
                  sx={{
                    backgroundColor: 'buttonDanger.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'buttonDanger.main'
                    }
                  }}
                >
                  Play Again
                </Button>
              </Box>
              <Box sx={{ paddingTop: '20px' }}>
                <Button
                  variant='contained'
                  onClick={close}
                  sx={{
                    backgroundColor: 'buttonSuccess.main',
                    '&:hover': {
                      backgroundColor: 'buttonSuccess.main'
                    }
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      }
    />
  )
}
