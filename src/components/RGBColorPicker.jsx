import { useState } from "react"
import SingleColorPicker from "./SingleColorPicker";

const RGBColorPicker = () => {

    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const style = {
        backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`
    }

    return (
        <div>
            <SingleColorPicker color="r" value={rValue} setValue={setRValue} />
            <SingleColorPicker color="g" value={gValue} setValue={setGValue} />
            <SingleColorPicker color="b" value={bValue} setValue={setBValue} />
            <div className="colorPick">
                <div className="square" style={style}></div>
                <p>{`rgb(${rValue}, ${gValue}, ${bValue})`}</p>
            </div>
            
        </div>
    )
}

export default RGBColorPicker