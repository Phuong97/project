import React from 'react';
import { Component } from "react";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    render() {
        return (

            <p className="App-clock" style={{textAlign:'center',margin:50}}>
                 {this.state.time}.
                    </p>
        )
    };

}