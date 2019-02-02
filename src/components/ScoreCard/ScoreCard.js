import React from "react";
import "./style.css"

const styles = {
    heading: {
      textAlign: "center"
    },
    description: {
      textAlign: "center"
    }
  };

const ScoreCard = function (props) {

    return (
        <div id="head-unit">
        <h1 id="title" style={styles.heading}>Harry Potter Memory Game</h1>
        <p style={styles.description}>Click a pic to earn a point, but click it again and you lose.</p>
            <div id="score-card">Current Score: {props.current} | High Score: {props.high} <span id="last-guess"></span></div>
            <hr></hr>
        </div>
    )
}

export default ScoreCard;