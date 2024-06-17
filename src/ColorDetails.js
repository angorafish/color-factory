import React from "react";
import { useParams, Redirect } from 'react-router-dom';

function ColorDetails({ colors }) {
    const { color } = useParams();
    const selectedColor = colors.find(c => c.toLowerCase() === color.toLowerCase());

    if (!selectedColor) {
        return <Redirect to="/colors" />;
    }

    return (
        <div style={{ backgroundColor: selectedColor, height: '100vh' }}>
            <h1>{selectedColor}</h1>
            <p>This is {selectedColor} color.</p>
        </div>
    );
}

export default ColorDetails;