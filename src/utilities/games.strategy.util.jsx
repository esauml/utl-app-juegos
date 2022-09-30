import { AdivinaNumero } from "@/games";

// Strategy Pattern (Strategy) For Games
const context = {
    1: <AdivinaNumero />,
    2: <div>Otro Juego</div>
};

const GameStrategy = ({ id }) => {
    return (
        <>
            {context[id]}
        </>
    )
}

export default GameStrategy;
