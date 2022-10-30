import "./home.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import beesLogo from '../../style/images/bees-logo.png'


const Home = () => {
    const [fullname, setFullname] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [hasNameError, setHasNameError] = useState(true);
    let navigate = useNavigate();

    const handleChange = event => {
        setIsChecked(current => !current);
    }

    const clearData = () => {
        setFullname('');
        setIsChecked(false);
        navigate(`/card/${fullname}`);
    }

    const checkFullName = (evt) => {
        const checkedFullName = !!evt.match(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/);

        if (checkedFullName) {
            setHasNameError(false);
            setFullname(evt);
            return;
        }

        setHasNameError(true);
    }

    return (

        <main>
            <div className="main-container">
                <div className="initial-form">
                    <label htmlFor="">Please, enter your full name below</label>
                    <label htmlFor="">Only alphabetical characters are accepted</label>
                    <input className="full-name" placeholder="Full Name" type="text" onChange={(e) => checkFullName(e.target.value)} />
                </div>
                <div className="next-form">
                    <input type="checkbox" value={isChecked} onChange={handleChange} className="age-check" />
                    <label htmlFor="olderThan">Are you older than 18 years old?</label>
                </div>
                <button className="main-button" disabled={hasNameError || !isChecked} onClick={() => clearData()}>
                    Enter
                </button>
            </div>
            <img className="bees-img" src={beesLogo} alt="bees-logo" />
        </main>
    )
}

export default Home

