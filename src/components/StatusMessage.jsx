
const StatusMessage = ({gamingBoard, winner}) => {

    const {square, isNextX} = gamingBoard
    const noEmptySquare = square.every((squareValue) => squareValue != null);
    const nextPlayer = isNextX ? "X" : "0";

    const renderMessage = () => {
        if(winner){
            return (`Winner is ${winner}`);
        }
        if(noEmptySquare){
            return ("Draw");
        }
        return(`Next player is ${nextPlayer}`);
    };

    return (
        <div>
            {renderMessage()}
        </div>
    )
}

export default StatusMessage