import React, { Component } from 'react';
import Contact from './001contact';

class Contacts extends Component {
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

    deleteClickHandler = (id) => {
        // console.log(id);
        const {contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id); //filtering out the given id for delete

        this.setState( {
            contacts : newContacts
        }) // then setting the new state
    }

    render() {

        const { contacts } = this.state;

        return(
            <React.Fragment>
                { contacts.map( contact => (
                    <Contact 
                    key={contact.id}
                    contact={contact}
                    deleteClickHandler={this.deleteClickHandler.bind(this,contact.id)}
                    /> //iterating & passing the id to delete in parent
                ))}
            </React.Fragment>
        )
    };
}

export default Contacts;