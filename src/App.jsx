import { Footer, Navbar } from './components';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router, Route, Routes as Switch
} from "react-router-dom";
import { Home, TopGames } from './pages';

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Navbar />

        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/top-games' element={<TopGames />} />
        </Switch>

        <Footer />

      </Router>
    </StyledEngineProvider>
  )
}

export default App
