
const crearReglasDeMotos = (engine) => {
    //R1
    CrearReglaSimple(engine, 'Recreativo', 'Alta', 'Alta', 'MT-10, CB1000R, Diavel 1200, H2', 'Al tener alto presupuesto y alta experiencia para uso recreativo cualquier modelo esta permitido sin limite de HP. Basicamente va a depender de los gustos personales de cada usuario.');
    //R2
    CrearReglaSimple(engine, 'Recreativo', 'Alta', 'Medio', '700 CLX, 650NK, 752S, TNT600, Interceptor 650, Continental 650, MT07', 'alta experiencia, se busca lo mas divertido con un presupuesto medio.');
    //R3
    CrearReglaSimple(engine, 'Recreativo', 'Alta', 'Bajo', '400NK, 302S, 500R, Dominar 400', 'alta experiencia, se busca lo mas divertido posible con un presupuesto bajo.');
    //R4
    CrearReglaSimple(engine, 'Recreativo', 'Medio', 'Alta', 'MT-09, XSR900, GSX750, Z900, Z900RS, 701 Supermoto, DUKE 790, Hypermotard 950', 'Alto presupuesto, experiencia media, se busca algo que tenga como mucho 120 HP sin importar su precio.');
    //R5
    CrearReglaSimple(engine, 'Recreativo', 'Medio', 'Medio', '700 CLX, 650NK, 752S, TNT600, Vitpilen 701, Svartpilen 701, Z650, MT-07, XSR700', 'Experiencia media, se busca algo que tenga como mucho 120 HP con un presupuesto bajo.');
    //R6
    CrearReglaSimple(engine, 'Recreativo', 'Medio', 'Bajo', '400NK, 302S, 500R, CBR300, CB300R, Dominar 400', 'Experiencia media, se busca algo que tenga como mucho 120 HP con un presupuesto bajo.');
    //R7
    CrearReglaSimple(engine, 'Recreativo', 'Baja', 'Alta', 'DUKE 390, MT-03, Ninja 400, Z400, CB500F, YZF-R3, Svartpilen 401, Vitpilen 401', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, sin importar su precio, por lo que se apunta a las motos mas premium de este segmento.');
    //R8
    CrearReglaSimple(engine, 'Recreativo', 'Baja', 'Medio', '400NK, 302S, 500R, CBR300, CB300R, Duke 250, Dominar 400', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, con un presupuesto medio.');
    //R9
    CrearReglaSimple(engine, 'Recreativo', 'Baja', 'Bajo', 'Rouser 200, DUKE 200, CB250, Svartpilen 200, 300NK, 300R, LEONCINO 250, FZ25, Dominar 250', 'Al tener baja experiencia, se buscan motos que tengan a lo sumo 50 HP, con un presupuesto bajo.');
    //R10
    CrearReglaSimpleSinExperiencia(engine, 'Competicion', 'Alta', 'YZF-R1, CBR1000RR, ZX10R, Panigale V4, S1000RR, YZ450F, CRF450R, KX450, 350 SX, FE 450, RMZ450, TE 300 (2T)', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico.');
    //R11
    CrearReglaSimpleSinExperiencia(engine, 'Competicion', 'Medio', 'YZF-R6, ZX6R, 350 EXC, FE 250, Panigale V2, YZ250F, TE 250, CRF250R', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico. En este caso al ser de presupuesto medio, se asumo que se no se apunta a la maxima categoria de cada tipo de competicion, sino a una segunda categoria.');
    //R12
    CrearReglaSimpleSinExperiencia(engine, 'Competicion', 'Bajo', 'YZF-R3, NINJA 400, RC390, RC200, XTZ 250, XR250, KX250, YZ125', 'Para uso competitivo existen dos principales ramas, las motos de velocidad o las motos de tierra, ambas se encuentra en espectros separados, una apunta a mayor potencia con 4 cilidros y la otra a mayor torque con un monocilindrico. En este caso al ser de presupuesto medio, se asume que se apunta a una categoria de entrada a cada tipo de competicion.');
    //R13
    CrearReglaSimpleSinExperiencia(engine, 'Laboral', 'Alta', 'moFZ 160, XR190, CB 190, XTZ 125, 180S, NMAX, PCX150to12', 'Las motos para uso laboral estan asociadas inherentemente al bajo costo de mantenimiento, pero al tener presupuesto alto, se busca tener la mayor comodidad posible en la moto.');
    //R14
    CrearReglaSimpleSinExperiencia(engine, 'Laboral', 'Medio', 'YBR 125, XR150, TNT15, GLH150', 'Las motos para uso laboral estan asociadas inherentemente al bajo costo de mantenimiento, pero al tener presupuesto medio, se busca tener la mayor comodidad posible en la moto con un presupuesto medio.');
    //R15
    CrearReglaSimpleSinExperiencia(engine, 'Laboral', 'Bajo', 'AX100, GN125, Crypton, Wave, Boxer, V15', 'Se buscan las motos mas economicas, tanto para comprar como para mantener.');
    //R16
    CrearReglaSimple(engine, 'Viajes', 'Alta', 'Alta', 'moto15', '');
    //R17
    CrearReglaSimple(engine, 'Viajes', 'Alta', 'Medio', 'moto16', '');
    //R18
    CrearReglaSimple(engine, 'Viajes', 'Alta', 'Bajo', 'moto17', '');
    //R19
    CrearReglaSimple(engine, 'Viajes', 'Medio', 'Bajo', 'moto18', '');
    //R20
    CrearReglaSimple(engine, 'Viajes', 'Medio', 'Bajo', 'moto19', '');
    //R21
    CrearReglaSimple(engine, 'Viajes', 'Medio', 'Bajo', 'moto20', '');
   
    CrearReglaTroncal(engine, 'Recreativo', true, true)
    CrearReglaTroncal(engine, 'Competicion', false, true)
    CrearReglaTroncal(engine, 'Laboral', false, true)
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
                showExperience:false,
                showBudget:true,
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
