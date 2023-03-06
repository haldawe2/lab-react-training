const SingleColorPicker = ({ color, value, setValue }) => {

    const handleSetValue = (e) => {
        setValue(e.target.value);
    }

    let style = ""
    switch(color) {
        case "r":
            style = `rgb(${value}, 0, 0)`;
            break;
        case "b":
            style = `rgb(0, ${value}, 0)`;
            break;
        default:
            style = `rgb(0, 0, ${value})`;
    }


    return (
        <div className="colorPick">
            <div className="square" style={{ backgroundColor: style}}></div>
            <label>{color.toUpperCase()}:</label>
            <input type="number" name={color} min="0" max="255" onChange={handleSetValue} value={value} />
        </div>
    )
}

export default SingleColorPicker