import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 import Users from './Components/Users';
 import AddUserForm from './Components/AddUserForm';

const App = () => {
  // constructor(props) {
  //   super(props);
  //   //this.state = {
   //    users: [
    //     {
    //       name: "Ahmed Zaky",
    //       email: "ahmedzaky@gmail.com",
    //       gen: 13,
    //       id: "0987656jkgjvjh"
    //     },
    //     {
    //       name: "Ali Abdul Basit",
    //       email: "aliabdulbasut@gmail.com",
    //       gen: 24,
    //       id: "kdio3554739s"
    //     },
    //     {
    //       name: "Abla Shika",
    //       email: "ablashika@gmail.ccom",
    //       gen: 10,
    //       id: "78474fdrs5773"
    //     }
     //  ]
    //  }
  // }

  // addNewUser = (user) => {
  //   user.id = Math.random().toString()
  //   this.setState({
  //     users: [...this.state.users, user]
  //   })
  // }
  // deleteUser = (id) => {
  //   let undeletedUsers = this.state.users.filter(user => user.id !== id);
  //   this.setState({
  //     users: undeletedUsers
  //   })
  // }

  // editUser = (id, updatedUser) => {
  //   this.setState({
  //     users: this.state.users.map(user => user.id === id ? updatedUser : user)
  //   })
  // }
  // render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
            <h4>Add Users</h4>
            <br />
              <AddUserForm 
              //addUser={this.addNewUser}
               />
            </Col>
            <Col>
            <h4>All Codetrain Users</h4>
            <br />
              <Users 
              // usersData={this.state.users}
                // deleteUser={this.deleteUser}
                // editUser={this.editUser} 
                />
            </Col>
          </Row>
        </Container>
      </>
    );
  // }
}

export default App;
