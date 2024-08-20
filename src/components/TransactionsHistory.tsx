import { generateTransactions } from "@/helpers/utils"
import { useEffect, useState } from "react"
import Button from "./Button";
import { ButtonType } from "@/helpers/enums";
import { Transaction } from "@/helpers/types";

export default function TransactionsHistory() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        setTransactions([...transactions, ...generateTransactions(5)]);
    }, []);

    function loadMoreTransactions() {
        setTransactions([...transactions, ...generateTransactions(5)]);
    }

    return (
        <>
            <div className="transactions-header">
                <h1 className="heading">Last Transactions</h1>
                <button>FILTER</button>
            </div>
            {transactions.map(({ id, transactionNumber, amountPayed }) => <div key={id}>
                <span>transaction N{transactionNumber} </span><span>----- payed: {amountPayed}$</span>
                <p>--------------------------------------------------------------------------------------------</p>
            </div>)}
            <div>
                <Button text="Show More" type={ButtonType.Medium} onClick={loadMoreTransactions}/>
            </div>
        </>
    )
}