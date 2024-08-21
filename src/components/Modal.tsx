import ModalContext from "@/context/ModalContext";
import PromoCodeForm from "./PromoCodeForm";
import { useContext, useState } from "react";
import { INCREMENT_BUTTONS } from "@/helpers/data";

export default function Modal() {
    const [amount, setAmount] = useState(21);
    const { isOpen, paymentMethod, toggleModal } = useContext(ModalContext);
    const { logo, name, commission } = paymentMethod;
    const currency = name?.includes("EUR") ? "EUR" : "USD";

    function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
        if ((e.target as HTMLDivElement).getAttribute("id") === "overlay") {
            toggleModal(paymentMethod);
        }
    }

    function handleIncrement(value: number) {
        if (amount + value < 906) {
            setAmount(amount + value);
        }
    }

    return (
        <div id="overlay" className={`modal ${isOpen ? 'modal--open' : ''}`} onClick={handleOverlayClick}>
            <div className="modal__content">
                <div className="modal__header">
                    <div>
                        <img src="/img/left-chevron-icon.svg" alt="left chevron icon image" onClick={() => toggleModal(paymentMethod)}/>
                        <span className="modal__title">Back to Payment Method</span>
                    </div>
                    <img src="/img/x-icon.svg" alt="close icon image" onClick={() => toggleModal(paymentMethod)}/>
                </div>
                <div className="modal__balance-wrapper">
                    <span>Current Balance:</span><span className="modal__balance-amount">$ 0.00</span>
                </div>
                <div className="modal__payment-method modal-item-wrapper">
                    <div className="payment-method-wrapper">
                        {logo && <img src={`/img/${logo}`} alt={`${name} logo image`}/>}
                        <div>
                            <p className="payment-method-name">{name}, {currency} - Commission {commission}%</p>
                            <p className="payment-method-hint">Please notice that you will send money in the {currency}</p>
                        </div>
                    </div>
                    <img src="/img/down-chevron-icon.svg" alt="down chevron icon image"/>
                </div>
                <p className="subheading">Amount</p>
                <div className="modal__selected-amount modal-item-wrapper">
                    $ {amount}
                </div>
                <div className="modal__increment-btns">
                    {INCREMENT_BUTTONS.map((value) => <div key={value} className="modal-item-wrapper" onClick={() => handleIncrement(value)}>
                        + ${value}
                    </div>)}
                </div>
                <p className="modal__hint">From 21.00 to 906.00 USD at a time</p>
                <PromoCodeForm heading="Promo Code"/>
            </div>
        </div>
    )
}