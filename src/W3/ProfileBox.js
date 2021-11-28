/*
 * Copyright supadev.com  (c) 2021.
 */
import {useState} from "react";
import {useMoralis, useMoralisWeb3Api, useNativeTransactions} from "react-moralis";
import '../style/profilebox.css'

export default function ProfileBox() {

    const {authenticate, isAuthenticated, user, logout} = useMoralis();
    const web3api = useMoralisWeb3Api();
    let options = {chain: "bsc"};
    const nativeTransactions = useNativeTransactions(options);

    const [text, setText] = useState("Connect Wallet");
    const [test_text, setTestText] = useState(0);
    //TODO: This is still wonky, Sometime you have to refresh to get button to show, Like it is not picking up the
    // first click.
    const [isAuthed, setIsAuthed] = useState(isAuthenticated);

    const [natTrx, loadTrx] = useState(undefined);

    function connect()//console.log(JSON.stringify(natTrx));
    {
        //TODO: Put some of this in different modules, It is not really reusable in the current state because we
        // get a whole box back in return when we log in.

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

                <p>Welcome <span className='username'>{user.getUsername()}</span></p>

                <div>
                    <button onClick={connect}>Logout</button>
                    <button>Menu</button>
                </div>
                <hr/>
                <div className='bnb-balance-container'>
                    <p className='bnb-balance-label'>BnB Balance: <span
                        className='bnb-balance-amount'>{test_text.toFixed(6)}</span></p>


                </div>

                <hr/>

                <div className='testing-container'>
                    <h5>Testing vars:</h5>
                    <p className='testing-p'>isAuthed current state: <span
                        className='testing-comp'>{JSON.stringify(isAuthed)}</span></p>
                    <p className='testing-p'>natTrx amount: <span
                        className='testing-comp'>{JSON.stringify(natTrx)}</span></p>
                </div>
            </div>
        );

        // Logged out
    }
    else {
        return (
            <div className='profile-container'>
                <span><h4>Please connect wallet for best experience</h4>
                    <button onClick={connect}>{text}</button></span>
                <hr/>
                <div className='testing-container'>
                    <h5>Testing vars:</h5>
                    <p className='testing-p'>isAuthed current state: <span
                        className='testing-comp'>{JSON.stringify(isAuthed)}</span></p>
                    <p className='testing-p'>natTrx amount: <span
                        className='testing-comp'>{JSON.stringify(natTrx)}</span></p>

                </div>
            </div>
        );
    }
}

