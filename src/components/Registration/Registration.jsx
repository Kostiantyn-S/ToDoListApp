import {React, Component} from 'react';
import styles from './Registration.module.css';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';

export default class Registration extends Component {
    render() {
        return (
            <Form className={styles.Form}>
                <Header header={"Registration"}/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.checkEmail}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.checkPassword}/>
                </Form.Group>
                <Button variant="primary" onClick={this.onRegister}>Register</Button>
            </Form>     
        )
    }

    checkEmail = (e) => {
        this.emailField = e.target;
        this.email = e.target.value;
    }

    checkPassword = (e) => {
        this.passwordField = e.target;
        this.password = e.target.value;
    }

    onRegister = () => {
        if(!this.validate(this.email, this.password)) return;
        localStorage.setItem(this.email, JSON.stringify(this.getBaseState(this.email, this.password)));
        this.props.logInTrue(this.email);
        this.emailField.value = "";
        this.email = "";
        this.passwordField.value = "";
        this.password = "";
    }

    getBaseState = (email, password) => {
        return {
            email: email,
            password: password,
            tasks: [{
                text: "Your first task (example).",
                completed: false
            }],
            completed: true,
            uncompleted: true
        }
    }

    validate = (address, password) => {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(reg.test(String(address).toLowerCase()) === false) {
           alert('Please enter correct e-mail');
           return false;
        } else if(password.length > 10) {
            alert('Too long password, it must be not longer than 10 symbols.');
            return false;
        } else if(password.length < 2) {
            alert('Too short password, it must be longer than 1 symbols.');
            return false;
        }
        return true;
     }
}