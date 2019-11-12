import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/textInputGroup';
import uuid from 'uuid';

class AddContact extends Component {

    state = {
        name : '',
        email: '',
        phone : ''
    };

    onSubmit = (dispatch, arg) => {
        arg.preventDefault();
        const { name, email, phone } = this.state;
        const newConatct = {
            id: uuid(),
            name,
            email,
            phone
        } //watch how we ignored name: name, email: email.... 

        dispatch({type: 'ADD_CONTACT', payload: newConatct});
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    };

    onChange = (arg) => { this.setState({ [arg.target.name]: arg.target.value}); }
    
    render() {
        const {name, email, phone} = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                    <div className="card mb-3">
                        <div className="card-header"> Add Contact </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                <TextInputGroup 
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChange}
                                />

                                <TextInputGroup 
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email..."
                                    value={email}
                                    onChange={this.onChange}
                                />

                                <TextInputGroup 
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone..."
                                    value={phone}
                                    onChange={this.onChange}
                                />

                                <input type="submit" value="Add Contact" className="btn btn-block btn-primary"/>
                            </form>
                        </div>
                    </div>                
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;