import { OperationStatus } from "@/helpers/enums";

export type PaymentMethod = {
    id: number;
    logo: string;
    name: string;
    commission: number;
    label?: string;
}

export type Transaction = {
    id: string;
    paymentMethod: PaymentMethod;
    transactionNumber: number;
    paymentDate: Date;
    amountPayed: string;
    operationStatus: OperationStatus;
}
