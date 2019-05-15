import React, { Component } from 'react';
import { cx, css } from 'emotion'

const blueColor = css`
    color: blue
`
const greenColor = css`
    color: green
`

class ColorChange extends Component {
    state = {
        blueColor: false
    }

    changeColor = () => {
        this.setState({
            blueColor: !this.state.blueColor
        })
    }

    render () {
        console.log(this.state.blueColor,`<========== blueColor ==========`);
        return (
            <div>
                <p className={cx(
                { [greenColor]: !this.state.blueColor },
                { [blueColor]: this.state.blueColor }
                )}>
             Edit <code></code> and save to reload.
             </p>
                <button id="increment" onClick={this.changeColor}>
                Change Color
                </button>
            </div>
        );
    }
}

export default ColorChange;