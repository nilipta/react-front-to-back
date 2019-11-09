import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state= {
        showContactInfo: true
    };

    onShowClick = (id) => { // arrow function is required for this keyword work in costum function
        // this.state = {showContactInfo: false}; // I cant do that state is immutable i.e setState()
        this.setState({showContactInfo:!this.state.showContactInfo}); //toggling display
    }

    render() {
        const { name, email, phone } = this.props.contact; //passed from contatcs 
        const {showContactInfo } = this.state;
    return (
            <div className="card card-body mb-3">
                <h4> {name} <i onClick={this.onShowClick} className="fas fa-sort-down"/> 
                </h4>
                {showContactInfo ? ( //toggling display on condition
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email} </li>
                        <li className="list-group-item">Phone : {phone} </li>
                    </ul>
                ) : null}
            </div>
        );
    }
  }

Contact.propTypes = {
    contact: PropTypes.object.isRequired //coz here only icoming contact
};
  
export default Contact;