import './style/header.css';


function Header() {
    const data = {
        title: "Moon Swap",
        version: "0.2.0",
        loginTitle: "Log In Using MetaMask",
        logoutTitle: "Disconnect MetaMask from",
        loggedIn: false
    };

    return (
        <div className={'header'}>
            <h2>{data.title} TEST<sub>{data.version}</sub></h2>
        </div>
    );
}

export default Header;