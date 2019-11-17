import React, { Component } from 'react';

class Test extends Component {

    state = {
        title: '',
        body:''
    };

    componentDidMount() {
        console.log('fetching....');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                title: data.title,
                body: data.body
                })    
            }
        );
    }

    // componentWillMount() {
    //     console.log("component is goint to be mounted....");
    //     //this fires Before this compinent is mounted...
    // }

    // componentDidUpdate() {
    //     //if state is changed in that component
    // }

    // componentWillUpdate() {
    //     //this is before the state is updated..
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     //when the component receivbes new proporties...
    //     //deprecated
    // }

    // static getDerivedStateFromProps(nextProps, nextState) {
    //     return {
    //         test: 'something'
    //     };
    // }

    // static getSnapShotBeforeUpdate(nextProps, nextState) {
    //     //
    // }

    render() {
        const { title, body } = this.state;
        return(
            <div>
                <h1> {title} </h1>
                <p> {body} </p>
            </div>
        )
    }
}

export default Test;