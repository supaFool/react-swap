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
        <div className={'header'}>
            Header Container
            <h2>{data.title} TEST<sub>{data.version}</sub></h2>
        </div>
    );
}

export default Header;