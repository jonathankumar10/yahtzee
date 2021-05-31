import React, { Component } from 'react';
import Dice from './Dice.js';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            dice: Array.from({length:NUM_DICE}),
            locked: Array(NUM_DICE).fill(false),
            rollsLeft: NUM_ROLLS
        }
        this.toggleLocked = this.toggleLocked.bind(this);
        this.roll = this.roll.bind(this);
    }

    toggleLocked(idx){
        this.setState(st =>({
            locked: [
                ...st.locked.slice(0,idx),
                !st.locked[idx],
                ...st.locked.slice(idx+1)]
        }));
    }

    roll(evt){
        this.setState(st=>({
            dice: st.dice.map((d, i) =>
                st.locked[i] ? d : Math.ceil(Math.random() * 6)
            ),
            locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
            rollsLeft: st.rollsLeft - 1
        }));
    }

    render() {
        return (
            <div className="Game">
                <header className="Game-header">
                    <h1 className="App-title">Yahtzee</h1>

                    <section className="Game-dice-section">
                        <Dice 
                        dice={this.state.dice}
                        locked={this.state.locked}
                        handleClick = {this.toggleLocked}
                        />
                        <div className='Game-button-wrapper'>
                            <button
                                className='Game-reroll'
                                disabled={this.state.locked.every(x => x)}
                                onClick={this.roll}
                            >
                                {this.state.rollsLeft} Rerolls Left
                            </button>
                        </div>
                    </section>
                </header>
            </div>
        )
    }
}

export default Game;
