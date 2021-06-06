import React, { Component } from 'react'
import Die from './Die.js';
import './Dice.css';

class Dice extends Component {    
    render() {
        return (
            <div className="Dice">
                {this.props.dice.map((die, index)=>
                    <Die 
                    value = {die} 
                    index = {index} 
                    key = {index} 
                    locked = {this.props.locked[index]}
                    handleClick={this.props.handleClick}
                    />
                )}
            </div>
        )
    }
}

export default Dice;