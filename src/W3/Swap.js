import ProfileBox from "./ProfileBox";
import '../style/swap.css'
import {useMoralis, useMoralisWeb3Api} from "react-moralis";

export default function Swap() {
    const {isAuthenticated, user} = useMoralis();
    const {web3} = useMoralisWeb3Api()
    //TODO:Swap Logic goes here.

    //Token Search Props, Same vars we had in alpha.1, but now saved in a object.
    const searchProps = {
        // If searching for custom coin
        custom_coin: false,
        //The token that you are buying ie:the bottom box
        toToken: {
            name: undefined,
            symbol: undefined,
            logo: undefined,
            address: undefined,
            decimals: undefined,
            owned: 0.0
        },
        //The token that you are trading ie: the top box
        fromToken: {
            name: undefined,
            symbol: undefined,
            logo: undefined,
            address: undefined,
            decimals: undefined,
            owned: 0.0
        },
        //The currently selected side. Should either be 'to'|'from'
        currentSide: undefined,
        slippage: 5
    }

    //Test();

    //const oneInch = useOneInchTokens();
    //let result = ;

    //console.log(oneInch);

    function listAvailableTokens() {
        //result holds the data returned by the 1inch plugin. Same as Token_obj, only the token vars are named differently.
        //refer to line '100' this logo property is named 'logoURI', compared to being named 'logo' in the WEB3 return (line: 60).

    }

    return (
        <div className='swap-container'>
            <ProfileBox/>

            <p className='cookie'>session: {isAuthenticated ? user.getSessionToken() : "Not logged in"}</p>
        </div>
    );
}

