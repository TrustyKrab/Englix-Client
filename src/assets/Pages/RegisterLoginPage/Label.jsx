import React from 'react';

export default function Label({ htmlFor, children }) {
    return (
        <label
            htmlFor={htmlFor}
            className="block text-gray-700 text-sm font-bold mb-2"
        >
            {children}
        </label>
    );
};
