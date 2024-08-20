import { PaymentMethod } from "@/helpers/types";
import PaymentMethodItem from "./PaymentMethodItem";

interface PaymentMethodsProps {
    label: string;
    paymentMethods: PaymentMethod[];
}

export default function PaymentMethods({ label, paymentMethods }: PaymentMethodsProps) {
    return (
        <>
            <p className="payment-methods-label">{label}</p>
            <div className="payment-methods-container">
                {paymentMethods.map((paymentMethod) => <PaymentMethodItem key={paymentMethod.id} paymentMethod={paymentMethod} />)}
            </div>
        </>
    )
}