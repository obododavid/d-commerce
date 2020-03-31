import React from "react";
import { ButtonContainer } from "./style";
import { ButtonProps } from "../../../interfaces/IButton";

const Button: React.FC<ButtonProps> = ({
    children,
    blue_small_text,
    ash_small_text
}) => {
    return (
        <ButtonContainer
            blue_small_text={blue_small_text}
            ash_small_text={ash_small_text}
        >
            {children}
        </ButtonContainer>
    );
};

export default Button;
