import React from 'react';
import backIcon from '../../style/images/back-icon.png';
import { useParams } from 'react-router-dom';
import './header.css'

function Header() {
    const { fullname } = useParams();
    return (
        <div className="headerStyle">
            <div className="headerWrapper">
                <a href="/" className="headerReturn"> <img src={backIcon} alt="back" /> <span>Go back</span></a>
            </div>
            <div className="name">
                <h1>{fullname}</h1>
            </div>

        </div>
    )
}

export default Header;