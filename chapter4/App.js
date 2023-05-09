import React from 'react';
import ReactDOM from 'react-dom';

/*Header
    -Logo
    -nav items on right
Body
    -Search bar
    -Restraunt Cards
        -Restraunt container
Footer
    -copyright
    -Address
    -contact
 */
const Header = () => {
    <React.Fragment>
        <nav>
            <img src="" />
            <ul>
                <li>Home</li><li>About</li><li>Cart</li>
            </ul>
        </nav>
    </React.Fragment>
}

const AppLayout = () => {
    <Header />

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);