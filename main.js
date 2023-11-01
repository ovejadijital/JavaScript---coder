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

//objeto

const persona = {nombre:"pablo", edad:30, apellido:"perez", sexo:"masculino",}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.sexo);

//array

const array = [1,2];

//metodos

const numeros = [1, 2, 3, 4, 5, 6,]


numeros.forEach( (num)=> {

console.log(num);

}

)
