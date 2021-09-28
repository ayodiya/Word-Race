import Box from '@mui/material/Box'

const Page = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        padding: '0px 0 0 100px',
        backgroundColor: 'backgroundColor.main',
        minHeight: '100vh',
        minWidth: '100wh',
        color: 'white',
        ...props
      }}
    >
      {children}
    </Box>
  )
}

export default Page
