import React, { Component } from 'react';

import Tiles from '../Tiles/Tiles';
import data from "./data.json";
import "./style.css";

const newData = data;

const dataShuffle = function (array) {
    let m = array.length, t, i;

    while (m) {
        //Picks a remaining element
        i = Math.floor(Math.random() * m--);

        //Swap
        t = array[m];
        array[m] = array[i];
        array[i] = t
    }
    return array;
}

class Game extends Component {

    state = {
        count: 0,
        highScore: 0,
        status: ""
    }

    checkState = (e) => {

        let thisId = e.target.getAttribute('data-id');

        newData.forEach((index) => {
            if (index.id === +thisId) {

                if (!index.wasClicked) {
                    index.wasClicked = true;
                    document.getElementById("last-guess").innerHTML = " | Correct!"
                    document.getElementById("last-guess").style = "color: black"
                    this.setState({ count: this.state.count + 1 });
                } else {
                    this.gameReset();
                }

            }
        })

    } //end checkState()

    gameReset = () => {
        newData.forEach(index => {
            index.wasClicked = false;            
        })
        document.getElementById("last-guess").innerHTML = " | Ya Wrong!  Start Again";
        document.getElementById("last-guess").style = "color: White;"

        this.setState({ count: 0 })
        if (this.state.highScore < this.state.count) {
            this.setState({ highScore: this.state.count })
        }
        console.log("Restart!")
    }

    render() {
        return (
            <>
                <div id="score-card">Current Score: {this.state.count} | High Score: {this.state.highScore} <span id="last-guess"></span></div>
                <hr></hr>
                <div id="game-board">
                    {dataShuffle(data)
                        .map((index) => <div className="tile-wrap" data-id={index.id} onClick={this.checkState}><Tiles image={index.image}
                            id={index.id} /></div>
                        )}
                </div>

            </>
        )
    }
}

export default Game;