import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { addUser } from '../reducer/userSlice';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid'



const AddUserForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gen, setGen] = useState("")

    const dispatch = useDispatch()
   
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {id: uuid(), name, email, gen}
        dispatch(addUser(newUser))
    }
    
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text"
                     placeholder="Enter name"
                     value={name}
                      name='name'
                     onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                     placeholder="Enter email"
                     value={email}
                      name='email'
                     onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control type="number"
                     placeholder="Gen"
                     value={gen}
                      name='gen'
                     onChange={(e) => setGen(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    
}

export default AddUserForm
