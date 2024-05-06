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
import t20 from "./luca-bravo-XJXWbfSo2f0-unsplash (1).jpg"
import lb from "./markus-spiske-MgtHZ4zlC1U-unsplash.jpg"
import cz from "./arif-riyanto-vJP-wZ6hGBg-unsplash.jpg"
import mcq from "./nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg"
function Home() {
    return (
        <div className='bg'>
        <div className='wrapper'>
            <div className="card">
                <img className="cimg" src={t20} alt="" />
                <div className="info">
                    <h3>TOP 20 PUZZLE</h3>
                    <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
                        ready to ace your next interview with these challenging brain teasers.</p>
                    <button><Link to="/top">View</Link></button>
                </div>
            </div>
            <div className="card">
                <img className="cimg" src={lb} alt="" />
                <div className="info">
                    <h3>Level based puzzles</h3>
                    <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
                        ready to ace your next interview with these challenging brain teasers.</p>
                    <button><Link to="/level">View</Link></button>
                </div>
            </div>
            <div className="card">
                <img className="cimg" src={cz} alt="" />
                <div className="info">
                    <h3>CodeZone</h3>
                    <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
                        ready to ace your next interview with these challenging brain teasers.</p>
                    <button><Link to="/codezone">View</Link></button>
                </div>
            </div>
            <div className="card">
                <img className="cimg" src={mcq} alt="" />
                <div className="info">
                    <h3>MCQ based questions</h3>
                    <p>Explore the top 20 puzzles asked in SDE interviews! Sharpen your problem-solving skills and get
                        ready to ace your next interview with these challenging brain teasers.</p>
                    <button><Link to="/mcq">View</Link></button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;