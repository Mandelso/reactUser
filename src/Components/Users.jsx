import React from 'react';
import { Container, Row } from 'react-bootstrap';
import User from './User';
import { useSelector } from 'react-redux';


const Users = () => {
    const data = useSelector((state)=>state.users.users)
   
    return (
        <Container>
            <Row>
                {
                    data.map((user) => {
                        return(
                            <div key={user.id}>
                                 <User user = {user}/>

                            </div>

                        ) 
                    })
                }
            </Row>
        </Container>
    );
}

export default Users;
