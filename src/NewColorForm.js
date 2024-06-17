import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewColorForm({ addColor }) {
    const [color, setColor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
        history.push('/colors');
    };

    return (
        <div>
            <h1>Add a New Color</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Enter color name"
                required
            />
            <button type="submit">Add Color</button>
            </form>
        </div>
    );
}
export default NewColorForm;