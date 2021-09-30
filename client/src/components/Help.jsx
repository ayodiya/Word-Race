import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import DialogContentText from '@mui/material/DialogContentText'
import Typography from '@mui/material/Typography'
import {useRef, useEffect} from 'react'

import DialogComponent from './DialogComponent'

const Help = ({ openHelp, handleClose }) => {
  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (openHelp) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [openHelp])

  return (
    <Box>
      <DialogComponent
        title='Help'
        open={openHelp}
        close={handleClose}
        actionButtons={
          <Button
            onClick={handleClose}
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            Close
          </Button>
        }
        content={
          <DialogContentText
            component='div'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography component='div' sx={{ color: 'white' }} gutterBottom>
              Word Race is a game designed to improve QWERTY typing rate and
              efficiency. Words appear one by one at a rate that does up as time
              progresses.
            </Typography>
            <Typography component='div' sx={{ color: 'white' }}>
              The score is calculated based on how fast the player is able to
              clear that word, and a multiplier. The multiplier increases with
              every word the player types correctly and resets on any mistype
            </Typography>
          </DialogContentText>
        }
      />
    </Box>
  )
}

export default Help
