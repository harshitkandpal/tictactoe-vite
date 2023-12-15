import Square from './Square';


const Board = ({square, handleSquare, winningSquare})=>{
    const renderSquare = pos =>{
        const isWinning = winningSquare && winningSquare.includes(pos);
        return(
            <Square value={square[pos]} onClick={() => handleSquare(pos) } isWinning={isWinning} />
        ); 
    }

    return(
        <div className='board'>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>        
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>        
        </div>
    );
}

export default Board;