import React from 'react';

class Demo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            num: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({
            num: this.state.num + 1
        });
    }

    // 定制shouldComponentUpdate,若返回false的话，点击button不会使num发生改变的
    shouldComponentUpdate (nextProps, nextState) {

        // if (this.state.num % 5 === 0) {
        //     console.log(this.state);
        //     return true;
        // }
        if (nextState.num % 5 === 0) {
            console.log(this.state);
            return true;
        }
        console.log("props:",this.props);
        console.log("nextProps:",nextProps);
        console.log("state:",this.state);
        console.log("nextState:",nextState);
        return false;
    }

    render () {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default Demo;