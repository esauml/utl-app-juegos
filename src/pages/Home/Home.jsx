import { Container, Grid } from '@mui/material';
import { GameCards } from './components/';

const Home = ({ }) => {

    return (
        <Container maxWidth="lg">
            <h1>Home</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <GameCards />
            </Grid>
        </Container >
    );
}

export default Home;