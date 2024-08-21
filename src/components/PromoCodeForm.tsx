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

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);

        if (isCodeValid) {
            setIsCodeValid(false);
        }
    }

    function handleClick() {
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setIsCodeValid(inputValue.length > 1);
        }, 1000)
    }

    return (
        <div>
            <h2 className="subheading">{heading}</h2>
            {label && <label className="promocode-label" htmlFor="promocode">{label}</label>}
            <div className="promocode-wrapper">
                <input
                    className="promocode-input" 
                    type="text" name="promocode" 
                    id="promocode"
                    data-valid={`${isCodeValid}`}
                    disabled={isSubmitted}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button text="Apply" disabled={buttonDisabled} type={ButtonType.Small} onClick={handleClick}/>
            </div>
        </div>
    )
}