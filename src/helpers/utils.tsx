import { CRYPTO_PAYMENT_METHODS, TRADITIONAL_PAYMENT_METHODS } from "./data";
import { OperationStatus } from "./enums";
import { PaymentMethod, Transaction } from "./types";

export function generateTransactions(amount: number): Transaction[] {
    const transactions: Transaction[] = [];

    for (let i = 0; i < amount; i++) {
        const paymentDate = new Date();
        paymentDate.setTime(paymentDate.getTime() - Math.round(Math.random() * 1000 * 60 * 60 * 24 * 30));

        transactions.push({
            id: createId(),
            paymentMethod: getPaymentMethod(),
            transactionNumber: Math.round(Math.random() * 1000000),
            paymentDate: paymentDate,
            amountPayed: Number.parseFloat(`${Math.random() * 1000}`).toFixed(2),
            operationStatus: randomEnumValue(OperationStatus),
        })
    }

    return transactions;
}

function createId(): string {
    return `${Math.round(Math.random() * 100000)}-${Math.round(Math.random() * 100000)}`;
}

function getPaymentMethod(): PaymentMethod {
    const paymentMethods = [...TRADITIONAL_PAYMENT_METHODS, ...CRYPTO_PAYMENT_METHODS];

    return paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
}

function randomEnumValue<T>(enumObj: any): T[keyof T] {
    const enumValues = Object.values(enumObj);
    const index = Math.floor(Math.random() * enumValues.length);
    
    return enumValues[index] as T[keyof T];
}