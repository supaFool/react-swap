import Moralis from 'moralis';
import User from './User';

const serverUrl = "https://klpxwezyuiua.usemoralis.com:2053/server"; //Serve>
const appId = "SJlvpL4zKheiaYlFnUpSL5ozOZsq7D7Q45nbwckX"; // Application id >

//Web 3 functionality Used to start running Moralis

function Web3() {
    //Called when site is loading.


    Moralis.start({serverUrl, appId}).then();

    Moralis.enableWeb3().then();
    User.entity = Moralis.User.current;
    User.entity = Moralis.authenticate();


    return (
        <div>
            <h3>Loaded User Info. {User.entity}</h3>
        </div>
    );

}

export default Web3;