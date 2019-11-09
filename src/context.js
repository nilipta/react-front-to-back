import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts : [
            {
                id: 1,
                name : 'nilipta',  
                email : 'nilipta@gmail.com',
                phone : "9423734601"
            },
            {
                id: 2,
                name : 'mamuni',  
                email : 'mamuni@gmail.com',
                phone : "9423734602"
            },
            {
                id: 3,
                name : 'abhilipsa',  
                email : 'abhilipsa@gmail.com',
                phone : "9423734603"
            },
        ]
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;