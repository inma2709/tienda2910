
// ==========================================
// TECNOAULA · JAVASCRIPT CONTROLA LA PÁGINA
// ==========================================


// ==========================================
// DATOS DE NUESTRA TIENDA
// Cada objeto representa un producto.
// ==========================================

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


// ==========================================
// RETO 3 · GENERAR EL CATÁLOGO
// ==========================================

/*
PRIMERA VERSIÓN

Mostramos los productos sin botones de compra.

Esta versión queda comentada porque después
la sustituimos por la versión con botones.
*/

/*
function mostrarProductos() {

  const catalogo = document.querySelector("#catalogo");

  // Vaciamos el contenido anterior.
  catalogo.innerHTML = "";

  // Recorremos el array de productos.
  for (const producto of productos) {

    catalogo.innerHTML += `
      <article class="tarjeta">

        <div class="icono-producto">
          ${producto.icono}
        </div>

        <h3>${producto.nombre}</h3>

        <p class="categoria">
          ${producto.categoria}
        </p>

        <p class="precio">
          ${producto.precio} €
        </p>

      </article>
    `;
  }

  const contador = document.querySelector("#contador-productos");
  contador.textContent = productos.length;
}
*/


// ==========================================
// RETO 4 · AÑADIR BOTONES AL CATÁLOGO
// ==========================================

// SEGUNDA VERSIÓN DE mostrarProductos().
// Añadimos un botón a cada tarjeta.
// Esta es la versión activa.

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

        <p class="categoria">
          ${producto.categoria}
        </p>

        <p class="precio">
          ${producto.precio} €
        </p>

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

// Creamos un array vacío para guardar la compra.

let carrito = [];

function agregarCarrito(id) {

  // Buscamos el producto que corresponde al id.
  const producto = productos.find(p => p.id === id);

  // Añadimos el producto encontrado.
  if (producto) {
    carrito.push(producto);
  }

  console.log(carrito);

  // Actualizamos el carrito y el total.
  mostrarCarrito();
  calcularTotal();
}


// ==========================================
// RETO 6 · MOSTRAR EL CARRITO
// ==========================================

function mostrarCarrito() {

  // Localizamos la zona del carrito.
  const lista = document.querySelector("#lista-carrito");

  // Limpiamos para que no se repitan los productos.
  lista.innerHTML = "";

  // Recorremos el carrito utilizando un índice.
  for (let i = 0; i < carrito.length; i++) {

    const producto = carrito[i];

    lista.innerHTML += `
      <p>
        ${producto.nombre} - ${producto.precio} €

        <button onclick="eliminarCarrito(${i})">
          Eliminar ❌
        </button>
      </p>
    `;
  }
}


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
  carrito.splice(posicion, 1);

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
  mensaje.textContent =
    "Tu compra se ha finalizado. Gracias por tu compra.";
}


// ==========================================
// MOSTRAR EL CARRITO AL ABRIR LA PÁGINA
// ==========================================

// Al principio el carrito está vacío.
mostrarCarrito();
calcularTotal();


// ==========================================
// CREAR ELEMENTOS CON createElement
// ==========================================

// Creamos los elementos HTML.
const novedades = document.createElement("h3");

const productosNuevos = document.createElement("p");

// Asignamos una clase CSS.
novedades.className = "h3";

// Añadimos contenido a los elementos.
productosNuevos.textContent =
  "No te pierdas nuestras novedades que te facilitarán la vida.";

novedades.textContent = "Nuestros productos más recientes";

// Seleccionamos el contenedor HTML.
const contenedor = document.querySelector(".productos");

// Añadimos los elementos al contenedor.
contenedor.append(novedades, productosNuevos);


// ==========================================
// BUSCADOR DE PRODUCTOS
// ==========================================

/*
Buscamos un producto por su nombre.

Utilizamos:
- find()
- toLowerCase()
- trim()

Si lo encontramos, mostramos sus datos.
Si no, mostramos un mensaje.
*/

function buscarProductos() {

  const nombre = document.getElementById("buscador").value;

  // Normalizamos el nombre.
  const nombreNormalizado = nombre.toLowerCase().trim();

  // Buscamos el producto en el array.
  const productoEncontrado = productos.find(
    producto =>
      producto.nombre.toLowerCase().trim() === nombreNormalizado
  );

  // Mostramos el resultado.
  if (productoEncontrado) {

    document.getElementById("resultado").textContent =
      "Producto encontrado: " + productoEncontrado.nombre +
      " su precio es " + productoEncontrado.precio + " €";

  } else {

    document.getElementById("resultado").textContent =
      "Tu producto no ha sido encontrado.";
  }
}
