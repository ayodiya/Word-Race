import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',

  backgroundColor: '#EFB512'
}))

const randomWords = [
  'banish',
  'velvet',
  'friend',
  'consciousness',
  'stage',
  'variant',
  'mindmind',
  'veteran',
  'conductor',
  'equinox',
  'eliminate',
  'spine',
  'offender',
  'ideal',
  'paradox',
  'pollution',
  'opposition',
  'bear',
  'power',
  'reptile',
  'metal',
  'absence',
  'unrest',
  'distort'
]

const WordsToType = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: { xs: '40px 40px 0 40px' }
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {randomWords.map(index => (
            <Grid item xs={3} md={4}>
              <Item sx={{ fontSize: { md: '20px' } }}>{index}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default WordsToType
