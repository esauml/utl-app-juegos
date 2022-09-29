import { Container, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { ImgCard } from '../../components';

const Home = () => {



    // function that creates 10 elements of ImgCard
    const imageCards = () => {
        let cards = [];
        for (let i = 0; i < 15; i++) {
            cards.push(
                <Grid item key={i}>
                    <ImgCard
                        alt="Imagen de prueba"
                        src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        title="Prueba"
                        description="Esta es una prueba"
                    />
                </Grid>
            );
        }
        return cards;
    }


    return (
        <Container maxWidth="lg">
            <h1>Home</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {imageCards()}
            </Grid>
            <Stack direction="row" spacing={2}>

            </Stack>
        </Container >
    );
}

export default Home;