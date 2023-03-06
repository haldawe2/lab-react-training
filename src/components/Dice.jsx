import { useState, useEffect, useReducer } from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"



const Dice = () => {

    const [image, setImage] = useState(diceEmpty);
    const [clicked, toggle] = useReducer(prev => !prev ,false)

    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]

    const randomDice = () => {
        return diceArray[Math.floor(Math.random() * 6)]
    }

    useEffect(() => {
        setImage(randomDice());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleRoll = () => {
        if (!clicked) {
            toggle();
            setImage(diceEmpty);
            setTimeout(()=> {
                setImage(randomDice());
                toggle();
            }, 1000);
        }
    }

    return (
        <div onClick={handleRoll}>
            <img src={image} alt={image} style={{ width: 100 }}/>
        </div>
    )
}

export default Dice