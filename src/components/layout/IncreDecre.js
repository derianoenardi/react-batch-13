import React, { Component } from 'react';

class IncreDecre extends Component {
    constructor() {
        super()
        this.state = {
            myNum: 0
        }
    }

    increment = () => {
        this.setState ({
            myNum : this.state.myNum + 1
        })
    }

    decrement = () => {
        let { myNum } = this.state
        myNum -= 1
        if (myNum >= 0) {
            this.setState({
                myNum
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.myNum}
                <div>
                <button onClick={this.increment}>
                    Increment 
                </button>
                <br/>
                <button onClick={this.decrement}>
                    Decrement 
                </button>
            </div>
            </div>
            
        );
    }    
}

export default IncreDecre;