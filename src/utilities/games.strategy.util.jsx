import { getGameById } from "../data/games";

const GameStrategy = ({ id }) => {
    const { component } = getGameById(id);
    return (
        <>
            {component}
        </>
    )
}

export default GameStrategy;
