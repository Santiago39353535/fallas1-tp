import React from 'react';
import { useEffect,useReducer,useState } from 'react';
import { useParallax, useParallaxController, Parallax } from 'react-scroll-parallax';
import Form from 'react-bootstrap/Form';
import Button  from "react-bootstrap/Button"
import constants from '../../../assets/constants';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

import './Home.css';

const { Engine } = require('json-rules-engine')
const engine = new Engine()

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

    const [showExperience, setShowExperience] = useState(false);
    const [showBudget, setShowBudget] = useState(false);

    const [show, setShow] = useState(false);

    const [vehicle, setVehicle] = useState(null);
    const handleClose = () => {
        setShow(false);
        setVehicle(null);
    };

    const [formerrors, setFormErrors] = useState({});

    const parallaxController = useParallaxController();

    useEffect(() => {
        parallaxController.update();
    }, []);    

    var inicalizado = false; 
    
    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        let errors = {};

        if (validate(values)) {
            //Motor de reglas

            if (!inicalizado) { //Tal vez es mejor poner esto en el "starter" pero ahora no me puse a buscar si eso existe
                //              USO       Experiencia/Presupuesto       Moto/mensaje
                //R1
                CrearReglaSimple('Recreativo', 'Alta', 'alto', 'moto2', 'Al tener alto presupuesto y alta experiencia para uso recreativo cualquier modelo esta permitido sin limite de HP. Basicamente va a depender de los gustos personales de cada usuario.');
                //R2
                CrearReglaSimple('Recreativo', 'Alta', 'Medio', 'moto2', 'alta experiencia, se busca lo mas divertido con un presupuesto medio.');
                //R3
                CrearReglaSimple('Recreativo', 'Alta', 'bajo', 'moto3', 'alta experiencia, se busca lo mas divertido posible con un presupuesto bajo.');
                //R4
                CrearReglaSimple('Recreativo', 'media', 'alto', 'moto4', 'Alto presupuesto, experiencia media, se busca algo que tenga como mucho 120 HP sin importar su precio.');
                //R5
                CrearReglaSimple('Recreativo', 'media', 'bajo', 'moto5', 'Experiencia media, se busca algo que tenga como mucho 120 HP con un presupuesto bajo.');
                //R6
                CrearReglaSimple('Recreativo', 'Baja', 'alto', 'moto6', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, sin importar su precio, por lo que se apunta a las motos mas premium de este segmento.');
                //R7
                CrearReglaSimple('Recreativo', 'Baja', 'Medio', 'moto7', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, con un presupuesto medio.');
                //R8
                CrearReglaSimple('Recreativo', 'Baja', 'bajo', 'moto8', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, con un presupuesto bajo.');
                //R9
                CrearReglaSimple('Recreativo', 'Alta', 'alto', 'moto9', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico.');
                //R10
                CrearReglaSimple('Recreativo', 'Alta', 'Medio', 'moto10', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico. En este caso al ser de presupuesto medio, se asumo que se no se apunta a la maxima categoria de cada tipo de competicion, sino a una segunda categoria.');
                //R11
                CrearReglaSimple('Recreativo', 'Alta', 'bajo', 'moto11', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico. En este caso al ser de presupuesto medio, se asume que se apunta a una categoria de entrada a cada tipo de competicion.');
                //R12
                CrearReglaSimpleSinExperiencia('Laboral', 'alto', 'moto12', 'Las motos para uso laboral estan asociadas inherentemente al bajo costo de mantenimiento, pero al tener presupuesto alto, se busca tener la mayor comodidad posible en la moto.');
                //R13
                CrearReglaSimpleSinExperiencia('Laboral', 'Medio', 'moto13', 'Las motos para uso laboral estan asociadas inherentemente al bajo costo de mantenimiento, pero al tener presupuesto medio, se busca tener la mayor comodidad posible en la moto con un presupuesto medio.');
                //R14
                CrearReglaSimpleSinExperiencia('Laboral', 'bajo', 'moto14', 'Se buscan las motos mas economicas, tanto para comprar como para mantener.');
                //R15
                CrearReglaSimple('Viajes', 'Alta', 'alto', 'moto15', '');
                //R16
                CrearReglaSimple('Viajes', 'Alta', 'Medio', 'moto16', '');
                //R17
                CrearReglaSimple('Viajes', 'Alta', 'bajo', 'moto17', '');
                //R18
                CrearReglaSimple('Viajes', 'media', 'bajo', 'moto18', '');
                //R19
                CrearReglaSimple('Viajes', 'media', 'bajo', 'moto19', '');
                //R20
                CrearReglaSimple('Viajes', 'media', 'bajo', 'moto20', '');

                CrearReglaTroncal('Recreativo')

                inicalizado = true;
            }

            var facts = { experiencia: values.experiencia,
                presupuesto: "alto", // values.presupuesto,
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

            if( events.length > 0) {
                const firstElement = events[0]
                setShowExperience(firstElement.params.showExperience)
                setShowBudget(firstElement.params.showBudget)
                debugger
                if(firstElement.params.opcion){
                    setVehicle(firstElement)
                    setShow(true);
                }
            }

            debugger
        }

        function CrearReglaTroncal(uso) {
            engine.addRule({
                conditions: {
                    all: [
                        {
                            fact: 'uso',
                            operator: 'equal',
                            value: uso
                        },
                    ]
                },
                event: {
                    type: 'message',
                    params: {
                        opcion: null,
                        motivo: null,
                        showExperience:true,
                        showBudget:true,
                    }
                }
            });
        }

        function CrearReglaSimple(uso, experiencia, presupuesto, moto, mensaje) {
            engine.addRule({
                conditions: {
                    all: [{
                        fact: 'uso',
                        operator: 'equal',
                        value: uso
                    },
                    {
                        fact: 'experiencia',
                        operator: 'equal',
                        value: experiencia
                    },
                    {
                        fact: 'presupuesto',
                        operator: 'equal',
                        value: presupuesto
                    }]
                },
                event: {
                    type: 'message',
                    params: {
                        opcion: moto,
                        motivo: mensaje,
                        showExperience:true,
                        showBudget:true,
                    }
                }
            });
        }

        function CrearReglaSimpleSinExperiencia(uso, experiencia, presupuesto, moto, mensaje) {
            engine.addRule({
                conditions: {
                    all: [{
                        fact: 'uso',
                        operator: 'equal',
                        value: uso
                    },
                    {
                        fact: 'presupuesto',
                        operator: 'equal',
                        value: presupuesto
                    }]
                },
                event: {
                    type: 'message',
                    params: {
                        opcion: moto,
                        motivo: mensaje
                    }
                }
            });
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
                            <Form.Group as={Row} className="mb-3" controlId="formUso">
                                <Form.Label column >Uso</Form.Label>
                                <Col >
                                    <Form.Select value={values.uso} onChange={(event)=>updateValue({uso:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.USOS.RECREATIVO}>{constants.USOS.RECREATIVO}</option>
                                        <option value={constants.USOS.LABORAL}>{constants.USOS.LABORAL}</option>
                                        {/* <option value={constants.USOS.TRANSPORTE}>{constants.USOS.TRANSPORTE}</option> */}
                                        <option value={constants.USOS.COMPETICIOM}>{constants.USOS.COMPETICIOM}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        {showBudget?<Col>
                            <Form.Group as={Row} className="mb-3" controlId="formPresupuesto">
                                <Form.Label column>Presupuesto</Form.Label>
                                <Col >
                                    {/* <Form.Control
                                        type="number"
                                        value={values.presupuesto}
                                        onChange={(event)=>updateValue({presupuesto:event.target.value})}
                                    /> */}
                                    <Form.Select value={values.presupuesto} onChange={(event)=>updateValue({presupuesto:event.target.value})} aria-label="Default select example">
                                        <option value=''></option>
                                        <option value={constants.VALORES_3.ALTA}>{constants.VALORES_3.ALTA}</option>
                                        <option value={constants.VALORES_3.MEDIA}>{constants.VALORES_3.MEDIA}</option>
                                        <option value={constants.VALORES_3.BAJA}>{constants.VALORES_3.BAJA}</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>:null}
                        {showExperience?<Col>
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
                        </Col>:null}
                        {/* <Col>
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
                        </Col> */}
                    </Row>

                    {/* datos de la moto */}
                    {/* <Row>
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
                                <Form.Label column > </Form.Label>
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
                    </Row> */}
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Encontramos su Moto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Su moto es {vehicle?.params.opcion}. Por el siguiente motivo: {vehicle?.params.motivo}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home;