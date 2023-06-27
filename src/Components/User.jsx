import React, { useState } from 'react';
import { Card, Button, Col, Modal } from 'react-bootstrap';
import EditUserForm from './EditUSerForm';
import {useDispatch} from 'react-redux'
import { deleteUser } from '../reducer/userSlice';

const User = ({user}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(user)

    const dispatch = useDispatch()
   
   
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUserForm 
                    closeModal={handleClose} 
                    user = {user} 
                    />
                    
                </Modal.Body>
            </Modal>

            <Col md="4" style={{ marginBottom: "1rem" }}>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Codetrain User</Card.Subtitle>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            <p>Email: {user.email}</p>
                            <p>Gen: {user.gen}</p>
                        </Card.Text>
                        <Button variant="primary" size='sm' onClick={handleShow}>Edit</Button>
                        <Button variant="danger" size='sm' onClick={() => handleDelete(user.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default User;