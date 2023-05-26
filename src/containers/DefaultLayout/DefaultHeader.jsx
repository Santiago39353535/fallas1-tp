import React, {useEffect} from 'react';
import {
    Container, Nav,
    Navbar,
} from 'react-bootstrap';
import Constants from '../../assets/constants';
import { LoggedInState } from '../../services/Hooks/IsLoggedInHook';
import {useNavigate, Link} from 'react-router-dom';

import './layoutStyles.css';

const DefaultHeader = () => {
    const loggedInState = LoggedInState();
    const navigate = useNavigate();
    useEffect(()=>{
        loggedInState.updateLoginState();
    },[navigate.length])
    return (
    <Navbar bg="light" style={{zIndex:10}}>
        <Container>
            {/* <Navbar.Brand><Link className='headerLink' to={Constants.ROUTES.HOME}>Motos</Link></Navbar.Brand>
            <Nav>
                {!loggedInState.loggedIn && <Navbar.Brand><Link className='headerLink' to={Constants.ROUTES.LOGIN}>Login</Link></Navbar.Brand>}
                {!loggedInState.loggedIn && <Navbar.Brand><Link className='headerLink' to={Constants.ROUTES.SIGNUP}>Sign Up</Link></Navbar.Brand>}
            </Nav> */}
        </Container>
    </Navbar>
    )
}
export default DefaultHeader