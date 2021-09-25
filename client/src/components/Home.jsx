import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useHistory } from 'react-router-dom'

import Help from './Help'
import Page from './Page'

const Home = () => {
  const [openHelp, setOpenHelp] = React.useState(true)
  const { push } = useHistory()

  const handleCloseHelp = () => {
    setOpenHelp(false)
  }

  return (
    <Page display='flex' justifyContent='center'>
      <Box
        sx={{
          paddingTop: '150px',
          width: { xs: '80%', md: '50%' },
          textAlign: 'center'
        }}
      >
        <Typography sx={{ fontWeight: 'bold', color: '#F5C10A' }}>
          Word Race is a game designed to improve QWERTY typing rate and
          efficiency. Words appear one by one at a rate that does up as time
          progresses.
        </Typography>
        <Box sx={{ paddingTop: '30px' }}>
          <Button
            onClick={() => push('/game')}
            variant='contained'
            color='success'
          >
            Play Game
          </Button>
        </Box>
      </Box>
      <Help openHelp={openHelp} handleClose={handleCloseHelp} />
    </Page>
  )
}

export default Home
