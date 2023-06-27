import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { editUser } from '../reducer/userSlice';


const EditUserForm = ({closeModal ,user}) =>  {
        const [name, setName] = useState(user.name)
        const [email, setEmail] = useState(user.email)
        const [gen, setGen] = useState(user.gen)

        const dispatch = useDispatch()
        
       console.log(user)
        
        const handleSubmit = (e) => {
            e.preventDefault()
            const newUser = {id: user.id, name, email, gen}
            dispatch(editUser(newUser))
            closeModal()
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

export default EditUserForm;
