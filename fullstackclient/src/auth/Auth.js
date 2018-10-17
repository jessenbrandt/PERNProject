import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './auth.css';

const Auth = (props) => {
    return (

        <div >
            <div className='bg'>
            <Container className="auth-container">
                <Row>
                    <Col md="6" className="signup-col">
                        <Signup setToken={props.setToken} />
                    </Col>
                    <Col md="6" className="login-col">
                        <Login setToken={props.setToken} />
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default Auth;