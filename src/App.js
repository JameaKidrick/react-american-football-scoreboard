//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect, toggle} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  // TIMER COMPONENT
  const [seconds, setSeconds] = useState('59');
  // const[minutes, setMinutes] = useState(15);
  const [on, setOn] = useState(false);

  function reset(){
    setSeconds(59);
    // setMinutes(15);
    setOn(false);
  }

  useEffect(() => {
    let interval = null;
    if(on){
      interval = setInterval (() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }else if (!on && seconds !== 0){
      clearInterval(interval);
    }
    return() => clearInterval(interval);
  }, [on, seconds]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Cheetahs</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:{seconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <div className = 'timerButtons'>
            <button className = 'timerbtn' onClick = {() => on ? setOn(false) : setOn(true)}>
              {on ? 'Pause' : 'Start'}
            </button>

            <button className = "resetbtn" onClick = {reset}>
              Reset
            </button>
          </div>

          <button className="homeButtons__touchdown" onClick = {() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
