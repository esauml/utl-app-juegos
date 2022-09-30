import { Container, Grid } from "@mui/material";
import { ImgCarousel } from "./components/ImgCarousel";
import { GameCards } from "./components/GameCards";

const TopGames = () => {

    return (
        <>
            <ImgCarousel />

            <Container maxWidth="lg">
                <h1>LO MÁS NUEVO</h1>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <GameCards />
                </Grid>
            </Container >
        </>
    )
}

export default TopGames;