import { StyledEngineProvider } from '@mui/material/styles';
import {
	BrowserRouter as Router, Route, Routes as Switch
} from 'react-router-dom';
import { Footer, Navbar } from './components';
import { GamePage, Home, TopGames } from './pages';
import React from 'react';

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
					<Route path='/game/:id' element={<GamePage />} />
				</Switch>

				<Footer />

			</Router>
		</StyledEngineProvider>
	);
}

export default App;
