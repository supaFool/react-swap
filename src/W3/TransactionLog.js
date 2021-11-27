import {useState} from "react";

export default function TransactionLog(props) {

    const txInfo = {
        totalTrx: undefined,
        hash: {},

    }

    const [parsedTrx, startParsing] = useState(undefined);


    return (

        <div>
            <p>User Accounts:</p>
            {JSON.stringify(props.user)}
        </div>

    );
}