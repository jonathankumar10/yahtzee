import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.handleClick(this.props.index);
    }

    render() {
        return (
            <div>
                <button 
                className="Die" 
                style = {{backgroundColor: this.props.locked ? "grey" : "black"}}
                onClick={this.handleClick}
                >
                    {this.props.value}
                </button>
            </div>
        )
    }
}

export default Die;
