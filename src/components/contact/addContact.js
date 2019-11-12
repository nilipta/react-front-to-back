import React, { Component } from 'react';
import { Consumer } from '../../context';
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
    //these are not necessary as above line is doing all...
    // onNameChange = (arg) => { this.setState({name: arg.target.value}); }
    // onEmailChange = (arg) => { this.setState({email: arg.target.value}); }
    // onPhoneChange = (arg) => { this.setState({phone: arg.target.value}); }
    
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
                                <div className="card-group">
                                    <label htmlFor="name"> Name </label>
                                    <input 
                                        type="text"
                                        name="name"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="card-group">
                                    <label htmlFor="email"> Email </label>
                                    <input 
                                        type="email"
                                        name="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="card-group">
                                    <label htmlFor="phone"> Phone </label>
                                    <input 
                                        type="text"
                                        name="phone"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Phone ...."
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                </div>

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