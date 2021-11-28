/*
 * Copyright supadev.com  (c) 2021.
 */

import './style/header.css';

function Header()
{
    const data = {
        title: "Moon Swap",
        version: "0.2.0",
        loginTitle: "Log In Using MetaMask",
        logoutTitle: "Disconnect MetaMask from",
        loggedIn: false
    };

    return (
        <div className='App-header'>
            Header Container
            <h3>{data.title} TEST<sub>{data.version}</sub></h3>
        </div>
    );
}

export default Header;