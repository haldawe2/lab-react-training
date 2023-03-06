const BoxColor = ({r, g, b}) => {

    let style = {
        backgroundColor: `rgb(${r},${g},${b})`
    };

    return (
        <div style={style}>rgb({r},{g},{b})</div>
    )
}

export default BoxColor