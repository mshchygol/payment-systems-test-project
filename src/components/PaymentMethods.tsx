import { PaymentMethod } from "@/types";
import PaymentMethodItem from "./PaymentMethodItem";

interface PaymentMethodsProps {
    label: string;
    paymentMethods: PaymentMethod[];
}

export default function PaymentMethods({ label, paymentMethods }: PaymentMethodsProps) {
    return (
        <>
            <p>{label}</p>
            {paymentMethods.map((paymentMethod) => <PaymentMethodItem key={paymentMethod.id} paymentMethod={paymentMethod} />)}
        </>
    )
}