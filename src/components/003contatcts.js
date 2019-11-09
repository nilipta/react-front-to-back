import React, { Component } from 'react';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contacts : [
                {
                    name : 'nilipta',  
                    email : 'nilipta@gmail.com',
                    phone : "9423734601"
                },
                {
                    name : 'mamuni',  
                    email : 'mamuni@gmail.com',
                    phone : "9423734602"
                },
                {
                    name : 'abhilipsa',  
                    email : 'abhilipsa@gmail.com',
                    phone : "9423734603"
                },
            ]
        }
    }

    render() {

        const { contacts } = this.state;

        return(
            <div>
                { contacts.map( contact => (
                    <h1> {contact.name} </h1>
                ))}
            </div>
        )
    };
}

export default Contacts;