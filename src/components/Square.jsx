
const Square = ({value, onClick, isWinning}) =>{
  return (
    <button type="button" className={`square ${value === 'X'?"text-green":"text-orange"} ${isWinning?"winning":""}`} onClick={onClick}>
        {value}
    </button>
  )
}
export default Square
