import React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

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
function createData (no, name, hs) {
  return { no, name, hs }
}

const rows = [
  createData(1, 'bola', 340),
  createData(1, 'bola', 340),
  createData(1, 'bola', 340),
  createData(1, 'bola', 340),
  createData(1, 'bola', 340),
  createData(1, 'bola', 340),
  createData(1, 'bola', 340),
  createData(1, 'bola', 340),
  createData(1, 'bola', 340),
  createData(10, 'bola', 340)
]

const Leaderboard = ({ openLeaderboard, handleClose }) => {
  const descriptionElementRef = React.useRef(null)

  React.useEffect(() => {
    if (openLeaderboard) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
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
                  <TableCell sx={TableHeaderStyle}>No</TableCell>
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
                {rows.map(row => (
                  <TableRow
                    key={row.no}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={TableCellStyle}>{row.no}</TableCell>
                    <TableCell align='right' sx={TableCellStyle}>
                      {row.name}
                    </TableCell>
                    <TableCell align='right' sx={TableCellStyle}>
                      {row.hs}
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
