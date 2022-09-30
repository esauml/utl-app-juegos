import { ImgCard } from '@/components';
import { Grid } from '@mui/material';
import React from 'react';


const GameCards = ({ }) => {
    let cards = [];
    for (let i = 0; i < 8; i++) {
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
};

export default GameCards;