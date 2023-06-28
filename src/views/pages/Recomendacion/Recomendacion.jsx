import React from 'react';
import { useEffect, useReducer, useState } from 'react';
import { useParallaxController } from 'react-scroll-parallax';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import constants from '../../../assets/constants';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { crearReglasDeMotos } from '../../utils/motorDeReglas'
import { Paper } from '@mui/material';

import './Recomendacion.css';

const { Engine } = require('json-rules-engine')
const engine = new Engine()

crearReglasDeMotos(engine);

const Recomendacion = () => {

    const [values, updateValue] = useReducer(
        (state, update) => ({ ...state, ...update }),
        {
            experiencia: '',
            presupuesto: '',
            altura: '',
            uso: '',
            cilindrada: '',
            costo: '',
            peso: '',
            motor: '',
            fin: '',
            cilindros: '',
            potencia: 10,
            torque: 10,
            postura: '',
            diamertroCilindro: 50,
            carreraCilindro: 10,
        }
    );

    const [showExperience, setShowExperience] = useState(false);
    const [showBudget, setShowBudget] = useState(false);

    const [show, setShow] = useState(false);

    const [vehicle, setVehicle] = useState(null);
    const handleClose = () => {
        setShow(false);
        setVehicle(null);
    };

    const [, setFormErrors] = useState({});

    const parallaxController = useParallaxController();

    useEffect(() => {
        parallaxController.update();
    }, [parallaxController]);

    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        if (validate(values)) {
            appyEngine()
        }
    }

    const appyEngine = async () => {
        var facts = {
            experiencia: values.experiencia,
            presupuesto: values.presupuesto,
            altura: values.altura,
            uso: values.uso,
            cilindrada: values.cilindrada,
            costo: values.costo,
            peso: values.peso,
            motor: values.motor,
            fin: values.fin,
            cilindros: values.cilindros,
            potencia: values.potencia,
            torque: values.torque,
            postura: values.postura,
            diamertroCilindro: values.diamertroCilindro,
            carreraCilindro: values.carreraCilindro,
        }

        const { events } = await engine.run(facts)
        console.log(events)
        if (events.length > 0) {
            debugger
            const firstElement = events[0]
            setShowExperience(firstElement.params.showExperience)
            setShowBudget(firstElement.params.showBudget)
            if (firstElement.params.opcion) {
                setVehicle(firstElement)
                setShow(true);
            }
        }
    }

    const validate = () => {
        let errors = {};
        console.log('datos', values)
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        appyEngine()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.uso]);

    return (
        <Paper elevation={3} >
            {/* Formulario */}
            <div className='section-form'>
                <Form onSubmit={handleSubmit}>
                    {/* datos del usuario */}
                    <Row>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formUso">
                                <Form.Label column>Cuál será el uso principal?</Form.Label>
                                <Col >
                                    <Form.Select value={values.uso} onChange={(event) => {
                                        updateValue({ uso: event.target.value, experiencia: '', presupuesto: '' })
                                    }} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.USOS.RECREATIVO}>{constants.USOS.RECREATIVO}</option>
                                        <option value={constants.USOS.LABORAL}>{constants.USOS.LABORAL}</option>
                                        <option value={constants.USOS.TRANSPORTE}>{constants.USOS.TRANSPORTE}</option>
                                        <option value={constants.USOS.COMPETICION}>{constants.USOS.COMPETICION}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        {showBudget ? <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formPresupuesto">
                                <Form.Label column>Cual es su presupuesto?</Form.Label>
                                <Col >
                                    <Form.Select value={values.presupuesto} onChange={(event) => {
                                        updateValue({ presupuesto: event.target.value })
                                    }} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.VALORES_3.ALTA}>{constants.VALORES_3.ALTA}</option>
                                        <option value={constants.VALORES_3.MEDIA}>{constants.VALORES_3.MEDIA}</option>
                                        <option value={constants.VALORES_3.BAJA}>{constants.VALORES_3.BAJA}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col> : null}
                    </Row>
                    <Row>
                        {showExperience ? <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formExperiencia">
                                <Form.Label column >Cuanta experiencia manejando motos tienes?</Form.Label>
                                <Col >
                                    <Form.Select value={values.experiencia} onChange={(event) => updateValue({ experiencia: event.target.value })} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.VALORES_3.ALTA}>{constants.VALORES_3.ALTA}</option>
                                        <option value={constants.VALORES_3.MEDIA}>{constants.VALORES_3.MEDIA}</option>
                                        <option value={constants.VALORES_3.BAJA}>{constants.VALORES_3.BAJA}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col> : null}
                    </Row>
                    <Row className="justify-content-md-end">
                        <Col md="auto">
                            <Form.Group controlId="formSubmit">
                                <Button variant="primary" type="submit">
                                    Enviar Datos
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
            <Modal show={show} onHide={handleClose} className='modal-moto'>
                <Modal.Header closeButton>
                    <Modal.Title>Encontramos su Moto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Los modelos recomendados para usted son:</b>
                    <br></br>
                    <div dangerouslySetInnerHTML={{ __html: vehicle?.params.opcion }} />
                    {vehicle?.params.motivo&&<b>Por el siguiente motivo:</b>} {vehicle?.params.motivo}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </ Paper>
    )
}


export default Recomendacion;
