import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilledSharp'
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp'
import InfoSharpIcon from '@mui/icons-material/InfoSharp'
import { styled, useTheme } from '@mui/material/styles'
import { useHistory } from 'react-router-dom'

import Help from './Help'
import Leaderboard from './Leaderboard'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

const Navbar = () => {
  const theme = useTheme()
  const { push } = useHistory()
  const [openHelp, setOpenHelp] = React.useState(false)
  const [openLeaderboard, setOpenLeaderboard] = React.useState(false)

  const handleOpenHelp = () => {
    setOpenHelp(true)
  }

  const handleCloseHelp = () => {
    setOpenHelp(false)
  }

  const handleOpenLeaderboard = () => {
    setOpenLeaderboard(true)
  }

  const handleCloseLeaderboard = () => {
    setOpenLeaderboard(false)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position='fixed'
          sx={{
            backgroundColor: 'backgroundColor.dark',
            zIndex: theme.zIndex.drawer + 1
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Toolbar>
              <Box sx={{ fontSize: '30px', fontWeight: 'bold' }}>WORD RACE</Box>
            </Toolbar>
          </Box>
        </AppBar>
        <Drawer
          variant='permanent'
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: 'backgroundColor.light'
            },
            width: 400,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            '& .MuiDrawer-paper': {
              overflowX: 'hidden',
              width: `calc(${theme.spacing(7)} + 1px)`,
              [theme.breakpoints.up('sm')]: {
                width: `calc(${theme.spacing(9)} + 1px)`
              }
            }
          }}
        >
          <DrawerHeader />
          <List>
            <ListItem button onClick={() => push('/')}>
              <ListItemIcon>
                <PlayCircleFilledSharpIcon
                  sx={{ fontSize: '35px', color: '#FE5005' }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={handleOpenLeaderboard}>
              <ListItemIcon>
                <GroupsSharpIcon sx={{ fontSize: '30px', color: '#26BD98' }} />
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={handleOpenHelp}>
              <ListItemIcon>
                <InfoSharpIcon sx={{ fontSize: '30px', color: '#26BD98' }} />
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
        <DrawerHeader />
        <Help openHelp={openHelp} handleClose={handleCloseHelp} />
        <Leaderboard
          openLeaderboard={openLeaderboard}
          handleClose={handleCloseLeaderboard}
        />
      </Box>
    </>
  )
}

export default Navbar
