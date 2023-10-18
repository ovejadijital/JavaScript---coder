//variables

let nombre = "pablo";
const apellido = "perez";
let edad = 30;
const sexo = "masculino";

//condicional

const var1 = "funciona";
const var2 = "en serio";

if (true){ 
 console.log(var1);
}

if (false) {
    console.log(var2);
}

//bucles

for (let i = 0; i < 10; i = i + 1) {
    console.log(i);

}
console.log("fin");

//funcion

function pedirNombre () {
    let name = prompt ("ingrese su nombre" );
    console.log( "nombre " + name);

}

pedirNombre();