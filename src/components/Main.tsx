import PaymentMethods from "./PaymentMethods";
import { CRYPTO_PAYMENT_METHODS, TRADITIONAL_PAYMENT_METHODS } from "@/helpers/data";
import PromoCodeForm from "./PromoCodeForm";
import TransactionsHistory from "./TransactionsHistory";
import Modal from "./Modal";

export default function Main() {
    return (
        <main>
            <h1 className="heading">Make A Deposit</h1>
            <h2 className="subheading">Choose Payment Method</h2>
            <PaymentMethods label="Cards, E-Money, PIN" paymentMethods={TRADITIONAL_PAYMENT_METHODS}/>
            <PaymentMethods label="Cryptocurrency" paymentMethods={CRYPTO_PAYMENT_METHODS}/>
            <PromoCodeForm heading="Have A Promo Code?" label="Enter promo code here. It will activate a special bonus!"/>
            <TransactionsHistory/>
            <Modal/>
        </main>
    )
}