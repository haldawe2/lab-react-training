import { useState } from "react"

const SignupPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nationality, setNationality] = useState("en");

    let salute = ""
    switch (nationality) {
        case "en":
            salute = "Hi"
            break
        case "de":
            salute = "Hallo"
            break
        default:
            salute = "Bonjour"
    }

    const handleSetNationality = (e) => {
        setNationality(e.target.value)
    }

    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSetPassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="signup">
            <div>
                <label>Email</label>
                <input type="text" name="email" placeholder="john@doe.com" onChange={handleSetEmail}/>    
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" placeholder="******" onChange={handleSetPassword}/>
            </div>
            <div>
                <label>Nationality</label>
                <select name="nationality" onChange={handleSetNationality}>
                    <option value="en">English</option>
                    <option value="de">Deustch</option>
                    <option value="fr">French</option>
                </select>
            </div>       
            <p>{salute},</p>
            <p>Your email is {email}</p>
        </div>
    )
}

export default SignupPage