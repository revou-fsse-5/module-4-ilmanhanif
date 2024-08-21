import React from "react";

interface InputProps {
    label: string;
    id: string;
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    touched: boolean;
    error: string | undefined;
}

const InputComponent = ({
    label,
    id,
    name,
    type,
    value,
    placeholder,
    onChange,
    onBlur,
    touched,
    error,
}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input
                className="border"
                type={type}
                id={id}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
            />
            {touched && error && (
                <small className="text-red-600">{error}</small>
            )}
        </>
    );
};

export default InputComponent;
