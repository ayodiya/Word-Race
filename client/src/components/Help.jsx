import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

const Help = ({ openHelp, handleClose }) => {
  const descriptionElementRef = React.useRef(null)
  React.useEffect(() => {
    if (openHelp) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [openHelp])

  return (
    <Box>
      <Dialog
        open={openHelp}
        onClose={handleClose}
        scroll='paper'
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'backgroundColor.light',
            borderRadius: '10px'
          }
        }}
      >
        <DialogTitle
          sx={{
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'backgroundColor.dark'
          }}
        >
          Help
        </DialogTitle>
        <DialogContent dividers={true}>
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Help
