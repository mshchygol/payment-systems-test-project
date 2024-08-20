import { PaymentMethod } from "@/helpers/types";

interface PaymentMethodItemProps {
    paymentMethod: PaymentMethod;
}

export default function PaymentMethodItem({ paymentMethod }: PaymentMethodItemProps) {
    const { logo, name, commission, label } = paymentMethod;
    
    return (
        <div className="payment-method-card">
            {label && <div className={`payment-method-card__label payment-method-card__label--${label}`}>{label.toUpperCase()}</div>}
            <img className="payment-method-card__image" src={`/img/${logo}`} alt={`${name} logo image`}/>
            <p className="payment-method-card__title">{name}</p>
            <p className="payment-method-card__commission">Commission {commission}%</p>
        </div>
    )
}