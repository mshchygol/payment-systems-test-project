import { PaymentMethod } from "@/types";
import PaymentMethods from "./PaymentMethods";

const TRADITIONAL_PAYMENT_METHODS: PaymentMethod[] = [];
const CRYPTO_PAYMENT_METHODS: PaymentMethod[] = [
    {
        id: 1,
        logo: "",
        name: "BTC",
        commission: 0
    },
    {
        id: 2,
        logo: "",
        name: "ETH",
        commission: 0
    },
    {
        id: 3,
        logo: "",
        name: "USDT",
        commission: 0
    },
];

export default function Main() {
    return (
        <main>
            <h1>Make a deposit</h1>
            <h2>Choose payment method</h2>
            <PaymentMethods label="Cards, e-money, PIN" paymentMethods={TRADITIONAL_PAYMENT_METHODS}/>
            <PaymentMethods label="Cryptocurrency" paymentMethods={CRYPTO_PAYMENT_METHODS}/>
        </main>
    )
}