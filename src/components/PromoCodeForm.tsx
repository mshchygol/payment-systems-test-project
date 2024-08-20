import { ButtonType } from "@/helpers/enums";
import Button from "./Button";
import { useState } from "react";

interface PromoCodeFormProps {
    heading: string;
    label?: string;
}

export default function PromoCodeForm({ heading, label }: PromoCodeFormProps) {
    const [inputValue, setInputValue] = useState('');
    const [isCodeValid, setIsCodeValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const buttonDisabled = !inputValue || isSubmitted;

    function handleClick() {
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setIsCodeValid(inputValue.startsWith("ALPHA"));
        }, 1200)
    }

    return (
        <>
            <h2 className="subheading">{heading}</h2>
            {label && <label className="promocode-label" htmlFor="promocode">{label}</label>}
            <input
                className="promocode-input" 
                type="text" name="promocode" 
                id="promocode"
                data-valid={`${isCodeValid}`}
                disabled={isSubmitted}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button text="Apply" disabled={buttonDisabled} type={ButtonType.Small} onClick={handleClick}/>
        </>
    )
}