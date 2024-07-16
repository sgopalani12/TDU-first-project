import React from "react"
import image from "../assets/backgroundpic.jpg" 
import "../styles/Header.css"


const Header = () => {

    return (
        <div>
            <div>Welcome to The Denim University experience!</div>
            <h1>Get your shipment ready today!

            </h1>
            <img src={image}></img>
        </div>
    )
}
export default Header
