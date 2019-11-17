import React, { Component } from 'react';

class Test extends Component {

    //life cycle 
    componentDidMount() {
        console.log("component is mounted....");
        //this fires when this compinent is mounted
    }

    componentWillMount() {
        console.log("component is goint to be mounted....");
        //this fires Before this compinent is mounted...
    }

    componentDidUpdate() {
        //if state is changed in that component
    }

    componentWillUpdate() {
        //this is before the state is updated..
    }

    componentWillReceiveProps(nextProps, nextState) {
        //when the component receivbes new proporties...
        //deprecated
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        return {
            test: 'something'
        };
    }

    static getSnapShotBeforeUpdate(nextProps, nextState) {
        //
    }

    render() {
        return(
            <div>
                <h1> Test component </h1>
            </div>
        )
    }
}

export default Test;