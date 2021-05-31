import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <div>
                <button 
                className={"Die"} 
                style = {{backgroundColor: this.props.locked ? "grey" : "black"}}
                onClick={this.props.handleClick}
                >
                    {this.props.value}
                </button>
            </div>
        )
    }
}

export default Die;
