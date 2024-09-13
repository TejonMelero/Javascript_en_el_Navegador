// querySelector
const heading = document.querySelector('.header__texto h2')//0 o 1 elemento
heading.textContent='Nuevo Heading';
console.log(heading);


//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces);


//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

//Agregar el href
nuevoEnlace.hfref = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent =  'Un nuevo enlace';

//Agregar la clase
nuevoEnlace.classList.add('navegacion_enlace');

//Agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);



//Eventos

console.log(1);

window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log (2);
});

window.onload = function(){
console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){//Solo espera por el HTML, pero no espera CSS o imagenes
console.log(4);
});

console.log(5);

window.onscroll = function(){
    console.log('scrolling.....');
}


//Seleccionar elementos y asociar un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();
    
    //Validar un formulario
    console.log('enviando formulario');
});


//Eventos de los inputs y textarea

const datos ={
    nombre:'',
    email:'',
    mensaje:'',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

//El evento de Submit
formulario.addEventListener('Submit', function(evento){
    evento,preventDefault();


//Validar un formulario
const{ nombre,email,mensaje}=datos;
if (nombre===''|| email===''||mensaje===''){
    mostrarError('Todos los campos son obligatorios');
    return; //Corta la ejecución
}
//Enviar el formulario
console.log('Enviando Formulario');
});

function leerTexto(e){
    //
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

//Muestra un error en pantalla

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //Desaparezca el mensaje a los 5 segundos

    setTimeout(()=>{
        error.remove();
    },5000);
}