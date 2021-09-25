import Box from '@mui/material/Box'

const statsItems = [
  {
    text: 'LEVEL',
    number: 0
  },
  {
    text: 'POINTS',
    number: 0
  },
  {
    text: 'MULTIPLIER',
    number: 0
  }
]

const Stats = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-evenly'
      }}
    >
      {statsItems.map(({ text, number }) => (
        <Box key={text} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ color: '#EDB50B', fontWeight: 'bold', fontSize: '25px' }}>
            {text}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { md: 'center' },
              color: 'white',
              fontSize: '20px'
            }}
          >
            {number}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Stats
