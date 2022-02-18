import React, { useRef, useEffect } from 'react'
import { Meal } from '../utils/Types'

interface Props {
    inputname?: string,
    id: string,
    placeholder?: string,
    type: string,
    value: string | undefined,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    editMode: boolean
}

export const InputField: React.FC<Props> = ({ inputname, id, placeholder, type, value, onChange, editMode }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [editMode])

    return (
        <div>
            <label htmlFor="email" className="sr-only">
                Email
            </label>
            <input
                type={type}
                ref={inputRef}
                name={inputname}
                id={id}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 sm:text-sm border-gray-300 rounded-md"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>

    )
}