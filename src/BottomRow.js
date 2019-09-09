import React, {useState} from "react";
import "./App.css";


const BottomRow = () => {
  // DOWN COMPONENT
  const [downNum, setDownNum] = useState(1);
  // QUARTER COMPONENT
  const [quarterNum, setQuarterNum] = useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downNum}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterNum}</div>
      </div>
      {/* DOWN BUTTON */}
      <button className="downbtn" onClick = {() => downNum === 4 ? setDownNum(1) : setDownNum(downNum + 1)}>Change Down</button>
      {/* QUARTER BUTTON */}
      <button className="quarterbtn" onClick = {() => quarterNum === 4 ? setQuarterNum(1) : setQuarterNum(quarterNum + 1)}>Change Quarter</button>
    </div>
  );
};

export default BottomRow;
