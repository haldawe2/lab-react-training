import profiles from '../data/berlin.json';
import { useState } from 'react';

const FaceBook = () => {

    const countriesArray = profiles.map(profile => profile.country);
    const countries = countriesArray.filter((country, i) => {
        return countriesArray.indexOf(country) === i
    });

    const [blueCountry, setBlueCountry] = useState("");

    const handleBlueCountry = (countryButton) => {
        setBlueCountry(countryButton);
    }

    return (
        <div className='facebook'>
            <div className='buttons'>
                <button onClick={() => handleBlueCountry('all')}>All</button>
                {countries.map(country => { return (
                    <button onClick={() => handleBlueCountry(country)}>{country}</button>
                )})}
            </div>
            {profiles.map((profile) => {
                return (
                    <div className={`facebookCard ${blueCountry === profile.country  && 'blueCountry'} ${blueCountry === 'all'  && 'blueCountry'}`}>
                        <img src={profile.img} alt="" />
                        <div>
                            <p><span style={{ fontWeight: "bold" }}>First name:</span> {profile.firstName}</p>
                            <p><span style={{ fontWeight: "bold" }}>Last name:</span> {profile.lastName}</p>
                            <p><span style={{ fontWeight: "bold" }}>Country:</span> {profile.country}</p>
                            <p><span style={{ fontWeight: "bold" }}>Type:</span> {profile.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </div>                         
                )
            })}
        </div>
    )
}

export default FaceBook