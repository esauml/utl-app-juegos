import { Container, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { GameStrategy } from "@/utilities";
import { games } from "@/data";

const GamePage = () => {
    const { id } = useParams();

    const { id: gameId, name, description } = games[id];
    console.log(name, description);

    return (
        <>
            <h1 sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>Game Page</h1>

            <Container maxWidth="xl" sx={{ justifyContent: 'center' }}>

                {/* Two aside sections  with Stack*/}
                <Stack direction="row" spacing={2}>
                    <Paper sx={{ flexGrow: 1, }}>
                        <GameStrategy id={id} />
                    </Paper>

                    <Paper sx={{ p: 2, maxWidth: 500, flexGrow: 1 }}>
                        <h2>Game Info</h2>
                        <p>Game ID: {gameId}</p>
                        <p>Titulo : {name}</p>
                        <p>Descripcion: {description}</p>
                    </Paper>
                </Stack>
            </Container>
        </>
    )
}

export default GamePage;