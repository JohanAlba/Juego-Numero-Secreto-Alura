let numeroSecreto = 0;
 let intentos = 0;
 let numerosSorteado = [];
 let numeroMaximo = 10; 
function asignarTextoElemento(elemento, texto) {
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
     return;
 }
 
function verificarIntento() {
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     if (numeroSecreto === numeroDeUsuario){
         asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos===1 ? 'vez':'veces'}`);
         document.getElementById('reiniciar').removeAttribute('disabled');
     }else{
         //El usuario no acerto.
         if(numeroSecreto > numeroDeUsuario){
             asignarTextoElemento('p','El numero es mayor');
         }else{
             asignarTextoElemento('p','El numero es menor');
         }
         intentos++;
         limpiarCaja();
     }
     return;
 }
function limpiarCaja(){
     document.querySelector('#valorUsuario').value ='';
 }
  
function generarNumeroSecreto() {
     let numerosGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numerosGenerado);
     console.log(numerosSorteado);
     if (numerosSorteado.length == numeroMaximo){
         asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        
     }else{ 
         if (numerosSorteado.includes(numerosGenerado)){
             return generarNumeroSecreto();
         }else{
             numerosSorteado.push(numerosGenerado);
             
             return numerosGenerado;
         } 
function condicionesIniciales() {
     asignarTextoElemento('h1','Juego del numero secreto');
     asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
     intentos = 1;
     numeroSecreto = generarNumeroSecreto();
         function reiniciarJuego(){
     //-Limpiar la caja
     limpiarCaja();
     //2-indicar mensaje de intervalo de numeros
     condicionesIniciales();
     //3-generar el numero aleatorio
     //4-deshabilitar el boto de nuevo juego
     //5-inicializar el nimero de intentos*/
     document.querySelector('#reiniciar').setAttribute('disabled','true');
    condicionesIniciales();
