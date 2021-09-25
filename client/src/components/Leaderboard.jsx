import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const TableHeaderStyle = {
  width: 10,
  color: 'white',
  fontWeight: 'bold'
}

const TableCellStyle = {
  width: 10,
  color: 'white',
  fontWeight: 'bold',
  border: 0
}
function createData (no, name, hs, level, gp) {
  return { no, name, hs, level, gp }
}

const rows = [
  createData(1, 'bola', 340, 2, 20),
  createData(1, 'bola', 340, 2, 20),
  createData(1, 'bola', 340, 2, 20),
  createData(1, 'bola', 340, 2, 20),
  createData(1, 'bola', 340, 2, 20),
  createData(1, 'bola', 340, 2, 20),
  createData(1, 'bola', 340, 2, 20),
  createData(1, 'bola', 340, 2, 20),
  createData(1, 'bola', 340, 2, 20),
  createData(10, 'bola', 340, 2, 20)
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
      <Dialog
        open={openLeaderboard}
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
          Leaderboard(Top Ten)
        </DialogTitle>
        <DialogContent dividers={true}>
          <TableContainer>
            <Table sx={{ minWidth: 250 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={TableHeaderStyle}>No</TableCell>
                  <TableCell align='right' sx={TableHeaderStyle}>
                    Name
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      width: 10,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    HS
                  </TableCell>
                  <TableCell align='right' sx={TableHeaderStyle}>
                    Level
                  </TableCell>
                  <TableCell align='right' sx={TableHeaderStyle}>
                    GP
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
                    <TableCell align='right' sx={TableCellStyle}>
                      {row.level}
                    </TableCell>
                    <TableCell align='right' sx={TableCellStyle}>
                      {row.gp}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

export default Leaderboard
