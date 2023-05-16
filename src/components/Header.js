import { LOGO_URL } from "../utils/constant";
const Header = () => {
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

                </ul>
            </nav>

        </div>
    );



};
export default Header;