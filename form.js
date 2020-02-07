const fs = require('fs')

const btnGuardar = document.getElementById('btn-guardar');
const btnIdentidad = document.getElementById('identidad');
const btnPrimer_Nombre = document.getElementById('primer nombre');
const btnPrimer_Apellido = document.getElementById('primer apellido');
const btnEdad = document.getElementById('edad');
const btnTelefono = document.getElementById('telefono');

btnGuardar.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Mostrando Mensajes en la Consola');
   
    fs.open("./alumnos.csv", 'a', function(err, archivo) {
        if (err){
            console.log("Error al abrir este archivo");
            console.log(error);
            return;
        }
        const linea = `${btnIdentidad.value}, ${btnPrimer_Nombre.value}, ${btnPrimer_Apellido.value},
        ${btnEdad.value}, ${btnTelefono.value}`
       fs.write(archivo, linea, function(err, written, string){
           if(err){
               console.log('Error Al Escribir estos Datos');
               console.log(error)
               return
           }
           console.log('Se Escribieron Los datos Exitosamente');
       }) 
    });
});