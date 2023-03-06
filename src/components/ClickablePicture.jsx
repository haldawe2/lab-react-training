import { useState } from "react";
        
const ClickablePicture = ({ img, imgClicked }) => {

    const [image, setImage] = useState(img);

    const handleSetImage = () => {
        if (image === img) {
            setImage(imgClicked);
        } else {
            setImage(img);
        }
    }

    return (
        <div>
             <img src={image} alt={image} onClick={handleSetImage} />
        </div>
    );
};
export default ClickablePicture;