import { ButtonType } from "@/helpers/enums";

interface ButtonProps {
    text: string;
    disabled?: boolean;
    type: ButtonType;
    onClick: () => void;
}

export default function Button({ text, disabled, type, onClick }: ButtonProps) {
    return (
        <>
            <button className={`button button--${type}`} onClick={onClick} disabled={disabled}>{text}</button>
        </>
    )
}