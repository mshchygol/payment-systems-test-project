import { Transaction } from "@/helpers/types";
import { formatDate } from "@/helpers/utils";

interface TransactionItemProps {
    transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
    const { paymentMethod, transactionNumber, paymentDate, amountPayed, operationStatus } = transaction;
    const { logo: paymentMethodLogo, name: paymentMethodName } = paymentMethod;
    
    return (
        <div className="transaction">
            <div className="transaction__payment-method-logo">
                <img src={`/img/${paymentMethodLogo}`} alt={`${paymentMethodName} logo image`}/>
            </div>
            <div className="transaction__payment-method-name align-transaction-cell">
                <p className="transaction__primary-text">by {paymentMethodName}{paymentMethodName.includes("EUR") ? "" : ", USD"}</p>
                <p className="transaction__secondary-text">Withdraw</p>
            </div>
            <div className="transaction__number align-transaction-cell">
                <p className="transaction__primary-text">{transactionNumber}</p>
                <p className="transaction__secondary-text">Transaction Number</p>
            </div>
            <div className="transaction__payment-date align-transaction-cell">
                <p className="transaction__primary-text">{formatDate(paymentDate)}</p>
                <p className="transaction__secondary-text">Payment Date</p>
            </div>
            <div className="transaction__amount-payed align-transaction-cell">
                <p className="transaction__primary-text">{amountPayed}$</p>
                <p className="transaction__secondary-text">Amount Payed</p>
            </div>
            <div className="transaction__operation-status align-transaction-cell">
                <p className={`transaction__primary-text transaction__primary-text--${operationStatus.toLowerCase()}`}>{operationStatus}</p>
                <p className="transaction__secondary-text">Operation Status</p>
            </div>
        </div>
    )
}