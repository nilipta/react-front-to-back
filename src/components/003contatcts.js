import React, { Component } from 'react';
import Contact from './001contact';

class Contacts extends Component {

    // constructor() {
    //     super();
    //     this.state = {
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
        }
    //     }
    // }                //constructor not needs to only set state 

    render() {

        const { contacts } = this.state;

        return(
            <React.Fragment>
                { contacts.map( contact => (
                    <Contact 
                    key={contact.id}
                    contact={contact}
                    /> 
                ))}
            </React.Fragment>
        )
    };
}

export default Contacts;