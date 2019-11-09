import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state= {

    };

    onShowClick = (id) => { // arrow function is required for this keyword work in costum function
        // console.log(argument.target);
        console.log(id); //if we pass name it will print name from click event
    }

    render() {
        const { name, email, phone } = this.props.contact; //passed from contatcs 
    return (
            <div className="card card-body mb-3">
                <h4> {name} <i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-down"/> 
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email} </li>
                    <li className="list-group-item">Phone : {phone} </li>
                </ul>
            </div>
        );
    }
  }

Contact.propTypes = {
    contact: PropTypes.object.isRequired //coz here only icoming contact
};
  
export default Contact;