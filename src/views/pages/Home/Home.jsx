import React from 'react';
import { useEffect,useReducer,useState } from 'react';
import { useParallax, useParallaxController, Parallax } from 'react-scroll-parallax';
import Form from 'react-bootstrap/Form';
import Button  from "react-bootstrap/Button"
import constants from '../../../assets/constants';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Home.css';

const Home = () => {

    const [values, updateValue] = useReducer(
        (state, update) => ({ ...state, ...update }),
        {
            experiencia: '',
            presupuesto:'',
            altura:'',
            uso:'',
            cilindrada:'',
            costo:'',
            peso:'',
            motor:'',
            fin:'',
            cilindros:'',
            potencia:10,
            torque:10,
            postura:'',
            diamertroCilindro:50,
            carreraCilindro:10,
        }
    );

    const [formerrors, setFormErrors] = useState({});

    const parallaxController = useParallaxController();

    useEffect(() => {
        parallaxController.update();
    }, []);
    
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        let errors = {};

        if (validate(values)) {

        }
    }

    const validate = () =>{
        let errors = {};
        console.log('datos',values)
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            {/* panel introduccion */}
            <div className='section-intro'>
                <Parallax speed={10}>
                    <div className='section-intro-title'>
                        Motos
                    </div>
                    <div className='section-intro-sub-title'>
                        EL vehículo para VOS
                    </div>
                </Parallax>
            </div>
            {/* Formulario */}
            <div className='section-form'>
                <Form onSubmit={handleSubmit}>
                    {/* datos del usuario */}
                    <Row>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formPresupuesto">
                                <Form.Label column>Presupuesto</Form.Label>
                                <Col >
                                    <Form.Control
                                        type="number"
                                        value={values.presupuesto}
                                        onChange={(event)=>updateValue({presupuesto:event.target.value})}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formExperiancia">
                                <Form.Label column >Cuanta experiancia tenes</Form.Label>
                                <Col >
                                    <Form.Select value={values.experiencia} onChange={(event)=>updateValue({experiencia:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.VALORES_3.ALTA}>{constants.VALORES_3.ALTA}</option>
                                        <option value={constants.VALORES_3.MEDIA}>{constants.VALORES_3.MEDIA}</option>
                                        <option value={constants.VALORES_3.BAJA}>{constants.VALORES_3.BAJA}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group as={Row} className="mb-3" controlId="formAltura">
                            <Form.Label column>Altura</Form.Label>
                            <Col >
                                <Form.Select value={values.altura} onChange={(event)=>updateValue({altura:event.target.value})} aria-label="Default select example">
                                    <option value=''></option>
                                    <option value={constants.VALORES_3.ALTA}>{constants.VALORES_3.ALTA}</option>
                                    <option value={constants.VALORES_3.MEDIA}>{constants.VALORES_3.MEDIA}</option>
                                    <option value={constants.VALORES_3.BAJA}>{constants.VALORES_3.BAJA}</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group as={Row} className="mb-3" controlId="formUso">
                            <Form.Label column >Uso</Form.Label>
                            <Col >
                                <Form.Select value={values.uso} onChange={(event)=>updateValue({uso:event.target.value})} aria-label="Default select example">
                                    <option value=''></option>
                                    <option value={constants.USOS.RECREATIVO}>{constants.USOS.RECREATIVO}</option>
                                    <option value={constants.USOS.LABORAL}>{constants.USOS.LABORAL}</option>
                                    <option value={constants.USOS.TRANSPORTE}>{constants.USOS.TRANSPORTE}</option>
                                    <option value={constants.USOS.COMPETICIOM}>{constants.USOS.COMPETICIOM}</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        </Col>
                    </Row>

                    {/* datos de la moto */}
                    <Row>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formCilindrada">
                                <Form.Label column >Cilindrada del Motor</Form.Label>
                                <Col >
                                    <Form.Select value={values.cilindrada} onChange={(event)=>updateValue({cilindrada:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.VALORES_3.ALTA}>{constants.VALORES_3.ALTA}</option>
                                        <option value={constants.VALORES_3.MEDIA}>{constants.VALORES_3.MEDIA}</option>
                                        <option value={constants.VALORES_3.BAJA}>{constants.VALORES_3.BAJA}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formCosto">
                                <Form.Label column >Costo</Form.Label>
                                <Col >
                                    <Form.Select value={values.costo} onChange={(event)=>updateValue({costo:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.VALORES_3.ALTA}>{constants.VALORES_3.ALTA}</option>
                                        <option value={constants.VALORES_3.MEDIA}>{constants.VALORES_3.MEDIA}</option>
                                        <option value={constants.VALORES_3.BAJA}>{constants.VALORES_3.BAJA}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formPeso">
                                <Form.Label column >Peso</Form.Label>
                                <Col >
                                    <Form.Select value={values.peso} onChange={(event)=>updateValue({peso:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.VALORES_3.ALTA}>{constants.VALORES_3.ALTA}</option>
                                        <option value={constants.VALORES_3.MEDIA}>{constants.VALORES_3.MEDIA}</option>
                                        <option value={constants.VALORES_3.BAJA}>{constants.VALORES_3.BAJA}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formMotor">
                                <Form.Label column>Motor</Form.Label>
                                <Col >
                                    <Form.Select value={values.motor} onChange={(event)=>updateValue({motor:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.MOTOR.ELECTRICO}>{constants.MOTOR.ELECTRICO}</option>
                                        <option value={constants.MOTOR.COMBUSTION}>{constants.MOTOR.COMBUSTION}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formFin">
                                <Form.Label column>Fin</Form.Label>
                                <Col >
                                    <Form.Select value={values.fin} onChange={(event)=>updateValue({fin:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.FIN.ROAD}>{constants.FIN.ROAD}</option>
                                        <option value={constants.FIN.OFF_ROAD}>{constants.FIN.OFF_ROAD}</option>
                                        <option value={constants.FIN.MIXTO}>{constants.FIN.MIXTO}</option>
                                        <option value={constants.FIN.SPORT}>{constants.FIN.SPORT}</option>
                                        <option value={constants.FIN.CIUDAD}>{constants.FIN.CIUDAD}</option>
                                        <option value={constants.FIN.CROSS}>{constants.FIN.CROSS}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formCilindros">
                                <Form.Label column>Cilindros</Form.Label>
                                <Col >
                                    <Form.Select value={values.cilindros} onChange={(event)=>updateValue({cilindros:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={0}>{0}</option>
                                        <option value={1}>{1}</option>
                                        <option value={2}>{2}</option>
                                        <option value={3}>{3}</option>
                                        <option value={4}>{4}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formPotencia">
                                <Form.Label column>Potencia</Form.Label>
                                <Col >
                                    <Form.Control
                                        type="number"
                                        value={values.potencia}
                                        onChange={(event)=>updateValue({potencia:event.target.value})}
                                        min={10}
                                        max={250}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formTorque">
                                <Form.Label column>Torque</Form.Label>
                                <Col >
                                    <Form.Control
                                        type="number"
                                        value={values.torque}
                                        onChange={(event)=>updateValue({torque:event.target.value})}
                                        min={10}
                                        max={130}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formPostura">
                                <Form.Label column >Postura de Manejo</Form.Label>
                                <Col >
                                    <Form.Select value={values.postura} onChange={(event)=>updateValue({postura:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.POSTURA.RELAJADA}>{constants.POSTURA.RELAJADA}</option>
                                        <option value={constants.POSTURA.NEUTRA}>{constants.POSTURA.NEUTRA}</option>
                                        <option value={constants.POSTURA.AGRESIVA}>{constants.POSTURA.AGRESIVA}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formDiamtros">
                                <Form.Label column>Diametro de Cilindro</Form.Label>
                                <Col >
                                    <Form.Control
                                        type="number"
                                        value={values.diamertroCilindro}
                                        onChange={(event)=>updateValue({diamertroCilindro:event.target.value})}
                                        min={50}
                                        max={175}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="formCarreraCilindro">
                                <Form.Label column>Carrera de Cilindro</Form.Label>
                                <Col >
                                    <Form.Control
                                        type="number"
                                        value={values.carreraCilindro}
                                        onChange={(event)=>updateValue({carreraCilindro:event.target.value})}
                                        min={10}
                                        max={80}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="justify-content-md-end">
                        <Col md="auto">
                            <Form.Group controlId="formSubmit">
                                <Button variant="primary" type="submit">
                                    Mandar Datos
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default Home;