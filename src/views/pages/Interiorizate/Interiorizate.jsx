import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { Tooltip, Button } from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';

import './Interiorizate.css';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 600,
        fontSize: theme.typography.pxToRem(18),
        border: '1px solid #dadde9',
    },
}));

const Interiorizate = () => {

    const descripcionCilindrada = "Cilindrada es la denominación que se da a la suma del volumen utilizado para la combustión interna.";
    const descripcionMotor = "Por lo general se utiliza para determinar si un motor es de combustion interna o eléctrico.";
    const descripcionCilindros = "Se refiere a la cantidad de cilindros que posee el motor y ademas se especifica la disposición de los mismos, la cual puede variar a partir de dos cilindros, siendo las disposiciones mas comunes la disposición en V o la disposición en paralelo.";
    const descripcionPotencia = "Usualmente medida en caballos de fuerza (HP), la potencia está directamente relacionada a la velocidad máxima que puede alcanzar una moto.";
    const descripcionTorque = "Usualmente medida en Newton-metros (NM), el torque esta relacionado a que tan rapido una moto puede acelerar.";
    const descripcionSuspensiones = "Una suspension dura aumenta la estabilidad pero sacrifica el confort. Mientras que una suspension blanda sacrifica la estabilidad. Generalmente las motos enfocadas a la velocidad tendran suspensiones duras y las enfocadas a offroad/viajes tendran suspensiones blandas.";

    return (
        <Paper elevation={3}>
            <div style={{ padding: 20, fontFamily: 'serif' }}>
                <h4>
                    En esta pantalla encontrará información general sobre las distintas caracteristicas de una moto
                </h4>

                <br>
                </br>
                <h5>
                    La mayoría de las motos tendrán todas las caracteristicas descriptas a continuación, cada combinacion particular de caracteristicas dará un comportamiento específico a su moto.
                </h5>
                <h6>
                    Mueva el cursor sobre las distintas caracteristicas para aprender un poco mas
                </h6>
                <br></br>
                <HtmlTooltip style={{ marginBottom: 10 }} title={descripcionCilindrada} placement="right">
                    <Button variant="outlined" size="large">
                        Cilindrada
                    </Button>
                </HtmlTooltip>
                <br></br>
                <HtmlTooltip style={{ marginBottom: 10 }} title={descripcionMotor} placement="right">
                    <Button variant="outlined" size="large">
                        Motor
                    </Button>
                </HtmlTooltip>
                <br></br>
                <HtmlTooltip style={{ marginBottom: 10 }} title={descripcionCilindros} placement="right">
                    <Button variant="outlined" size="large">
                        Cilindros
                    </Button>
                </HtmlTooltip>
                <br></br>
                <HtmlTooltip style={{ marginBottom: 10 }} title={descripcionPotencia} placement="right">
                    <Button variant="outlined" size="large">
                        Potencia
                    </Button>
                </HtmlTooltip>
                <br></br>
                <HtmlTooltip style={{ marginBottom: 10 }} title={descripcionTorque} placement="right">
                    <Button variant="outlined" size="large">
                        Torque
                    </Button>
                </HtmlTooltip>
                <br></br>
                <HtmlTooltip style={{ marginBottom: 10 }} title={descripcionSuspensiones} placement="right">
                    <Button variant="outlined" size="large">
                        Suspensiones
                    </Button>
                </HtmlTooltip>
            </div>
        </ Paper>
    )
}


export default Interiorizate;
