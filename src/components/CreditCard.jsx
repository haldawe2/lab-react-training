const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const style = {
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        width: '300px',
        borderRadius: '25px',
        padding: '15px'
    };

    const hiddenNumber = number.split('').map((elem, i) => {
        if (!(i >= number.length - 4) && ((i + 1 ) % 4 === 0)) {
            return elem = '* '
        } else if (!(i >= number.length - 4)) {
            return elem = '*'
        }
        return elem;
    }).concat();

    const expirationMonthCut = (expirationMonth/100).toFixed(2).toString().slice(2, 4);
    const expirationYearCut = expirationYear.toString().slice(2, 4);

    return (
        <div className="Card" style={style}>
            <p>{type}</p>
            <p>{hiddenNumber}</p>
            <div>
                <div>
                  <p>Expires {expirationMonthCut}/{expirationYearCut}</p> 
                  <p>{bank}</p> 
                </div>
                {owner}
            </div>
        </div>
    )
}

export default CreditCard;