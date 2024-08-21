import { generateTransactions } from "@/helpers/utils"
import { useEffect, useState } from "react"
import Button from "./Button";
import { ButtonType } from "@/helpers/enums";
import { Transaction } from "@/helpers/types";
import TransactionItem from "./Transaction";

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
            <h1 className="heading transactions-title-large">Last Transactions</h1>
            <h1 className="transactions-title-small">Transactions</h1>
            <button className="transactions-filter">
                    <img src="/img/filter-icon.svg" alt="filter icon image"/>
                </button>
            </div>
            {transactions.map((transaction) => <TransactionItem key={transaction.id} transaction={transaction}/>)}
            <div className="transactions-button">
                <Button text="Show More" type={ButtonType.Medium} onClick={loadMoreTransactions}/>
            </div>
        </>
    )
}