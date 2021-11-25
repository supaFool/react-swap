import {useState} from "react";
import {useMoralis, useMoralisWeb3Api} from "react-moralis";

import './style/profilebox.css'

export default function ProfileBox() {

    const {authenticate, isAuthenticated, user, logout} = useMoralis();
    const bal = useMoralisWeb3Api();

    const [text, setText] = useState("Connect Wallet");
    const [test_text, setTestText] = useState("No Tests Running");

    function connect() {
        // User is Logged in
        if (!isAuthenticated) {
            authenticate().then(() => {
                setText("Logout");
            }).then(async () => {
                let options = {chain: 'bsc'};
                setTestText((await bal.account.getNativeBalance(options)).balance /
                    10 ** 18);
            });
        }
        //User is logged out
        else {
            logout().then(() => {
                setText("Connect Wallet");
            });

        }
    }

    // Logged in
    if (isAuthenticated) {
        //TODO: When I add test_text.toFixed(6) to set 6 spot decimals.
        // It gets error on login. ref to className='bnb-balance-amount'>{test_text.toFixed(6)}</div></p>

        return (

            <div className='profile-container'>
                <p>Welcome, <b>{user.getUsername()}</b></p>

                <div>
                    <button onClick={connect}>Logout</button>
                    <button>Menu</button>
                </div>
                <hr/>
                <div className='bnb-balance-container'>
                    <p className='bnb-balance-label'>BnB Balance: <div
                        className='bnb-balance-amount'>{test_text}</div></p>
                </div>
                <hr/>
            </div>
        );

        // Logged out
    } else {
        return (
            <div className='profile-container'>
                <span><h4>Please connect wallet for best experience</h4> <button
                    onClick={connect}>{text}</button></span>
            </div>
        );
    }
}

