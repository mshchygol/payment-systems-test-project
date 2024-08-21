import { PaymentMethod } from "@/helpers/types";
import { createContext } from "react";

const ModalContext = createContext({ isOpen: false, paymentMethod: {} as PaymentMethod, toggleModal: (item: PaymentMethod) => {} });

export default ModalContext;