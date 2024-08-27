import React from 'react';

export default function Input({ type, id, name, value, onChange, placeholder }) {
    return (

        <input
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border-2 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
            required
        />
    );
};
