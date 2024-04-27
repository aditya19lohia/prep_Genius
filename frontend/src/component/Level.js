import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Level.css"; // Import your CSS file for styling

const Level = () => {
    const [showBasicPuzzles, setShowBasicPuzzles] = useState(false);

    const toggleBasicPuzzles = () => {
        setShowBasicPuzzles(!showBasicPuzzles);
    }

    return (
        <div className="level-container">
            <h1>Level Based Puzzles</h1>
            <button onClick={toggleBasicPuzzles}>
                {showBasicPuzzles ? 'Hide Basic Puzzles' : 'Show Basic Puzzles'}
            </button>
            {showBasicPuzzles && (
                <div className="basic-puzzles">
                    <h2>Basic Puzzles</h2>
                    <p>Content for the basic level puzzles...</p>
                    <button className="intermediate-button"><Link to="/intermediate">Go to Intermediate Level</Link></button>
                </div>
            )}
        </div>
    );
}

export default Level;
