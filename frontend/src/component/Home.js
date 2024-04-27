/*import React from 'react';
import "./Home.css";

function Home(){
    return <div className='wrapper'>
        <div className="card"><img className="cimg" src="1.jpeg" alt="" />
      <div className="info">
        <h3>TOP 20 PUZZLE</h3>
        <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
             ready to ace your next interview with these challenging brain teasers.</p>
             <button><a href="./Top.js">View</a></button>
      </div>
    </div>
    </div>
}
export default Home;*/

import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    return (
        <div className='wrapper'>
            <div className="card">
                <img className="cimg" src="https://source.unsplash.com/400x400" alt="" />
                <div className="info">
                    <h3>TOP 20 PUZZLE</h3>
                    <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
                        ready to ace your next interview with these challenging brain teasers.</p>
                    <button><Link to="/top">View</Link></button>
                </div>
            </div>
            <div className="card">
                <img className="cimg" src="https://source.unsplash.com/400x400" alt="" />
                <div className="info">
                    <h3>Level based puzzles</h3>
                    <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
                        ready to ace your next interview with these challenging brain teasers.</p>
                    <button><Link to="/level">View</Link></button>
                </div>
            </div>
            <div className="card">
                <img className="cimg" src="https://source.unsplash.com/400x400" alt="" />
                <div className="info">
                    <h3>CodeZone</h3>
                    <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
                        ready to ace your next interview with these challenging brain teasers.</p>
                    <button><Link to="/codezone">View</Link></button>
                </div>
            </div>
            <div className="card">
                <img className="cimg" src="https://source.unsplash.com/400x400" alt="" />
                <div className="info">
                    <h3>MCQ based questions</h3>
                    <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
                        ready to ace your next interview with these challenging brain teasers.</p>
                    <button><Link to="/mcq">View</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Home;