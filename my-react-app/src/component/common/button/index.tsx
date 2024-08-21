import React from "react";

interface ButtonProps {
    onClick?: () => void;
    label: string;
    type?: "button" | "submit";
}

const Button = ({ onClick, label, type }: ButtonProps) => {
    return (
        <button
            className="flex-row bg-blue-300 w-1/4 rounded m-1"
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
