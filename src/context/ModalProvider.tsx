import { ReactNode, useState } from "react";
import ModalContext from "./ModalContext";
import { PaymentMethod } from "@/helpers/types";

interface ModalProviderProps {
    children: Array<ReactNode>;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isOpen, setIsopen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState({} as PaymentMethod);

    const toggleModal = (item: PaymentMethod) => {
        setIsopen(!isOpen);
        setPaymentMethod(item)
    };

    return (
        <ModalContext.Provider value={{ isOpen, paymentMethod, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;