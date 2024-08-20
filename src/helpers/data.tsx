import { PaymentMethod } from "@/helpers/types";

export const TRADITIONAL_PAYMENT_METHODS: PaymentMethod[] = [
    {
        id: 1,
        logo: "mastercard-logo.svg",
        name: "Mastercard",
        commission: 5,
        label: "popular"
    },
    {
        id: 2,
        logo: "visa-logo.svg",
        name: "Visa",
        commission: 5,
        label: "trusted"
    },
    {
        id: 3,
        logo: "skrill-logo.svg",
        name: "Skrill",
        commission: 0
    },
    {
        id: 4,
        logo: "perfect-money-logo.svg",
        name: "Perfect Money, EUR",
        commission: 0
    },
    {
        id: 5,
        logo: "piastrix-logo.svg",
        name: "Piastrix, EUR",
        commission: 0
    },
    {
        id: 6,
        logo: "sticpay-logo.svg",
        name: "SticPay",
        commission: 0
    },
    {
        id: 7,
        logo: "pin-logo.svg",
        name: "PIN",
        commission: 1
    }
];

export const CRYPTO_PAYMENT_METHODS: PaymentMethod[] = [
    {
        id: 8,
        logo: "bitcoin-logo.svg",
        name: "BTC",
        commission: 0
    },
    {
        id: 9,
        logo: "ethereum-logo.svg",
        name: "ETH",
        commission: 0
    },
    {
        id: 10,
        logo: "tether-logo.svg",
        name: "USDT",
        commission: 0
    }
];

export const SIDEBAR_MENU_ITEMS = [
    "Casino Games",
    "Live Games",
    "TV-Bet",
    "Sport Games",
    "Virtual",
    "Tournaments",
    "Spin Shop",
    "FAQ",
    "Support Chat"
]
