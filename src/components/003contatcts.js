import React, { Component } from 'react';
import Contact from './001contact';
import { Consumer } from './../context';

class Contacts extends Component {
        
    deleteContact = (id) => {
        // console.log(id);
        const {contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id); //filtering out the given id for delete

        this.setState( {
            contacts : newContacts
        }) // then setting the new state
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            { contacts.map( contact => (
                                <Contact 
                                key={contact.id}
                                contact={contact}
                                deleteClickHandler={this.deleteContact.bind(this,contact.id)}
                                /> //iterating & passing the id to delete in parent
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;