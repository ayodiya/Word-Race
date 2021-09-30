
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'
import { useState, useRef, useEffect } from 'react'

import DialogComponent from './DialogComponent'

const TableHeaderStyle = {
  color: 'white',
  fontWeight: 'bold'
}

const TableCellStyle = {
  color: 'white',
  fontWeight: 'bold',
  border: 0
}

const Leaderboard = ({ openLeaderboard, handleClose }) => {
  const descriptionElementRef = useRef(null)
  const [leaderboard, setLeaderboard] = useState(Array)



  const getLeaderboard = async() => {
    const res = await axios.get('/api/leaderboard')
    setLeaderboard(res.data)
  }

  // getLeaderboard()

  useEffect(() => {
    if (openLeaderboard) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
    getLeaderboard()

  }, [openLeaderboard])




  return (
    <Box>
      <DialogComponent
        open={openLeaderboard}
        close={handleClose}
        title='Leaderboard(Top Ten)'
        content={
          <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
            <Table sx={{ width: 150 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='right' sx={TableHeaderStyle}>
                    Name
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    HS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
             { leaderboard.map(({_id, username, highestScore}) => (
                  <TableRow
                    key={_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='right' sx={TableCellStyle}>
                      {username}
                    </TableCell>
                    <TableCell align='right' sx={TableCellStyle}>
                      {highestScore}
                    </TableCell>
                  </TableRow>
              ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
      />
    </Box>
  )
}

export default Leaderboard
