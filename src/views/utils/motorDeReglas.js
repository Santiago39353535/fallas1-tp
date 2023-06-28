import { VALORES_3, USOS } from '../../assets/constants';

const crearReglasDeMotos = (engine) => {
    //R1
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.ALTA, VALORES_3.ALTA, '&#x2022; MT-10<br>&#x2022; CB1000R<br>&#x2022; Diavel 1200<br>&#x2022; H2', 'Al tener alto presupuesto y alta experiencia para uso recreativo cualquier modelo esta permitido sin limite de HP. Basicamente va a depender de los gustos personales de cada usuario.');
    //R2
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.ALTA, VALORES_3.MEDIA, '&#x2022; 700 CLX<br>&#x2022; 650NK<br>&#x2022; 752S<br>&#x2022; TNT600<br>&#x2022; Interceptor 650<br>&#x2022; Continental 650<br>&#x2022; MT07', 'alta experiencia, se busca lo mas divertido con un presupuesto medio.');
    //R3
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.ALTA, VALORES_3.BAJA, '&#x2022; 400NK<br>&#x2022; 302S<br>&#x2022; 500R<br>&#x2022; Dominar 400', 'alta experiencia, se busca lo mas divertido posible con un presupuesto bajo.');
    //R4
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.MEDIA, VALORES_3.ALTA, '&#x2022; MT-09<br>&#x2022; XSR900<br>&#x2022; GSX750<br>&#x2022; Z900<br>&#x2022; Z900RS<br>&#x2022; 701 Supermoto<br>&#x2022; DUKE 790<br>&#x2022; Hypermotard 950', 'Alto presupuesto, experiencia media, se busca algo que tenga como mucho 120 HP sin importar su precio.');
    //R5
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.MEDIA, VALORES_3.MEDIA, '&#x2022; 700 CLX<br>&#x2022; 650NK<br>&#x2022; 752S<br>&#x2022; TNT600<br>&#x2022; Vitpilen 701<br>&#x2022; Svartpilen 701<br>&#x2022; Z650<br>&#x2022; MT-07<br>&#x2022; XSR700', 'Experiencia media, se busca algo que tenga como mucho 120 HP con un presupuesto bajo.');
    //R6
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.MEDIA, VALORES_3.BAJA, '&#x2022; 400NK<br>&#x2022; 302S<br>&#x2022; 500R<br>&#x2022; CBR300<br>&#x2022; CB300R<br>&#x2022; Dominar 400', 'Experiencia media, se busca algo que tenga como mucho 120 HP con un presupuesto bajo.');
    //R7
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.BAJA, VALORES_3.ALTA, '&#x2022; DUKE 390<br>&#x2022; MT-03<br>&#x2022; Ninja 400<br>&#x2022; Z400<br>&#x2022; CB500F<br>&#x2022; YZF-R3<br>&#x2022; Svartpilen 401<br>&#x2022; Vitpilen 401', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, sin importar su precio, por lo que se apunta a las motos mas premium de este segmento.');
    //R8
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.BAJA, VALORES_3.MEDIA, '&#x2022; 400NK<br>&#x2022; 302S<br>&#x2022; 500R<br>&#x2022; CBR300<br>&#x2022; CB300R<br>&#x2022; Duke 250<br>&#x2022; Dominar 400', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, con un presupuesto medio.');
    //R9
    CrearReglaSimple(engine, USOS.RECREATIVO, VALORES_3.BAJA, VALORES_3.BAJA, '&#x2022; Rouser 200<br>&#x2022; DUKE 200<br>&#x2022; CB250<br>&#x2022; Svartpilen 200<br>&#x2022; 300NK<br>&#x2022; 300R<br>&#x2022; LEONCINO 250<br>&#x2022; FZ25<br>&#x2022; Dominar 250', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, con un presupuesto bajo.');
    //R10
    CrearReglaSimpleSinExperiencia(engine, USOS.COMPETICION, VALORES_3.ALTA, '&#x2022; YZF-R1<br>&#x2022; CBR1000RR<br>&#x2022; ZX10R<br>&#x2022; Panigale V4<br>&#x2022; S1000RR<br>&#x2022; YZ450F<br>&#x2022; CRF450R<br>&#x2022; KX450<br>&#x2022; 350 SX<br>&#x2022; FE 450<br>&#x2022; RMZ450<br>&#x2022; TE 300 (2T)', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico.');
    //R11
    CrearReglaSimpleSinExperiencia(engine, USOS.COMPETICION, VALORES_3.MEDIA, '&#x2022; YZF-R6<br>&#x2022; ZX6R<br>&#x2022; 350 EXC<br>&#x2022; FE 250<br>&#x2022; Panigale V2<br>&#x2022; YZ250F<br>&#x2022; TE 250<br>&#x2022; CRF250R', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico. En este caso al ser de presupuesto medio, se asumo que se no se apunta a la maxima categoria de cada tipo de competicion, sino a una segunda categoria.');
    //R12
    CrearReglaSimpleSinExperiencia(engine, USOS.COMPETICION, VALORES_3.BAJA, '&#x2022; YZF-R3<br>&#x2022; NINJA 400<br>&#x2022; RC390<br>&#x2022; RC200<br>&#x2022; XTZ 250<br>&#x2022; XR250<br>&#x2022; KX250<br>&#x2022; YZ125', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico. En este caso al ser de presupuesto medio, se asume que se apunta a una categoria de entrada a cada tipo de competicion.');
    //R13
    CrearReglaSimpleSinExperiencia(engine, USOS.LABORAL, VALORES_3.ALTA, '&#x2022; FZ 160<br>&#x2022; XR190<br>&#x2022; CB 190<br>&#x2022; XTZ 125<br>&#x2022; 180S<br>&#x2022; NMAX<br>&#x2022; PCX150', 'Las motos para uso laboral estan asociadas inherentemente al bajo costo de mantenimiento, pero al tener presupuesto alto, se busca tener la mayor comodidad posible en la moto.');
    //R14
    CrearReglaSimpleSinExperiencia(engine, USOS.LABORAL, VALORES_3.MEDIA, '&#x2022; YBR 125<br>&#x2022; XR150<br>&#x2022; TNT15<br>&#x2022; GLH150', 'Las motos para uso laboral estan asociadas inherentemente al bajo costo de mantenimiento, pero al tener presupuesto medio, se busca tener la mayor comodidad posible en la moto con un presupuesto medio.');
    //R15
    CrearReglaSimpleSinExperiencia(engine, USOS.LABORAL, VALORES_3.BAJA, '&#x2022; AX100<br>&#x2022; GN125<br>&#x2022; Crypton<br>&#x2022; Wave<br>&#x2022; Boxer<br>&#x2022; V15', 'Se buscan las motos mas economicas, tanto para comprar como para mantener.');
    //R16
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.ALTA, VALORES_3.ALTA, '&#x2022; SUPER TENERE<br>&#x2022; FJR 1300<br>&#x2022; VSTROM1050MT<br>&#x2022; Ninja 1000SX<br>&#x2022; S1000XR<br>&#x2022; R18<br>&#x2022; R1250GS<br>&#x2022; Multristrada 1260<br>&#x2022; Versys 1000<br>&#x2022; AFRICA TWIN', 'Se ofrece la gama mas alta de las motos viajeras');
    //R17
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.ALTA, VALORES_3.MEDIA, '&#x2022; Norden 901<br>&#x2022; MT-09 GT<br>&#x2022; TENERE 700<br>&#x2022; 790 ADVENTURE<br>&#x2022; Scrambler 800<br>&#x2022; Multristrada 950<br>&#x2022; F850GS<br>&#x2022; VSTROM 650MT', 'Alta experiencia, la mayor comodidad posible con un presupuesto medio');
    //R18
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.ALTA, VALORES_3.BAJA, '&#x2022; XRE300<br>&#x2022; Versys 300<br>&#x2022; 390 ADVENTURE<br>&#x2022; 250 ADVENTURE<br>&#x2022; 650MT<br>&#x2022; 650GT<br>&#x2022; 800MT<br>&#x2022; TRK502<br>&#x2022; 650DS<br>&#x2022; 500DS', 'Alta experiencia, la mayor comodidad posible con un presupuesto bajo');
    //R19
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.MEDIA, VALORES_3.ALTA, '&#x2022; REBEL 1100<br>&#x2022; Versys 650<br>&#x2022; Vulcan 900<br>&#x2022; Scrambler 400<br>&#x2022; TC MAX<br>&#x2022; CPX', 'Se busca lo mejor posible que aun sea manejable por alguien con experiencia media, por lo general, motos viajeras de menor peso para que sean mas manejables.');
    //R20
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.MEDIA, VALORES_3.MEDIA, '&#x2022; Vulcan S<br>&#x2022; Versys 650<br>&#x2022; KLR 650<br>&#x2022; LEONCINO 500<br>&#x2022; Ninja 650<br>&#x2022; NC750X<br>&#x2022; CB500X<br>&#x2022; REBEL 500<br>&#x2022; 502C<br>&#x2022; CUX', 'Se busca una gama intermedia que sea manejable por alguien con experiencia media, por lo general, motos viajeras de menor peso para que sean mas manejables.');
    //R21
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.MEDIA, VALORES_3.BAJA, '&#x2022; TRK251<br>&#x2022; REBEL 300<br>&#x2022; 300DS<br>&#x2022; 300 Rally<br>&#x2022; Avenger<br>&#x2022; IMPERIALE 400<br>&#x2022; Himalayan 400<br>&#x2022; TC', 'Se buscan los modelos que permitan realizar viajes largos con un presupuesto reducido y que sea manejable por alguien con experiencia media, por lo general, motos viajeras de menor peso para que sean mas manejables');

    // No hay moto
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.BAJA, VALORES_3.ALTA, 'No hay Moto que cumpla estos requerimientos', '');
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.BAJA, VALORES_3.MEDIA, 'No hay Moto que cumpla estos requerimientos', '');
    CrearReglaSimple(engine, USOS.TRANSPORTE, VALORES_3.BAJA, VALORES_3.BAJA, 'No hay Moto que cumpla estos requerimientos', '');


    CrearReglaTroncal(engine, USOS.RECREATIVO, true, true)
    CrearReglaTroncal(engine, USOS.COMPETICION, false, true)
    CrearReglaTroncal(engine, USOS.LABORAL, false, true)
    CrearReglaTroncal(engine, USOS.TRANSPORTE, true, true)
}

const CrearReglaSimple = (engine, uso, experiencia, presupuesto, moto, mensaje) => {
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
                showExperience: true,
                showBudget: true,
            }
        }
    });
}

const CrearReglaSimpleSinExperiencia = (engine, uso, presupuesto, moto, mensaje) => {
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
                motivo: mensaje,
                showExperience: false,
                showBudget: true,
            }
        }
    });
}

const CrearReglaTroncal = (engine, uso, showExperience, showBudget) => {
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
                showExperience: showExperience,
                showBudget: showBudget,
            }
        }
    });
}


export {
    crearReglasDeMotos,
}
