// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const ComprarCondiccion = (condiccion1, condiccion2) => {
    var retorno = true;
    condiccion1.forEach(function(condiccion) {
        var fact = condiccion.fact;
        var value = condiccion.value;
       
        var aux = condiccion2.filter((x) => x.fact == fact);
        if (aux.lengt == 0 || aux[0].value != value) {
            retorno = false;
        }
    });
    return retorno;
}


const ComprarFacts = (condiccion1, valores) => {
    var retorno = true;
    condiccion1.forEach(function(condiccion) {
        var fact = condiccion.fact;
        var value = condiccion.value;
       
        var aux = valores[fact];
        if (aux != value) {
            retorno = false;
        }
    });
    return retorno;
}



export class Engine {
  constructor() {
    this.reglas = [];
    this.modelo = null;
  }


  addRule(tupla) {
      this.reglas.push(tupla);
  }
 
  run(facts) {
    if(!this.modelo){
        this.modelo = this.CrearArbol()
    }
   
    var retorno = null;
   
    this.modelo.hijos.forEach(function(rama) {
        var cumple = ComprarFacts(rama.fact, facts);
        if(cumple) {
            retorno = rama;
            rama.hijos.forEach(function(rama1) {
                var cumple1 = ComprarFacts(rama1.fact, facts);
                if(cumple1) {
                    retorno = rama1;
                    return;
                }
            });
        }
    });
   
    return retorno?.menseaje;
  }
 
  CrearArbol(){
      const raiz = new Nodo([], "raiz");
     
      var aux = this.reglas.filter((x) => x.conditions.all.length == 1);
      aux.forEach(function(elemento) {
          var aux2 = new Nodo(elemento.conditions.all, elemento.event);
          raiz.hijos.push(aux2);
      });


      aux = this.reglas.filter((x) => x.conditions.all.length != 1);
      aux.forEach(function(elemento) {
          var aux2 = new Nodo(elemento.conditions.all, elemento.event);
          var hoja = raiz.hijos.filter((x) => ComprarCondiccion(x.fact, elemento.conditions.all))
          hoja[0].hijos.push(aux2);
      });
     
      return raiz;
  }
}


class Nodo {
    constructor(fact, mensaje) {
        this.fact = fact;
        this.menseaje = mensaje;
        this.hijos = [];
    }
}
