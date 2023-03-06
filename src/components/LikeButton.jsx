import { useState } from "react";

const LikeButton = () => {

    const [counter, setCount] = useState(0);
    const [backgroundPicker, setBackgroundPicker] = useState(0);

    const handleBackgroundPicker = () => {
        if (backgroundPicker === 5) {
            setBackgroundPicker(0);
        } else {
            setBackgroundPicker(prev => prev +1);
        }
    }

    const handleSetCount = () => {
        setCount(prev => prev + 1);
        handleBackgroundPicker();
    }

    const backgroundColorArray = ['purple','blue','green','yellow','orange','red'];

    return (
        <div className="likeButton">
             <button onClick={handleSetCount} style={{ backgroundColor: backgroundColorArray[backgroundPicker] }}>{counter} Likes</button>
        </div>
    );
};

export default LikeButton;