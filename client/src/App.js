import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Game from './components/Game'
import Navbar from './components/Navbar'
import { theme } from './utils/theme'

function App () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
