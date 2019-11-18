import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Consumer } from '../../context';

class Contact extends Component {
    state= {
        showContactInfo: false
    };

    onShowClick = (id) => { // arrow function is required 
        this.setState({showContactInfo:!this.state.showContactInfo}); //toggling display
    }

    onDeleteClick = async(id, dispatch) => {
    
    try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id});
        //we are not getting anything back....so no await variable
        }
        catch(e) {
            dispatch({ type: 'DELETE_CONTACT', payload: id});
        } //coz this is fake API...
    }

    render() {
        const { id, name, email, phone } = this.props.contact; //passed from contatcs 
        const {showContactInfo } = this.state;
    return (

        <Consumer>
            { value => {
                const { dispatch } = value;
                return(
                    <div className="card card-body mb-3">
                
                    <h4> 
                        {name} 
                        
                        <i onClick={this.onShowClick} className="fas fa-sort-down"
                        style={{cursor: 'pointer'}}/> 
                        
                        <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}/>
                    </h4>
                
                    {showContactInfo ? ( //toggling display on condition
                        <ul className="list-group">
                            <li className="list-group-item">Email: {email} </li>
                            <li className="list-group-item">Phone : {phone} </li>
                        </ul>
                    ) : null }

                    </div>  
                )
            } }
        </Consumer>

            
        );
    }
  }

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};
  
export default Contact;