//Traemos los elementos de nuestro HTML que se van a manipular 

//let -> Variable que cambia con el tiempo
//const -> No cambia en el tiempo 

const pantalla = document.getElementById('pantalla');
const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');

//inicializando la variable resultado, que va a cambiar segun la, suma, resta, multiplicacion y division
let resultado = 0;

//Funciones

// Declaración de funciones en js 

function  suma(){

    // En js yo puedo convertir las variables de un tipo a otro, con un metodo - PARSE
    // el .value es para acceder al valor que ingreso en mi input
    // el .texteContent nos permite acceder al contenido de mi elemento HTML
    
    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    resultado = numero1 + numero2;
    pantalla.textContent = resultado;
    inputNumero1.value = '';
    inputNumero2.value = '';
} 
function  resta(){
    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    resultado = numero1 - numero2;
    pantalla.textContent = resultado;
    inputNumero1.value = '';
    inputNumero2.value = '';
} 
function  multiplicacion(){
    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    resultado = numero1 * numero2;
    pantalla.textContent = resultado;
    inputNumero1.value = '';
    inputNumero2.value = '';
} 
function  division(){
    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    //en progamación = es un simbolo de asignación
    resultado = numero1 / numero2;
    // Método en js para redondear decimales .tofixed  (los decimales que quiero )
    pantalla.textContent = resultado.toFixed(2);
    inputNumero1.value = '';
    inputNumero2.value = '';
} 


