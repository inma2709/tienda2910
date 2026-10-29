
/*
==========================================
TECNOAULA · JAVASCRIPT CONTROLA LA PÁGINA
PRÁCTICA INTEGRADORA POR RETOS
==========================================

OBJETIVO:
Crear una tienda interactiva utilizando JavaScript.

El HTML y el CSS ya están preparados.

INSTRUCCIONES:
- Completa los retos en orden.
- No borres el código de los retos anteriores.
- Comprueba cada reto en el navegador antes de continuar.
- Utiliza los conocimientos trabajados en clase.
*/


// ==========================================
// DATOS DE NUESTRA TIENDA
// ==========================================

// Cada objeto representa un producto.
// Utilizaremos este array durante toda la práctica.

const productos = [
  { id: 1, nombre: "Teclado", precio: 35, categoria: "Periféricos", icono: "⌨️" },
  { id: 2, nombre: "Ratón", precio: 20, categoria: "Periféricos", icono: "🖱️" },
  { id: 3, nombre: "Auriculares", precio: 50, categoria: "Audio", icono: "🎧" },
  { id: 4, nombre: "Monitor", precio: 150, categoria: "Pantallas", icono: "🖥️" }
];


// ==========================================
// RETO 1 · SALUDO PERSONALIZADO SEGÚN LA HORA
// ==========================================

// OBJETIVO:
// Mostrar un saludo diferente según la hora.

// Esta instrucción obtiene la hora actual.
// No necesitas conocer todavía el objeto Date.

const hora = new Date().getHours();

// PASOS:
// 1. Selecciona el elemento #saludo con querySelector().
// 2. Utiliza if / else if / else.
// 3. Cambia el texto utilizando textContent.
//
// Antes de las 12: Buenos días.
// Desde las 12 hasta las 19: Buenas tardes.
// Desde las 20: Buenas noches.

// ESCRIBE AQUÍ TU CÓDIGO:




// ==========================================
// RETO 2 · MOSTRAR PROMOCIONES
// ==========================================

// OBJETIVO:
// Mostrar una promoción diferente según
// el botón que pulse el usuario.

// En el HTML tenemos dos botones:
//
// mostrarPromocion('ofertas')
// mostrarPromocion('destacados')
//
// Ambos llaman a la misma función,
// pero envían un argumento diferente.

// PASOS:
// 1. Selecciona #promocion con querySelector().
// 2. Comprueba el valor del parámetro tipo.
// 3. Utiliza if / else.
// 4. Cambia el contenido con innerHTML.

// Si tipo es "ofertas", muestra:
//
// ¡Ofertas especiales!
// Teclado por solo 35 €.
// Ratón por solo 20 €.

// En caso contrario, muestra:
//
// Nuestros productos destacados
// Auriculares por 50 €.
// Monitor por 150 €.

// PISTA:
// Utiliza una plantilla literal para introducir
// etiquetas <h3> y <p> dentro de innerHTML.

function mostrarPromocion(tipo) {

  // Completa aquí.

}


// ==========================================
// RETO 3 · GENERAR EL CATÁLOGO
// ==========================================

// OBJETIVO:
// Mostrar los cuatro productos de nuestra tienda
// creando sus tarjetas desde JavaScript.

// PASOS:
//
// 1. Selecciona #catalogo con querySelector().
//
// 2. Vacía su contenido con innerHTML = "".
//
// 3. Recorre el array productos con for...of.
//
// 4. Dentro del bucle, crea una tarjeta HTML
//    para cada producto.
//
// Cada tarjeta debe contener:
//
// <article class="tarjeta">
//
//   <div class="icono-producto">...</div>
//
//   <h3>Nombre del producto</h3>
//
//   <p class="categoria">Categoría</p>
//
//   <p class="precio">Precio</p>
//
// </article>
//
// 5. Utiliza innerHTML += para añadir las tarjetas.
//
// 6. Selecciona #contador-productos y muestra
//    la cantidad de productos con textContent.
//
// PISTAS:
//
// - Utiliza una plantilla literal.
// - Para acceder al nombre: producto.nombre
// - Para acceder al precio: producto.precio
// - Para contar productos: productos.length

function mostrarProductos() {

  // Completa aquí.

}


// Llamamos a la función al cargar la página.
mostrarProductos();


// ==========================================
// RETO 4 · AÑADIR BOTONES AL CATÁLOGO
// ==========================================

// OBJETIVO:
// Conseguir que cada tarjeta tenga un botón
// para añadir ese producto al carrito.

