class asiento {

constructor (id, precio = 20) {
this.id = id;
this.comprado = true;
this.seleccionado = false;
this.precio = precio;
}

}

function seteartotalasientosseleccionados(asientosseleccionados) {
    
const totalasientosseleccionados = asientosseleccionados.reduce( (el) =>{
    
     return acc + el.precio;

}, 0);

spantotalasientosseleccionados.innerText = '$${totalasientosseleccionados}';


}


function comprarasientos(asiento) {
    asiento.comprado = true;

    const divasiento = document.getElementById( asiento-$,{siento,id});
    divasiento.classList.remove("seleccionado");
    divasiento.classList.add("comprado");
}

function buscarasientoenlista(id) {
    

    let asientoencontrado = null;

    for (const asiento of listadeasientos) {
        
      if (asiento !== null && asiento.id ===id) {
        asientoencontrado = asiento;
      }  
    }

    return asientoencontrado;

}


function obtenerasientoscomprados() {
    asientoscomprados = JSON.parse(localStorage.getItem("asientoscomprados")) || [];
for (const asientocomprados of asientoscomprados) {
    const asiento = buscarasientoenlista(asientocomprado.id);
    
    if (asiento !== null) {
        
      asiento.comprado = true;

    }

}
}


function comprarasientos() {
    
     const asientoscompradosyseleccionados = [
        ...asientoscomprados,
        ...asientosseleccionados,
     ];

      for (const asientoseleccionado of asientosseleccionados) {
        asientoseleccionado.comprado = true;
        
      }

      asientosseleccionados = [];

     localStorage.setItem("asientoscomprados", JSON.stringify(asientoscompradosyseleccionados));

     obtenerasientoscomprados();

seteartotalasientosseleccionados(asientosseleccionados);

}

function indiceasientoseleccionado(id) {
    return asientosseleccionados.findIndex( (el) => {
        return el.id === id;
    });

}

function seleccionarasiento(asiento) {
    if (asiento.comprado) {
        Swal.fire({
            title: 'asiento no disponible',
            text: 'este asiento esta comprado',
            icon: 'error',
            confirmButtonText: 'ok'
          })
    }


  
    divasiento.className += "seleccionado";

     const indexasientoseleccionado = indiceasientoseleccionado(siento.id);

    if (indexasientoseleccionado !== -1) {
      
        asiento.seleccionado = false;
        divasiento.classList.remove("seleccionado");

          asientosseleccionados.splice(indexasientoseleccionado, 1);
    } else{
        asiento.seleccionado = true;

       divasiento.classList.add("seleccionad");
      asientosseleccionados.push(asiento);
  
    }

 
}

function renderizarasientos(asientos) {
    const divasientos = document.getElementById("asientos");

divasientos.innerHTML = "";


for(const filadeasientos of asientos){

const divflex = document.createElement("div");
divflex.className = "d-flex align-items-center";

for(const siento of filadeasientos) {


  const divasiento = document.createElement("div");
  divasiento.className = "asiento";
  

if (asiento !== null) {
    divasiento.className += "seleccionable";
    divasiento.id = asiento-$;{asiento};

if (asiento.comprado) {
divasiento.className += "comprado";   


}

if (siento.seleccionado) {
    divasiento.className += "seleccionado";
}

divasiento.addEventListener("click", () => {
    seleccionarasiento(asiento);
});

}


divflex.append(divasiento);

   }


  divasientos.append(divflex);

 }


}

let asientoscomprados = obtenerasientoscomprados();
let asientosseleccionados = [];
const asientos = [
[new asiento("a1"), new asiento("a2"), null, new asiento("a3"), new asiento("a4")],
[new asiento("b1"), new asiento("b2"), null, new asiento("b3"), new asiento("b4")],
[new asiento("c1"), new asiento("c2"), null, new asiento("c3"), new asiento("c4")],
[new asiento("d1"), new asiento("d2"), null, new asiento("d3"), new asiento("d4")],
[new asiento("e1"), new asiento("e2"), new asiento("e3"), new asiento("e4"), new asiento("e5")]
[new asiento("f1"), new asiento("f2"), new asiento("f3"), new asiento("f4"), new asiento("f5")]
];

const spantotalasientosseleccionados = document.getElementById("totalasientosseleccionados");

const botoncomprarasientos = document.getElementById("comprarasientos");
botoncomprarasientos.addEventListener("click", comprarasientos);
