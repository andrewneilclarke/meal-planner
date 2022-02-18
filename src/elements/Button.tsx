import React from 'react'

interface Props {
    buttonText: string,
    buttonType: "button" | "submit" | "reset" | undefined,
    onSubmit?: (e: any) => void
}

const Button: React.FC<Props> = ({ buttonText, buttonType, onSubmit }) => {
    return (
        <button
            type={buttonType}
            onClick={onSubmit}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {buttonText}
        </button>
    )
}

export default Button
