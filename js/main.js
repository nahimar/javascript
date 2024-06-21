let productos = []

/*function agregarAlCarrito(id){
    carrito.innerHTML= "";
    const servicioAAgregar = servicios.find(el => el.id === id );
    if (carrito.some(element => element.id === servicioAAgregar.id)){
    alert("ya lo agregaste");
    }else {
        carrito.push(servicioAAgregar);
       console.log(carrito);
        };
    };*/
//console.log(carrito);

  //btnCarrito.onclick = () => agregarACarrito(servicios.id)
//console.log(carrito)

//const btnCarrito = document.getElementById ("Agregar")

//btncarrito.onclick = () => agregarACarrito(servicio.id);

fetch("./data.json")
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        crearCard(element);
    });}
);

function crearCard(servicio){
    const card = document.createElement("card");
    
    card.innerHTML =  `
  
    <div class="divImg" id:"divImg">
    <img class="imagen" src="${servicio.imagen}" alt="${servicio.servicio}">
    </div>
    <div>
        <h2 class="h2Servicio">${servicio.servicio}</h2>
        <p class="pServicio">${servicio.precio}</p>
        <button id="btn-carrito" class="btncarrito" onclick="agregarACarrito(${servicio.id})">Agregar</button>  
         
    </div>
    `
    //productos.push(element)


    container.append(card)   
}

fetch("./data.json")
.then(servicio => servicio.json())
.then(data => {
    data.forEach(element => {
        agregarACarrito(element);
    });}
);

const CARRITO_COMPRAS = {
    productos: [],
    cantidad: 0,
    total: 0,
}



function agregarACarrito(servicio) {
    const agregarACarrito = productos.find(s => s.id === servicio);  
    
    if (agregarACarrito) {         
       CARRITO_COMPRAS.push(servicioAgregado)
        CARRITO_COMPRAS.productos.push(servicioAgregado);
        CARRITO_COMPRAS.cantidad++;
        CARRITO_COMPRAS.total += parseInt(servicioAgregado.precio)
        console.log(CARRITO_COMPRAS);
    } else {
        console.log("Servicio no encontrado");
    }
}


let servicio 

//servicio = data

//data.forEach(el=>servicio.push(el))
const confirmarCompra = document.getElementById("confirmarCompra");
document.body.appendChild(confirmarCompra);
confirmarCompra.onclick = () => Swal.fire({
    title: "Mensaje enviado!",
    text: `Nos pondremos en contacto en las proximas 12 horas para coordinar horario`,
    icon: "success"
  });

  const vaciarCarrito = document.getElementById("vaciarCarrito");
document.body.appendChild(vaciarCarrito);
vaciarCarrito.onclick = () => Swal.fire({
    title: "Mensaje enviado!",
    text: `Todos tus servicios fueron elimiados`,
    icon: "success"
  });
/*<button id="confirmarCompra" class="confirmarCompra">Finalizar compra</button>
              <button id="vaciarCarrito" onclick=vaciarCarrito()>Vaciar carrito</button>*/
//console.log(carrito);

//const botonMostrarOcultar = document.createElement("button")
//botonMostrarOcultar.innerText = mostrar ? "Ocultar" : "Mostrar";

//btnCarrito.appendChild(botonMostrarOcultar)



// const boton1 = document.createElement("button");
// const boton2 = document.createElement("button");
// const boton3 = document.createElement("button");
// const boton4 = document.createElement("button");

// boton1.innerText = "Manos";
// boton2.innerText = "Pies";
// boton3.innerText = "Pestañas";
// boton4.innerText = "Facial";

// boton1.className = "Manos";
// boton2.className = "Pies";
// boton3.className = "Pestañas";
// boton4.className = "Facial";

// /*boton1.onclick = () => alert("Manos");
// boton2.onclick = () => alert("Pies");
// boton3.onclick = () => alert("Pestañas");
// boton4.onclick = () => alert("Facial");*/

// document.body.appendChild(boton1);
// document.body.appendChild(boton2);
// document.body.appendChild(boton3);
// document.body.appendChild(boton4);


/*const serviciosDisponibles = [
{ id: 1, servicio: "manos", precio: 5000},
{ id: 2, servicio: "pies", precio: 3000},
{ id: 3, servicio: "pestañas", precio: 2000},
{ id: 4, servicio: "facial", precio: 4000 },
]*/
//const servicioDeCliente = []

