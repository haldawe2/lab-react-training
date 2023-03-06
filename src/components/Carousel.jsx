import { useState } from "react"

const Carousel = ({ images }) => {

    const [counter, setCounter] = useState(0);

    const handleLeft = () => {
        if (counter === 0) {
            setCounter(images.length - 1)
        } else {
            setCounter(prev => prev - 1)
        }
    }

    const handleRight = () => {
        if (counter === images.length - 1) {
            setCounter(0)
        } else {
            setCounter(prev => prev + 1)
        }
    }

    return (
        <div>
            <img src={images[counter]} alt="" />
            <button onClick={handleLeft}>Left</button>
            <button onClick={handleRight}>Right</button>
        </div>
    )
}

export default Carousel