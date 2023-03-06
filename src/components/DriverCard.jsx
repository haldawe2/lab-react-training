import Rating from "./Rating"

const DriverCard = ({ name, rating, img, car}) => {



    return (
        <div className="driverCard">
            <img src={img} alt={name} />
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard