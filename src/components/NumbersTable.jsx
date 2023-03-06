const NumbersTable = ({ limit }) => {
    
    let matrix = Array(Math.floor(limit/5) + 1);
    let counter = 1;
    let remainder = limit;

    for (let i = 0; i < matrix.length; i++) {
        if (remainder / 5 > 1) {
            matrix[i] = Array(5)    
        } else {
            matrix[i] = Array(remainder);
        }
        remainder-= 5
        for(let j = 0; j < 5; j++) {
            matrix[i][j] = counter;
            console.log(matrix[i][j])
            counter++;
            if (counter > limit) {
                break
            }
        }
    }
    
    return (
        <table className="numbersTable">
            {matrix.map(elem => {return (
                <tr>{elem.map(number => {return(
                    <td>{number}</td>
                )})}</tr>
            )})}
        </table>
    )
}

export default NumbersTable