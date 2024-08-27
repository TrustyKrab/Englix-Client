import React, { Children } from "react";
import { Link } from "react-router-dom"

export default function Button() {
    return (
        <div className="bg-pink-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
            <Link
                to={to}
                className="text-white hover:text-pink-500">
                {Children}
            </Link>

        </div>
    )
}