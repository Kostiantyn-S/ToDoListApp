import {React, Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Autorization.module.css';
import Header from '../Header/Header';

export default class Autorization extends Component {

    render() {
        return (
            <Form className={styles.Form}>
                <Header header={"ToDo App Auth"}/>
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
                <Button variant="primary" onClick={this.onLogin}>Login</Button>
                <div className={styles.Or}>or</div>
                <Button variant="primary" onClick={this.props.showReg}>Registration</Button>
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

    onLogin = (e) => {
        let key;

        for(let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            if (key === this.email && this.verifyPassword(key, this.password)) {
                this.props.logInTrue(key);
                return;
            }
        }

        alert("You entered an incorrect e-mail or password");
    }

    verifyPassword = (key, password) => {
        if(JSON.parse(localStorage.getItem(key)).password === password) return true
        else return false;
    }
}