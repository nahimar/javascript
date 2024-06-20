

const enviar = document.getElementById("enviar");
document.body.appendChild(enviar);
enviar.onclick = () => Swal.fire({
    title: "Mensaje enviado!",
    text: `Nos pondremos en contacto en las proximas 12 horas para coordinar horario`,
    icon: "success"
  });

//const registro = document.getElementById("registro")
//registro.addEventListener("submit", validarRegistro);
//JSON.parce(localStorage.getItem("registro"))

//let Registro =  document.createElement("button");
//botonRegistro.innerText = "Enviar consulta"; 

/*function validarenviar(e){
    e.preventDefault();
    //console.log("Mensaje enviado")
     enviar = e.target
    console.log();
    console.log(enviar.children[0].value);
    console.log(enviar.children[1].value);
    console.log(enviar.children[2].value);
    //alert ("Gracias por enviarnos tu mensaje, nos pondremos en contacto contigo")

    enviar.children[0].value = ""
    enviar.children[1].value = ""
    enviar.children[2].value = ""
   
}*/


//mostrar = false;

//let carrito = []; 
//console.log(carrito)


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

////ACA


/*servicio()
.then(() => {
    console.log("RESUELTO", )
    setTimeout(() => {
        
        const loader = document.getElementById("loader");
        loader.remove();
        
    }, 2500);
});
*/

/*serviciosDisponibles.forEach(servicio => {
    const div = document.createElement("div")
    div.className = "divCard"
    div.innerHTML = `
    <div class="divImg">
    <img class="imagen" src="${servicio.imagen}" alt="${servicio.servicio}">
    </div>
    <div>
        <h2 class="h2Servicio">${servicio.servicio}</h2>
        <p class="pServicio">${servicio.precio}</p>
        <button id="btn-carrito" class="btncarrito" onclick="agregarACarrito(${servicio.id})">Agregar</button>  
         
    </div>
    `
  
   
    //btnCarrito.onclick = agregarAlCarrito(servicio.id)
   container.appendChild(div)
   //buttonServicio.innerText = appendChild(div)
});*/



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






const CARRITO_COMPRAS = {
    productos: [],
    cantidad: 0,
    total: 0
}


function agregarACarrito(servicio) {
    const servicioAgregado = serviciosDisponibles.find(s => s.id === servicio);  
    
    if (servicioAgregado) {         
       //CARRITO_COMPRAS.push(servicioAgregado)
        CARRITO_COMPRAS.productos.push(servicioAgregado);
        CARRITO_COMPRAS.cantidad++;
        CARRITO_COMPRAS.total += parseInt(servicioAgregado.precio)
        console.log(CARRITO_COMPRAS);
    } else {
        console.log("Servicio no encontrado");
    }
}


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
/*const armarPresupuesto = (array) => {
    return array.reduce ((acc,element)=>acc + element.precio, 0)
}
do {
    const serviciosElegido = Number(prompt("1- Agregar servicio \n2 - Eliminar el último elegido❌ \n0 - Salir"));
 
    if (serviciosElegido === 0) {
        alert("¡Gracias por visitarnos! El total a pagar es: $" + armarPresupuesto(servicioDeCliente));
        break;
    } else if (serviciosElegido === 1) { 
        const servicios = Number(prompt("¿Qué servicio deseas realizar?\n\n1 - Manos $5000💅🏻\n2 - Pies $3000👣\n3 - Pestañas $2000😌\n4 - Facial $4000🥰"));
        let eleccionDeCliente = serviciosDisponibles.find(element => element.id === servicios)
        servicioDeCliente.push(eleccionDeCliente)
        alert("Recuerda mandarnos un whatsapp +54 9 11 2233 4455 para reservar tu cita ");
    } else if (serviciosElegido === 2) {
        servicioDeCliente.pop();
        console.log("Eliminado, servicios que te quedan ", servicioDeCliente);
    } else {
        alert("Opción inválida. Por favor elige una opción válida.");
    }
    
} while (true);*/

/*const container = document.getElementById("container");
let serviciosDom = 

function serviciosDom(arrayServicios){
serviciosDisponibles.forEach (el => {
    const card = document.createElement("div");
    card.className = "card";
    
    const precio = document.createElement("p")
    precio.innerText = $${el.precio};
   
    const servicio= document.createElement("h5");
    servicio.innerText= el.servicio;
    servicio.className= "servicio";

    const imagen = document.createElement("img");
    imagen.src = el.imagen;
    imagen.className = "imagen";

    card.appendChild(servicio);
    card.appendChild(imagen);

    container.appendChild(card);
    document.body.appendChild(card);
});
}
serviciosDom([{ id: 7, 
    servicio: "Limpieza facial", 
    precio: 5000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_6KltSqAoLyB7JuL5jQDb1neFi1vp70aW2U8SkOPWw&s"},
])  

let iniciarSesion =
document.getElementById("iniciar");
iniciarSesion.addEventListener("submit", validarIniciar);

function validarIniciar(e){
    e.preventDefault();
    console.log("Iniciaste Sesion");
}*/

// const carrito = document.getElementById("carrito");
// const btnarrito = document.getElementById("btn-carri


