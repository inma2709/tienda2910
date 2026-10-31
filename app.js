
// ==========================================
// TECNOAULA · JAVASCRIPT CONTROLA LA PÁGINA
// ==========================================


// DATOS DE NUESTRA TIENDA
// Cada objeto representa un producto.

const productos = [
  { id: 1, nombre: "Teclado", precio: 35, categoria: "Periféricos", icono: "⌨️" },
  { id: 2, nombre: "Ratón", precio: 20, categoria: "Periféricos", icono: "🖱️" },
  { id: 3, nombre: "Auriculares", precio: 50, categoria: "Audio", icono: "🎧" },
  { id: 4, nombre: "Monitor", precio: 150, categoria: "Pantallas", icono: "🖥️" }
];


// ==========================================
// RETO 1 · SALUDO SEGÚN LA HORA
// ==========================================

// Obtenemos la hora actual del navegador.
const hora = new Date().getHours();

// Localizamos el título del saludo.
const saludo = document.querySelector("#saludo");

// Cambiamos el texto según la hora.
if (hora < 12) {
  saludo.textContent = "Buenos días, bienvenido a TecnoAula";

} else if (hora < 20) {
  saludo.textContent = "Buenas tardes, bienvenido a TecnoAula";

} else {
  saludo.textContent = "Buenas noches, bienvenido a TecnoAula";
}


// ==========================================
// RETO 2 · MOSTRAR PROMOCIONES
// ==========================================

// Los botones envían "ofertas" o "destacados".

function mostrarPromocion(tipo) {

  const promocion = document.querySelector("#promocion");

  if (tipo === "ofertas") {

    promocion.innerHTML = `
      <h3>¡Ofertas especiales!</h3>
      <p>Teclado por solo 35 €.</p>
      <p>Ratón por solo 20 €.</p>
    `;

  } else {

    promocion.innerHTML = `
      <h3>Nuestros productos destacados</h3>
      <p>Auriculares por 50 €.</p>
      <p>Monitor por 150 €.</p>
    `;
  }
}



/*
==========================================
RETO 3 · GENERAR EL CATÁLOGO
==========================================*/

/* PRIMERA VERSIÓN
Mostramos los productos sin botones de compra.*/

// function mostrarProductos() {

//   /*1. Seleccionamos el contenedor del catálogo.*/
//   const catalogo = document.querySelector("#catalogo");

  /*2. Vaciamos su contenido anterior.
  Así evitamos duplicar las tarjetas.
  catalogo.innerHTML = "";*/

  /*3. Recorremos el array de productos.
  En cada vuelta, producto es un objeto diferente.*/
//   for (const producto of productos) { 

//     /*4. Creamos una tarjeta HTML para cada producto.
//     Utilizamos una plantilla literal para
//     introducir los datos del objeto.*/

//     catalogo.innerHTML += `
//       <article class="tarjeta">

//         <div class="icono-producto">
//           ${producto.icono}
//         </div>

//         <h3>${producto.nombre}</h3>

//         <p class="categoria">
//           ${producto.categoria}
//         </p>

//         <p class="precio">
//           ${producto.precio} €
//         </p>

//       </article>
//     `;
//   }

//   /*5. Seleccionamos el contador de productos.*/
//   const contador = document.querySelector("#contador-productos");

//   /*Mostramos la cantidad de productos del array.*/
//   contador.textContent = productos.length;
// }

/*Ejecutamos la función al cargar la página.*/
mostrarProductos();





// ==========================================
// RETO 4 · AÑADIR BOTONES AL CATÁLOGO
// ==========================================

// SEGUNDA VERSIÓN DE mostrarProductos().
//
// Es la misma función del reto 3,
// pero añadimos un botón a cada tarjeta.
//
// Esta es la versión que dejamos activa.

function mostrarProductos() {

  // Localizamos el catálogo.
  const catalogo = document.querySelector("#catalogo");

  // Borramos el contenido anterior.
  catalogo.innerHTML = "";

  // Recorremos los productos.
  for (const producto of productos) {

    // Creamos una tarjeta por cada producto.
    catalogo.innerHTML += `
      <article class="tarjeta">

        <div class="icono-producto">
          ${producto.icono}
        </div>

        <h3>${producto.nombre}</h3>

        <p class="categoria">${producto.categoria}</p>

        <p class="precio">${producto.precio} €</p>

       

        <button onclick="agregarCarrito(${producto.id})">
          Añadir al carrito 🛒
        </button>

      </article>
    `;
  }

  // Actualizamos el contador.
  const contador = document.querySelector("#contador-productos");
  contador.textContent = productos.length;
}


mostrarProductos();


// ==========================================
// RETO 5 · AÑADIR PRODUCTOS AL CARRITO
// ==========================================

