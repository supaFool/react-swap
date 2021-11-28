/*
 * Copyright supadev.com  (c) 2021.
 */

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

    return (
        <div className='swap-container'>
            <ProfileBox/>

            <p className='cookie'>session: {isAuthenticated ? user.getSessionToken() : "No cookies saved"}</p>
        </div>
    );
}

