import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { addUser } from '../reducer/userSlice';


class AddUserForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            gen: ""
        }
        console.log(this.props);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);

        this.setState({
            name: "",
            email: "",
            gen: ""
        })
        console.log("form submitted: ", this.state);
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text"
                     placeholder="Enter name"
                     value={this.state.name}
                      name='name'
                     onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                     placeholder="Enter email"
                     value={this.state.email}
                      name='email'
                     onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control type="number"
                     placeholder="Gen"
                     value={this.state.gen}
                      name='gen'
                     onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

const mapDispatch={
    addUser
}

export default connect(null, mapDispatch)(AddUserForm);
