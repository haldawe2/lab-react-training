const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="card">
            <img src={picture} alt={firstName} />
            <p><span>First Name:</span> {firstName}</p>
            <p><span>Last Name:</span> {lastName}</p>
            <p><span>Gender:</span> {gender}</p>
            <p><span>Heigh:</span> {height}m</p>
            <p><span>Birth:</span> {birth}</p>
        </div>
    )
}

export default IdCard