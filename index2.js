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
    return (
        <>
            <img src="" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </>
    );

}

const AppLayout = () => {
    return (
        <>
            <Header />
        </>

    );

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);