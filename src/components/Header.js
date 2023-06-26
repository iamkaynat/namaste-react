import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="Logo" />


            <nav className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Search</li>
                    <li>Profile</li>
                    <li>Cart</li>
                    <button className="login"
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Log Out") : setBtnName("Login");

                        }

                        }>
                        {btnName}</button>

                </ul>
            </nav>

        </div>
    );



};
export default Header;