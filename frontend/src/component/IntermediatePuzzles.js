/*import React, { useState } from 'react';

const IntermediatePuzzles = () => {
    const [mcqs, setMcqs] = useState([
        {
            id: 1,
            question: 'What is the capital of Japan?',
            options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
            answer: 'Tokyo',
            selected: null
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Venus', 'Mercury'],
            answer: 'Mars',
            selected: null
        },
        // Add more MCQs here
    ]);
    const [showPuzzles, setShowPuzzles] = useState(false);

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedMcqs = mcqs.map(mcq =>
            mcq.id === questionId ? { ...mcq, selected: selectedOption } : mcq
        );
        setMcqs(updatedMcqs);
    };

    const allAnswersCorrect = mcqs.every(mcq => mcq.selected === mcq.answer);

    const handleViewPuzzlesClick = () => {
        if (allAnswersCorrect) {
            setShowPuzzles(true);
        } else {
            alert('Please answer all questions correctly to view the puzzles.');
        }
    };

    return (
        <div>
            <h1>Intermediate Level Puzzles</h1>
            {!showPuzzles && (
                <div>
                    <h2>Test</h2>
                    <p>Complete the following questions to unlock the puzzles:</p>
                    {mcqs.map(mcq => (
                        <div key={mcq.id}>
                            <h3>{mcq.question}</h3>
                            <ul>
                                {mcq.options.map(option => (
                                    <li key={option}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${mcq.id}`}
                                                value={option}
                                                checked={mcq.selected === option}
                                                onChange={() => handleAnswerSelect(mcq.id, option)}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button onClick={handleViewPuzzlesClick}>View Puzzles</button>
                </div>
            )}
            {showPuzzles && (
                <div>
                    <h2>Intermediate Level Puzzles</h2>
                    <p>Content for the intermediate level puzzles...</p>
                </div>
            )}
        </div>
    );
}

export default IntermediatePuzzles;*/

/*import React, { useState } from 'react';
import styles from './IntermediatePuzzles.module.css'; // Import CSS module for styling

const IntermediatePuzzles = () => {
    const [mcqs, setMcqs] = useState([
        {
            id: 1,
            question: 'What is the capital of Japan?',
            options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
            answer: 'Tokyo',
            selected: null
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Venus', 'Mercury'],
            answer: 'Mars',
            selected: null
        },
        // Add more MCQs here
    ]);
    const [showPuzzles, setShowPuzzles] = useState(false);

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedMcqs = mcqs.map(mcq =>
            mcq.id === questionId ? { ...mcq, selected: selectedOption } : mcq
        );
        setMcqs(updatedMcqs);
    };

    const allAnswersCorrect = mcqs.every(mcq => mcq.selected === mcq.answer);

    const handleViewPuzzlesClick = () => {
        if (allAnswersCorrect) {
            setShowPuzzles(true);
        } else {
            alert('Please answer all questions correctly to view the puzzles.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Intermediate Level Puzzles</h1>
            {!showPuzzles && (
                <div>
                    <h2>Test</h2>
                    <p className="unlock-text">Complete the following questions to unlock the puzzles:</p>
                    {mcqs.map(mcq => (
                        <div key={mcq.id}>
                            <h3>{mcq.question}</h3>
                            <ul>
                                {mcq.options.map(option => (
                                    <li key={option}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${mcq.id}`}
                                                value={option}
                                                checked={mcq.selected === option}
                                                onChange={() => handleAnswerSelect(mcq.id, option)}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button className={styles.button} onClick={handleViewPuzzlesClick}>View Puzzles</button>
                </div>
            )}
            {showPuzzles && (
                <div>
                    <h2>Intermediate Level Puzzles</h2>
                    <p>Content for the intermediate level puzzles...</p>
                </div>
            )}
        </div>
    );
}

export default IntermediatePuzzles;*/

import React, { useState } from 'react';
import styles from './IntermediatePuzzles.module.css'; // Import CSS module for styling

const IntermediatePuzzles = () => {
    const [mcqs, setMcqs] = useState([
        {
            id: 1,
            question: 'What is the capital of Japan?',
            options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
            answer: 'Tokyo',
            selected: null
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Venus', 'Mercury'],
            answer: 'Mars',
            selected: null
        },
        // Add more MCQs here
    ]);
    const [showPuzzles, setShowPuzzles] = useState(false);

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedMcqs = mcqs.map(mcq =>
            mcq.id === questionId ? { ...mcq, selected: selectedOption } : mcq
        );
        setMcqs(updatedMcqs);
    };

    const allAnswersCorrect = mcqs.every(mcq => mcq.selected === mcq.answer);

    const handleViewPuzzlesClick = () => {
        if (allAnswersCorrect) {
            setShowPuzzles(true);
        } else {
            alert('Please answer all questions correctly to view the puzzles.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Intermediate Level Puzzles</h1>
            {!showPuzzles && (
                <div>
                    <h2>Test</h2>
                    <p className="unlock-text">Complete the following questions to unlock the puzzles:</p>
                    {mcqs.map(mcq => (
                        <div key={mcq.id}>
                            <h3>{mcq.question}</h3>
                            <ul>
                                {mcq.options.map(option => (
                                    <li key={option}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${mcq.id}`}
                                                value={option}
                                                checked={mcq.selected === option}
                                                onChange={() => handleAnswerSelect(mcq.id, option)}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button className={styles.button} onClick={handleViewPuzzlesClick}>View Puzzles</button>
                </div>
            )}
            {showPuzzles && (
                <div>
                    <h2>Intermediate Level Puzzles</h2>
                    <p>Content for the intermediate level puzzles...</p>
                </div>
            )}
        </div>
    );
}

export default IntermediatePuzzles;