// Creamos un array vacío para guardar la compra lo declaramos como let para poder modificarlo.
let carrito = [];
/*comprueba si en local existe MicarritoGuardado*/
let guardado= localStorage.getItem("MicarritoGuardado");
// Si encontramos datos, los convertimos en un array.
// local lo guarda como un string, por eso tenemos que convertirlo a un array con JSON.parse() 
if (guardado !== null) {
  carrito = JSON.parse(guardado);
}
// cuando lo traemos del navegador a js


function agregarCarrito(id) {

  // Buscamos el producto que corresponde al id.
  const producto = productos.find(p => p.id === id);

  // Añadimos el producto encontrado.
  if (producto) {
    carrito.push(producto);
  }

  localStorage.setItem(
    "MicarritoGuardado",
    JSON.stringify(carrito)
  );

  console.log(carrito);

  mostrarCarrito();
  calcularTotal();

  
}


// ==========================================
// RETO 6 · MOSTRAR EL CARRITO
// ==========================================

function mostrarCarrito() {

  // Localizamos la zona del carrito.
  const lista = document.querySelector("#lista-carrito"); 

  //limpiamos el carrito para que no repita los productos

lista.innerHTML = "";


  // Recorremos el carrito utilizando un índice.  
  for (let i = 0; i < carrito.length; i++) {
    const producto = carrito[i];
    lista.innerHTML += `
      <p>
        ${producto.nombre} - ${producto.precio} €        

     
      <button onclick="eliminarCarrito(${i})">Eliminar ❌</button>
      </p>
    `;  }  
}

 /*aqui añadimos el botón para eliminar el producto; este botón elimina con la posicion
      en el array por eso tenemos que recorrer con un for clasico que nos da el indice en el carrito */
// ==========================================
// RETO 7 · CALCULAR EL TOTAL
// ==========================================

function calcularTotal() {

  // Empezamos con el total a cero.
  let total = 0;

  // Sumamos el precio de cada producto.
  for (const producto of carrito) {
    total = total + producto.precio;
  }

  // Mostramos el resultado.
  const resultado = document.querySelector("#total-carrito");

  resultado.textContent = total + " €";

  console.log(total); 
}




// ==========================================
// RETO 8 · ELIMINAR UN PRODUCTO
// ==========================================

function eliminarCarrito(posicion) {

  // Eliminamos un elemento del array.
  carrito.splice(posicion,1);

  // Volvemos a mostrar el carrito y el total.
  mostrarCarrito();
  calcularTotal();
 
}




// ==========================================
// RETO 9 · FINALIZAR COMPRA
// ==========================================

function finalizarCompra() {

  // Localizamos el párrafo del mensaje.
  const mensaje = document.querySelector("#mensaje-compra");

  // Mostramos la confirmación.
mensaje.textContent="Tu compra se ha finalizado. Gracias por tu compra."
}

// ==========================================
// MOSTRAR EL CARRITO AL ABRIR LA PÁGINA
// ==========================================

// Mostramos los productos recuperados de localStorage.
mostrarCarrito();

// Calculamos el total de esos productos.
calcularTotal();


//==========================================
/*CREAR ELEMENTO CON CREATE ELEMENT*/
/*creamos el elemento con la etiqueta html que queramos*/

const novedades= document.createElement("h3");
/*le damos la clase de css  h3*/
novedades.className="h3";
const productosNuevos=document.createElement("p");
/*le damos contenido a los elementos*/
productosNuevos.textContent="No te pierdas nuestras novedades que te facilitarán la vida.";
novedades.textContent="Nuestros productos más recientes";
/*nos enganchamos al nodo de html donde nos queremos posicionar*/
const contenedor= document.querySelector(".productos");
/*añadimos los elementos al contenedor*/
contenedor.append(novedades,productosNuevos);

//====================================
/*BUSCADOR DE PRODUCTOS EN EL ARRAY DE PRODUCTOS CON EL METODO FIND POR NOMBRE*/
/*USA LOWER CASE Y TRIM NORMALIZA Y BUSCA EL NOMBRE DEL PRODUCTO EN EL ARRAY */
/*DEVUELVE SOLO SI HAS ENCONTRADO EL PRODUCTO Y SI NO PON TU PRODUCTO NO ENCONTRADO */
function buscarProductos() {
  const nombre=document.getElementById("buscador").value;
  // Normalizamos el nombre del producto a buscar.
  const nombreNormalizado = nombre.toLowerCase().trim();

  // Buscamos el producto en el array de productos.
  const productoEncontrado = productos.find(
    (producto) => producto.nombre.toLowerCase().trim() === nombreNormalizado
  );

  // Mostramos el resultado.
  if (productoEncontrado) {
    document.getElementById("resultado").textContent = "Producto encontrado: " + productoEncontrado.nombre + 
    " su precio es" + productoEncontrado.precio + " €";
  } else {
    document.getElementById("resultado").textContent = "Tu producto no ha sido encontrado.";
  }
}

/*guardando productos del carro en LocalStorage*/

function guardarCarrito() {

  localStorage.setItem(
    "MicarritoGuardado",
  JSON.stringify(carrito)
  );
}

guardarCarrito(); 

