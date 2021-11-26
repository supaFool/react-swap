import ProfileBox from "./ProfileBox";
import '../style/swap.css'
import {useState} from "react";

export default function Swap() {


    //TODO:Swap Logic goes here.

    //Token Search Props, Same vars we had in alpha.1, but now saved in a object.
    const searchProps = {
        // If searching for custom coin
        custom_coin: false,
        //The token that you are buying ie:the bottom box
        toToken: undefined,
        //The token that you are trading ie: the top box
        fromToken: undefined,
        //The currently selected side. Should either be 'to'|'from'
        currentSide: undefined,
        slippage: 5
    }

    const [toToken, setToToken] = useState(undefined);
    const [fromToken, setFromToken] = useState(undefined);

    return (
        <div className='swap-container'>
            <h5>Swap Alpha</h5>
            <ProfileBox/>

        </div>
    );
}

