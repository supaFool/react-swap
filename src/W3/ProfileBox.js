/*
 * Copyright supadev.com  (c) 2021.
 */

import {useState} from "react";
import TransactionLog from "./TransactionLog";
import {useMoralis, useMoralisWeb3Api, useNativeTransactions} from "react-moralis";

import '../style/profilebox.css'

export default function ProfileBox() {

    const {authenticate, isAuthenticated, user, logout} = useMoralis();
    const web3api = useMoralisWeb3Api();
    let options = {chain: "bsc"};
    const nativeTransactions = useNativeTransactions(options);

    const [text, setText] = useState("Connect Wallet");
    const [test_text, setTestText] = useState(0);
    const [isAuthed, setIsAuthed] = useState(isAuthenticated);

    const [natTrx, loadTrx] = useState([]);

    function connect()
    {
        // Login
        if (!isAuthed) {
            //Authenticate user
            authenticate().then(() => {
                //After that, set button to logout
                setText("Logout");
            }).then(async () => {
                //after that, wait on the response from balances
                await setTestText((await web3api.account.getNativeBalance(options)).balance /
                    10 ** 18);
            }).then(async () => {
                //then load trx
                await loadTrx(nativeTransactions);
                console.log(JSON.stringify(natTrx));
            }).then(() => {
                //After all that is done, switch to isAuthed = true
                setIsAuthed(true);
            });

        }
        //Logout
        else {
            setIsAuthed(false)
            logout().then(() => {
                setText("Connect Wallet");
                setIsAuthed(false);
            })
        }
    }

    // Logged in
    if (isAuthed) {
        //TODO: In order to get trx {account} to show up, you have to restart server. idk...

        return (

            <div className='profile-container'>

                <p>Welcome, <b>{user.getUsername()}</b></p>

                <TransactionLog user={natTrx}/>

                <div>
                    <button onClick={connect}>Logout</button>
                    <button>Menu</button>
                </div>
                <hr/>
                <div className='bnb-balance-container'>
                    <p className='bnb-balance-label'>BnB Balance:
                        className='bnb-balance-amount'>{test_text.toFixed(6)}</p>
                </div>
                <hr/>
            </div>
        );

        // Logged out
    }
    else {
        return (
            <div className='profile-container'>
                <span><h4>Please connect wallet for best experience</h4>
                    <button onClick={connect}>{text}</button></span>
            </div>
        );
    }
}

