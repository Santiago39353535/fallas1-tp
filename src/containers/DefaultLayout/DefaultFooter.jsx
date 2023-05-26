import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Constants from '../../assets/constants';

import './layoutStyles.css';

const DefaultFooter = () => {
    return (
    <Container className='footerContainer' fluid style={{zIndex:10}}>
        <Row className="justify-content-md-center">
           <Col md="auto">
                <h2 className='footerTitle'>Cualquier duda con su compra contactenos a 4976-0845</h2>
           </Col>
        </Row>
    </Container>
    )
}

export default DefaultFooter