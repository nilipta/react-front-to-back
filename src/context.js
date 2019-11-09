import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type)
    {
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}

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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
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