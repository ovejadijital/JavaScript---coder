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
    const asientosComprados = JSON.parse(localStorage.getItem("asientoscomprados")) || [];
for (const asientocomprado of asientosComprados) {
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
        return;
    }


  
    divasiento.className += "seleccionado";

     const indexasientoseleccionado = indiceasientoseleccionado(siento.id);

    if (indexasientoseleccionado !== -1) {
      
        asiento.seleccionado = false;
        divasiento.classList.remove("seleccionado");

          asientosseleccionados.splice(indexasientoseleccionado, 1);
    } else{
        asiento.seleccionado = true;

       divasiento.classList.add("seleccionado");
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


function obtenerasientosJSON(params) {
    return new Promise( (resolve, reject) => {
        fetch('/asientos.JSON').then( (Response) => {
            return Response.json();
    
        }).then( (Responsejson) => {
           
          for(const filadeasientos of Responsejson){
             
            const fila = [];
    
            for(const asiento of filadeasientos){
                
                if (asiento !== "") {
                    fila.push(new asiento(asiento));
                } else {
                  fila.push(null);
                
                }
    
    
            }
            asientos.push(fila);
    
          }
           
          resole(asientoscargados);


        });
    
   
    });
    
}



let asientosseleccionados = [];
const asientos = [];

const spantotalasientosseleccionados = document.getElementById("totalasientosseleccionados");

const botoncomprarasientos = document.getElementById("comprarasientos");
console.log(botoncomprarasientos)
botoncomprarasientos.addEventListener("click", comprarasientos);

obtenerasientosJSON().then( () => {
obtenerasientoscomprados();


renderizarasientos(asientos);


});
