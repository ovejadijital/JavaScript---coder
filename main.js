class Asiento {
  constructor(id, precio = 20) {
    this.id = id;
    this.comprado = false;
    this.seleccionado = false;
    this.precio = precio;
  }
}

function seteartotalasientosseleccionados(asientosseleccionados) {
  const spantotalasientosseleccionados = document.getElementById(
    "asientosseleccionados"
  );

  if (spantotalasientosseleccionados) {
    const totalasientosseleccionados = asientosseleccionados.reduce(
      (acc, el) => acc + el.precio,
      0
    );
    spantotalasientosseleccionados.innerText = `$${totalasientosseleccionados}`;
  } else {
    console.error("No se encontró el elemento con ID 'asientosseleccionados'");
  }
}


function realizarcompra() {
  const asientoscompradosyseleccionados = [
    ...asientosComprados,
    ...asientosseleccionados,
  ];

  for (const asientoseleccionado of asientosseleccionados) {
    asientoseleccionado.comprado = true;
    const divasiento = document.getElementById(`asiento-${asientoseleccionado.id}`);
    divasiento.classList.remove("seleccionado");
    divasiento.classList.add("comprado");
  }

  asientosseleccionados = [];

  localStorage.setItem(
    "asientoscomprados",
    JSON.stringify(asientoscompradosyseleccionados)
  );

  obtenerasientoscomprados();

  seteartotalasientosseleccionados(asientoscompradosyseleccionados);
}

let listadeasientos = [];

function buscarasientoenlista(id) {
  let asientoencontrado = null;

  for (const asiento of listadeasientos) {
    if (asiento && asiento.id === id) {
      asientoencontrado = asiento;
    }
  }

  return asientoencontrado;
}

function obtenerasientoscomprados() {
  const asientosComprados =
    JSON.parse(localStorage.getItem("asientoscomprados")) || [];

  for (const asientocomprado of asientosComprados) {
    const asiento = buscarasientoenlista(asientocomprado.id);

    if (asiento !== null) {
      asiento.comprado = true;
    }
  }
}

let asientosComprados = [];

function comprarasientos() {
  const asientoscompradosyseleccionados = [
    ...asientosComprados,
    ...asientosseleccionados,
  ];

  for (const asientoseleccionado of asientosseleccionados) {
    asientoseleccionado.comprado = true;
  }

  asientosseleccionados = [];

  localStorage.setItem(
    "asientoscomprados",
    JSON.stringify(asientoscompradosyseleccionados)
  );

  obtenerasientoscomprados();

  seteartotalasientosseleccionados(asientosseleccionados);

  }




function indiceasientoseleccionado(id) {
  return asientosseleccionados.findIndex((el) => {
    return el.id === id;
  });
}

function seleccionarasiento(asiento) {
  if (asiento.comprado) {
    Swal.fire({
      title: "Asiento no disponible",
      text: "Este asiento está comprado",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  const divasiento = document.getElementById(`asiento-${asiento.id}`);

  if (asiento !== null) {
    divasiento.classList.add("seleccionado");

    const indexasientoseleccionado = indiceasientoseleccionado(asiento.id);

    if (indexasientoseleccionado !== -1) {
      asiento.seleccionado = false;
      divasiento.classList.remove("seleccionado");
      asientosseleccionados.splice(indexasientoseleccionado, 1);
    } else {
      asiento.seleccionado = true;
      divasiento.classList.add("seleccionado");
      asientosseleccionados.push(asiento);
    }

    // Actualizar el total de asientos seleccionados
    seteartotalasientosseleccionados(asientosseleccionados);
  }
}

function realizarcompra() {
  const asientoscompradosyseleccionados = [
    ...asientosComprados,
    ...asientosseleccionados,
  ];

  for (const asientoseleccionado of asientosseleccionados) {
    asientoseleccionado.comprado = true;
    const divasiento = document.getElementById(`asiento-${asientoseleccionado.id}`);
    divasiento.classList.remove("seleccionado");
    divasiento.classList.add("comprado");
  }

  asientosseleccionados = [];

  localStorage.setItem(
    "asientoscomprados",
    JSON.stringify(asientoscompradosyseleccionados)
  );

  obtenerasientoscomprados();

  // Actualizar el total de asientos seleccionados después de la compra
  seteartotalasientosseleccionados(asientosseleccionados);
}

function renderizarasientos(asientos) {
  const divasientos = document.getElementById("asientos");
  divasientos.innerHTML = "";

  for (const filadeasientos of asientos) {
    const divflex = document.createElement("div");
    divflex.className = "d-flex align-items-center";

    for (const asiento of filadeasientos) {
      const divasiento = document.createElement("div");
      divasiento.className = "asiento";



    
      if (asiento !== null) {
        divasiento.className += " seleccionable";
        divasiento.id = `asiento-${asiento.id}`;

        if (asiento.comprado) {
          divasiento.className += " comprado";
        }

        if (asiento.seleccionado) {
          divasiento.className += " seleccionado";
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
  return new Promise((resolve, reject) => {
    asientos.length = 0; // 
    fetch("./asientos.json")
      .then((Response) => {
        return Response.json();
      })
      .then((Responsejson) => {
        for (const filadeasientos of Responsejson) {
          const fila = [];
          for (const asiento of filadeasientos) {
            if (asiento !== "") {
              fila.push(new Asiento(asiento));
            } else {
              fila.push(null);
            }
          }
          asientos.push(fila);
        }
        resolve(asientos);
      });
  });
}

let asientosseleccionados = [];
const asientos = [];



const spantotalasientosseleccionados = document.getElementById("asientosseleccionados");
const botoncomprarasientos = document.getElementById("comprarasientos");
botoncomprarasientos.addEventListener("click", realizarcompra);


obtenerasientosJSON().then(() => {
  obtenerasientoscomprados();
  renderizarasientos(asientos);
});
