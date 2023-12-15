const History = ({history, onClick, currentMove}) =>{
    return (
        <div className="history-wrapper ">
            <ul className="history">
            {history.map((_,index)=>(
                <li key={index}>
                    <button type="button" className={`btn-move ${currentMove === index?"active":""}`} onClick={()=>onClick(index)}>
                        {index === 0 ? "Start" : `Go to #${index}`}
                    </button>
                </li>
                
            ))}
            </ul>
        </div>
    )
}

export default History