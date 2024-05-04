/*import React, { useState } from 'react';
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

export default Level;*/

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Level.css"; // Import your CSS file for styling

const Level = () => {
    const [showBasicPuzzles, setShowBasicPuzzles] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedPuzzle, setSelectedPuzzle] = useState(null);

    const toggleBasicPuzzles = () => {
        setShowBasicPuzzles(!showBasicPuzzles);
    }

    // Array of basic puzzles
    const basicPuzzles = [
        { id: 1, question: './Assets/p1.png', answer: '4' },
        { id: 2, question: 'puzzle2.jpg', answer: 'Paris' },
        { id: 3, question: 'puzzle3.jpg', answer: 'William Shakespeare' },
        // Add more puzzles as needed
    ];

    const showPuzzleAnswer = () => {
        const confirmAnswer = window.confirm('Do you really want to see the answer?');
        if (confirmAnswer) {
            setShowAnswer(true);
        }
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
                    {basicPuzzles.map((puzzle) => (
                        <div key={puzzle.id} className="puzzle">
                            <img src={puzzle.question} alt={`Puzzle ${puzzle.id}`} />
                            <button onClick={() => { setSelectedPuzzle(puzzle); showPuzzleAnswer(); }}>
                                Show Answer
                            </button>
                            {showAnswer && selectedPuzzle && selectedPuzzle.id === puzzle.id && (
                                <p>A: {puzzle.answer}</p>
                            )}
                        </div>
                    ))}
                    <button className="intermediate-button"><Link to="/intermediate">Go to Intermediate Level</Link></button>
                </div>
            )}
        </div>
    );
}

export default Level;*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Level.css"; // Import your CSS file for styling
import p1 from './Assets/p1.png'; // Import the image

const Level = () => {
    const [showBasicPuzzles, setShowBasicPuzzles] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedPuzzle, setSelectedPuzzle] = useState(null);

    const toggleBasicPuzzles = () => {
        setShowBasicPuzzles(!showBasicPuzzles);
    }

    // Array of basic puzzles
    const basicPuzzles = [
        { id: 1, question: p1, answer: 'A,D and E' },
        { id: 2, question: 'puzzle2.jpg', answer: 'Paris' },
        { id: 3, question: 'puzzle3.jpg', answer: 'William Shakespeare' },
        // Add more puzzles as needed
    ];

    const showPuzzleAnswer = () => {
        const confirmAnswer = window.confirm('Do you really want to see the answer?');
        if (confirmAnswer) {
            setShowAnswer(true);
        }
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
                    {basicPuzzles.map((puzzle) => (
                        <div key={puzzle.id} className="puzzle">
                        <img className="puzzle-image" src={puzzle.question} alt={`Puzzle ${puzzle.id}`} />
                        <button className="show-answer-button" onClick={() => { setSelectedPuzzle(puzzle); showPuzzleAnswer(); }}>
                            Show Answer
                        </button>
                        {showAnswer && selectedPuzzle && selectedPuzzle.id === puzzle.id && (
                            <p>A: {puzzle.answer}</p>
                        )}
                    </div>
                    
                    
                    ))}
                    <button className="intermediate-button"><Link to="/intermediate">Go to Intermediate Level</Link></button>
                </div>
            )}
        </div>
    );
}

export default Level;

