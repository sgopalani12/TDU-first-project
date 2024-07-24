import React from "react"
import "../styles/Header.css"
import backGroundImage from '../assets/backgroundpic.jpg'


const Header = () => {

    return (
        <div className="header">
            <div>Welcome to The Denim University experience!</div>
            <h1>Get your shipment ready today!</h1>
            <img src={backGroundImage} />
        </div>
    )
}
export default Header
