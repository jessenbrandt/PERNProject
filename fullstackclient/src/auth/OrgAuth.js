import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import OrgSignup from './OrgSignup';
import OrgLogin from './OrgLogin';
import './auth.css';

const Auth = (props) => {
    return (

        <div>
            <div className='bg'>
            <Container className="auth-container">
                <Row>
                    <Col md="6" className="signup-col">
                        <OrgSignup setToken={props.setToken} />
                    </Col>
                    <Col md="6" className="login-col">
                        <OrgLogin setToken={props.setToken} />
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default Auth;