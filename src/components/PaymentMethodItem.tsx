import { PaymentMethod } from "@/types";

interface PaymentMethodItemProps {
    paymentMethod: PaymentMethod;
    key: number;
}

export default function PaymentMethodItem({ paymentMethod }: PaymentMethodItemProps) {
    const { logo, name, commission } = paymentMethod;
    
    return (
        <div>

        </div>
    )
}