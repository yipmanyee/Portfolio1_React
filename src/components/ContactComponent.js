import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);  
        this.handleLogin = this.handleLogin.bind(this);  
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`firstname: ${this.firstname.value} lastname: ${this.lastname.value}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <div className="col">
                        <img src="/assets/images/K_Front.jpg" className="img-fluid" alt="front"></img>
                    </div>        
                </div>
            </div>
            <hr/>

            <div className="col">
                <Button onClick={this.toggleModal} color="success" >Enquiry</Button>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Enqiury</ModalHeader>
            <ModalBody>
            <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="firstname">First Name</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={input => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input type="text" id="lastname" name="lastname"
                                    innerRef={input => this.lastname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phone">Phone</Label>
                                <Input type="phone" id="phone" name="phone"
                                    innerRef={input => this.phone = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email"
                                    innerRef={input => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="date">Move In Date</Label>
                                <Input type="date" id="date" name="date" 
                                    innerRef={input => this.date = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message">Message</Label>
                                <Input type="message" id="message" name="message" rows="6"
                                    innerRef={input => this.phone = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="success">submit</Button>
                        </Form>
            </ModalBody>
            </Modal>    

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Address</h5>
                    <address>
                        <a href="https://www.bing.com/maps?q=10817+Kendrick+St+SW+Lakewood%2C+WA+98499+U.S.A.&cvid=96208f845b924bf69d2ece6231f6a789&aqs=edge..69i57.287j0j1&pglt=171&FORM=ANNTA1&PC=HCTS">10817 Kendrick St SW<br />
                        Lakewood, WA 98499<br />
                        U.S.A.</a>
                        </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12533595160"><i className="fa fa-phone" /> 1-253-359-5160</a><br />
                    <a role="button" className="btn btn-link" href="mailto:kenmar.apartment@gmail.com"><i className="fa fa-envelope-o" /> kenmar.apartment@gmail.com</a>
                </div>
            </div>
        </div>
        );
    }

}

export default Contact;