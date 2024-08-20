import PaymentMethods from "./PaymentMethods";
import { CRYPTO_PAYMENT_METHODS, TRADITIONAL_PAYMENT_METHODS } from "@/helpers/data";
import PromoCodeForm from "./PromoCodeForm";
import TransactionsHistory from "./TransactionsHistory";

export default function Main() {
    return (
        <main>
            <h1 className="heading">Make a deposit</h1>
            <h2 className="subheading">Choose payment method</h2>
            <PaymentMethods label="Cards, e-money, PIN" paymentMethods={TRADITIONAL_PAYMENT_METHODS}/>
            <PaymentMethods label="Cryptocurrency" paymentMethods={CRYPTO_PAYMENT_METHODS}/>
            <PromoCodeForm heading="Have a promo code?" label="Enter promo code here. It will activate a special bonus!"/>
            <TransactionsHistory/>
        </main>
    )
}