// Vuelve a la función mostrarProductos()
// que acabas de desarrollar en el reto 3.

// Dentro de la tarjeta, después del precio,
// añade un botón con este texto:
//
// "Añadir al carrito 🛒"
//
// El botón debe ejecutar agregarCarrito()
// y enviar el id del producto correspondiente.

// PISTAS:
//
// - Los botones pueden utilizar onclick.
// - El identificador está en producto.id.
// - Cada producto debe enviar su propio id.
//
// COMPROBACIÓN:
// Deben aparecer cuatro botones, uno por producto.
//
// IMPORTANTE:
// No necesitas crear otra función mostrarProductos().
// Solo debes ampliar la que ya tienes.


// ==========================================
// RETO 5 · AÑADIR PRODUCTOS AL CARRITO
// ==========================================

// OBJETIVO:
// Guardar los productos seleccionados
// en un segundo array.

// Este array empieza vacío.
const carrito = [];

// PASOS:
//
// 1. Completa la función agregarCarrito(id).
//
// 2. Busca dentro de productos el objeto cuyo
//    id coincida con el recibido.
//
// 3. Utiliza find() para buscarlo.
//
// 4. Si existe, añádelo al carrito con push().
//
// 5. Actualiza la página llamando a:
//    mostrarCarrito()
//    calcularTotal()
//
// PISTA DE BÚSQUEDA:
//
// productos.find(producto => producto.id === id)
//
// COMPROBACIÓN:
// Puedes utilizar console.log(carrito)
// para verificar que se añaden los productos.

function agregarCarrito(id) {

  // Completa aquí.

}


// ==========================================
// RETO 6 · MOSTRAR EL CARRITO
// ==========================================

// OBJETIVO:
// Mostrar en la página los productos que
// el usuario ha añadido al carrito.

// PASOS:
//
// 1. Selecciona #lista-carrito.
//
// 2. Vacía su contenido con innerHTML.
//
// 3. Recorre el array carrito.
//
// 4. Por cada producto, muestra:
//    - Nombre
//    - Precio
//    - Botón Eliminar
//
// 5. El botón Eliminar debe llamar a
//    eliminarCarrito() indicando la posición.
//
// PISTAS:
//
// Utiliza un bucle for con índice:
//
// for (let i = 0; i < carrito.length; i++)
//
// Puedes obtener un producto con:
//
// carrito[i]
//
// Utiliza innerHTML += para mostrar cada producto.

function mostrarCarrito() {

  // Completa aquí.

}


// ==========================================
// RETO 7 · CALCULAR EL TOTAL
// ==========================================

// OBJETIVO:
// Mostrar la suma de los precios
// de los productos seleccionados.

// PASOS:
//
// 1. Crea una variable total con valor 0.
//
// 2. Recorre el array carrito con for...of.
//
// 3. Suma el precio de cada producto.
//
// 4. Selecciona #total-carrito.
//
// 5. Muestra el resultado utilizando textContent.
//
// PISTA:
//
// total = total + producto.precio;
//
// COMPROBACIÓN:
// Si añades un teclado y un ratón,
// el total debe ser 55 €.

function calcularTotal() {

  // Completa aquí.

}


// ==========================================
// RETO 8 · ELIMINAR UN PRODUCTO
// ==========================================

// OBJETIVO:
// Eliminar del carrito el producto seleccionado.

// PASOS:
//
// 1. La función recibe la posición del producto.
//
// 2. Utiliza splice() para eliminar
//    un elemento de esa posición.
//
// 3. Llama a mostrarCarrito() para actualizar
//    los productos visibles.
//
// 4. Llama a calcularTotal() para actualizar
//    el precio de la compra.
//
// PISTA:
//
// carrito.splice(posicion, 1);
//
// COMPROBACIÓN:
// Al eliminar un producto debe desaparecer
// del carrito y disminuir el total.

function eliminarCarrito(posicion) {

  // Completa aquí.

}


// ==========================================
// RETO 9 · FINALIZAR COMPRA
// ==========================================

// OBJETIVO:
// Mostrar un mensaje de confirmación
// cuando el usuario finalice su compra.

// PASOS:
//
// 1. Selecciona #mensaje-compra.
//
// 2. Cambia su textContent para mostrar:
//
// "Tu compra se ha finalizado"
//
// No necesitamos realizar más operaciones.
// No hay que borrar los productos del carrito.

function finalizarCompra() {

  // Completa aquí.

}
