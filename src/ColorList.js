import React from "react";
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
    return (
        <div>
            <h1>Color List</h1>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>
                        <Link to={`/colors/${color.toLowerCase()}`}>{color}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ColorList;