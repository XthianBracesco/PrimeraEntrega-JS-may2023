alert('Hola, bienvenido!');
alert('Le recuerdordamos que: \n-Al realizar una compra mayor a los 250 soles se le descontara el 25% ');

let inicio = prompt('¿QUE PRODUCTO BUSCAS? (se selecciona con los numeros): \n 1- Cases \n 2- Cargadores \n 3- Audifonos \n 4- Ninguno me voy \ningrese opcion: ');

let carrito = 0
let TotalCases = 0;      
let TotalCargadores = 0;
let TotalAudifonos = 0;

function Cases(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};

const Cases1 = new Cases('silicona', 'Vintage', 50);
const Cases2 = new Cases('silicona', 'Moderna', 45);
const Cases3 = new Cases('silicona', 'Ejecutive', 59);
const Cases4 = new Cases('tpu', 'Gamer', 60);
const Cases5 = new Cases('Metal', 'Rock', 50);


function Cargadores(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};

const Cargadores1 = new Cargadores('Pared', '15w', 120);
const Cargadores2 = new Cargadores('Pared', '15w', 140);
const Cargadores3 = new Cargadores('Pared', '15w', 150);
const Cargadores4 = new Cargadores('Pared', '10w', 100);
const Cargadores5 = new Cargadores('Inalambrico', '10w', 190);


function Audifonos(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};

const Audifonos1 = new Audifonos('cable', 'Stereo', 50);
const Audifonos2 = new Audifonos('cable', 'Stereo', 100);
const Audifonos3 = new Audifonos('BT', 'Stereo', 100);
const Audifonos4 = new Audifonos('BT', 'Stereo', 200);


const cas = [Cases1, Cases2, Cases3, Cases4]
const car = [Cargadores1, Cargadores2, Cargadores3, Cargadores4, Cargadores5, Cargadores6]
const aud = [Audifonos1, Audifonos2, Audifonos3, Audifonos4]


let num_cases = cas.length
let num_cargadores = car.length
let num_audifonos = aud.length


function general(parmanetro1, indice) {
    let respuesta = false
    let num_parametro = parmanetro1.length
    let muliplo = 0
    let Total = 0
    let producto = ''
    
    if(indice == 1) {
        producto = 'Cases'
    } else if(indice == 2) {
        producto = 'Cargadores'
    } else {
        producto = 'Audifonos'
    }
    
    while (respuesta == false) {

        for(let x = 0; x < num_parametro; x++){
            console.log('Numero de '+producto+' : '+ [x+1] +'\nMaterial  -  Tipo  -  Precio($) \n'  + parmanetro1[x].material +'    - '+ parmanetro1[x].tipo +'  -  $ '+ parmanetro1[x].precio);
        };
        
        
        op = parseInt(prompt('Escriba numero de '+producto+' que quiere: '));
        valorReal_op = op-1;
        alert( producto+' seleccionada: \nMaterial  -  Tipo  -  Precio($) \n'  + parmanetro1[valorReal_op].material +'    - '+ parmanetro1[valorReal_op].tipo +'  -  $ '+ parmanetro1[valorReal_op].precio);
        
        muliplo = parseInt(prompt('ingrese la cantidad deseada: '));
        if(Total == 0) {
            Total = parmanetro1[valorReal_op].precio * muliplo
        } 
        else {
            Total = Total + parmanetro1[valorReal_op].precio * muliplo
        };

        let i = prompt('Quieres agregar otro tipo de '+producto+'? : \nResponder si/no')
        
        if (i == 'si') {
            respuesta = false
        }
        else {
            respuesta = true
        };

    }

    return Total;

};


while(inicio !== 4) {

    if (inicio == 4) {
        break;
    }
    switch (inicio) {
        case '1':
            alert('Seleccionaste Cases');
            TotalCases = (general(cas, inicio));
            break;
        case '2':
            alert('Seleccionaste Cargadores');
            TotalCargadores = (general(car, inicio));
            break;
        case '3':
            alert('Seleccionaste Audifonos');
            TotalAudifonos = (general(aud, inicio));
            break;
        default:
            alert('opcion no valida');
            break;
    }

    inicio = prompt('VUELVE A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Cases \n 2- Cargadores \n 3- Audifonos \n 4- Fin de la compra \n 5- Ninguno me voy');
    
    
    if (inicio == 5) {
        inicio = 4
    };
};

if (inicio == 4) {
    carrito = TotalCases + TotalCargadores + TotalAudifonos;
    alert ('El total de su compra es de: S/.' + carrito)
};

if (carrito >= 250) {
    let descuento = carrito * 0.25
    let preciofinal = carrito - descuento
    alert ('como su compra supera los S/.250 se le aplicará un descuento, el precio final es de: S/.' + preciofinal)
};

alert('Que tenga buen dia!')