class asiento {
constructor(id) {

this.id = id;
this.comprado = false;
this.seleccionado = true;

}

}
function seleccionarasiento(asiento) {
    
    asiento.seleccionado = true;
const divasiento = document.getElementById ('asiento -${asiento.id}');
divasiento.className += " seleccionado";

asientosseleccionados.push(asiento);
console.log(asientosseleccionados);
}

function renderizarasientos(asientos) {
    const divasientos = document.getElementById("asientos");
    divasientos.innerHTML = "";

    for(const filadeasientos of asientos){
      const divasientos1 = document.createElement("div");
       divasientos1.className = "asientos1";
        
        for(const asiento of filadeasientos) {

         const divasiento = document.createElement("div");
          divasiento.className = "asiento";
           divasiento.id = 'asiento -${asiento.id}';

          if (asiento !== null) {
            divasiento.className += " seleccionable";

            if (asiento.comprado) {
                divasiento.className += "comprado";
            }

            if (asiento.comprado) {
                divasiento.className += "seleccionado";
            }

            divasiento.addEventListener("click", () => {
               seleccionarasientos(asiento);
            });


          }


          divasientos1.append(divasiento);
        }

        divasientos.append(divasientos1);
        
    }
}
const asientosseleccionados = [];
const asientos = [
    [new asiento ("a1"), new asiento ("a2"), null, new asiento ("a3"), new asiento ("a4")],
    [new asiento ("b1"), new asiento ("b2"), null, new asiento ("b3"), new asiento ("b4")],
    [new asiento ("c1"), new asiento ("c2"), null, new asiento ("c3"), new asiento ("c4")],
    [new asiento ("d1"), new asiento ("d2"), null, new asiento ("d3"), new asiento ("d4")],
    [new asiento ("e1"), new asiento ("e2"), new asiento ("e3"), new asiento ("e4"), new asiento ("e5")],
    [new asiento ("f1"), new asiento ("f2"), new asiento ("f3"), new asiento ("f4"), new asiento ("f5")],
];
