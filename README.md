
# TECNOAULA
## Práctica integradora · JavaScript controla la página

### ¿Qué vamos a construir?

Imagina que una pequeña tienda de informática necesita
mejorar su página web.

La tienda ya tiene su estructura HTML y su diseño CSS,
pero todavía no tiene las funcionalidades necesarias
para que los clientes puedan interactuar con ella. Js le da vida.

**Tu misión será darle vida utilizando JavaScript.**

A lo largo de esta práctica convertirás una página
estática en una pequeña tienda interactiva.

Cuando termines, la aplicación permitirá:

- Mostrar un saludo según la hora del día.
- Consultar diferentes promociones.
- Mostrar automáticamente un catálogo de productos.
- Añadir productos a un carrito de compra.
- Ver los productos seleccionados.
- Calcular el importe total.
- Eliminar productos del carrito.
- Mostrar un mensaje al finalizar la compra.

No construiremos toda la aplicación de golpe.

**Trabajaremos por retos. Cada reto añadirá una
nueva funcionalidad a la misma página.**

---

## 1. ¿Qué conocimientos vamos a practicar?

Esta actividad reúne contenidos que ya hemos
trabajado en JavaScript.

| Conocimiento | ¿Para qué lo utilizaremos? |
|---|---|
| Variables | Guardar información |
| Condicionales | Tomar decisiones |
| Funciones | Organizar el código |
| Parámetros | Enviar datos a una función |
| Arrays | Guardar productos |
| Objetos | Representar cada producto |
| for y for...of | Recorrer los productos |
| find() | Buscar un producto |
| push() | Añadir productos |
| splice() | Eliminar productos |
| querySelector() | Encontrar elementos HTML |
| textContent | Cambiar textos |
| innerHTML | Mostrar contenido HTML |
| Plantillas literales | Construir tarjetas dinámicas |

El objetivo no es aprender muchos conceptos nuevos,
sino **aplicar juntos los que ya conocemos**.

---

## 2. Archivos del proyecto

Trabajaremos con tres archivos:

tecnoaula/
- index.html
- styles.css
- app.js

### index.html
Contiene la estructura de nuestra tienda:
cabecera, bienvenida, promociones, catálogo y carrito.

### styles.css
Contiene el diseño visual de la página.

### app.js
Contiene el código JavaScript que tendrás que desarrollar.

**Importante:**

El HTML y el CSS ya están preparados.

Tu trabajo consiste en completar `app.js`.

No debes modificar los otros archivos salvo que
el profesor lo indique.

---

## 3. ¿Cómo vamos a trabajar?

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Abre `index.html` en el navegador.
3. Observa las diferentes secciones de la tienda.
4. Abre `app.js`.
5. Comienza por el reto 1.
6. Completa el código siguiendo las instrucciones.
7. Guarda los cambios y actualiza el navegador.
8. Comprueba que el reto funciona antes de continuar.

**No borres el código de los retos anteriores.**

Todas las funcionalidades deben seguir funcionando
a medida que avanzas.

Puedes utilizar tus apuntes de JavaScript y consultar
los ejemplos del manual de DevCampus.

---

# BLOQUE 1 · CONTROLAMOS LA PÁGINA

## RETO 1 · La tienda te da la bienvenida

### Situación

Nuestra tienda muestra siempre el mismo saludo.

Queremos que el mensaje cambie dependiendo de
la hora a la que el cliente visite la página.

### Tu misión

Mostrar uno de estos mensajes:

- Antes de las 12: Buenos días.
- Desde las 12 hasta las 19: Buenas tardes.
- Desde las 20: Buenas noches.

### ¿Qué tienes que hacer?

1. Localiza el elemento HTML con id `saludo`.
2. Consulta el valor de la variable `hora`.
3. Utiliza `if`, `else if` y `else`.
4. Cambia el contenido con `textContent`.

La instrucción que obtiene la hora ya está preparada.

No necesitas aprender cómo funciona `Date`.

### Comprueba tu trabajo

Al abrir la página debe aparecer un saludo
correspondiente a la hora actual.

**Piensa:**

¿Por qué utilizamos `textContent` y no `innerHTML`?

---

## RETO 2 · Descubre nuestras promociones

### Situación

La tienda dispone de dos botones:

- Ver productos en oferta.
- Ver productos destacados.

Actualmente necesitamos programar su funcionamiento.

### Tu misión

Cuando el cliente pulse uno de los botones,
debe aparecer la información correspondiente.

### ¿Qué tienes que hacer?

1. Completa la función `mostrarPromocion(tipo)`.
2. Localiza el elemento con id `promocion`.
3. Comprueba el valor del parámetro `tipo`.
4. Utiliza una estructura `if/else`.
5. Muestra el contenido utilizando `innerHTML`.

### Si seleccionamos ofertas

Deben aparecer:

¡Ofertas especiales!

- Teclado por solo 35 €.
- Ratón por solo 20 €.

### Si seleccionamos destacados

Deben aparecer:

Nuestros productos destacados

- Auriculares por 50 €.
- Monitor por 150 €.

Utiliza etiquetas HTML para organizar la información.

### Comprueba tu trabajo

Pulsa los dos botones varias veces.

El contenido debe cambiar según el botón pulsado,
sin acumular los mensajes anteriores.

**Piensa:**

¿Cómo consigue una sola función mostrar
dos contenidos diferentes?

---

# BLOQUE 2 · CONSTRUIMOS EL CATÁLOGO

## RETO 3 · Mostramos nuestros productos

### Situación

Nuestra tienda tiene cuatro productos guardados
en un array de objetos de JavaScript.

Sin embargo, todavía no aparecen en la página.

Podríamos escribir las cuatro tarjetas directamente
en HTML, pero tendríamos que repetir el mismo código.

Vamos a generar las tarjetas automáticamente.

### Tu misión

Mostrar una tarjeta por cada producto del array.

Cada tarjeta debe incluir:

- Icono.
- Nombre.
- Categoría.
- Precio.

### ¿Qué tienes que hacer?

1. Completa la función `mostrarProductos()`.
2. Localiza el contenedor con id `catalogo`.
3. Vacía su contenido inicial.
4. Recorre el array `productos` utilizando `for...of`.
5. Crea una tarjeta HTML por cada producto.
6. Introduce los datos utilizando una plantilla literal.
7. Actualiza el contador de productos.

### Pistas

Para acceder a las propiedades de un objeto:

- `producto.nombre`
- `producto.precio`
- `producto.categoria`
- `producto.icono`

Para saber cuántos productos contiene el array,
puedes utilizar su propiedad `length`.

### Comprueba tu trabajo

Deben aparecer cuatro tarjetas:

- Teclado.
- Ratón.
- Auriculares.
- Monitor.

El contador debe mostrar 4 productos.

**Piensa:**

¿Qué tendrías que modificar para añadir
un quinto producto al catálogo?

---

# BLOQUE 3 · CREAMOS EL CARRITO

## RETO 4 · Añadir botones a los productos

### Situación

Ya podemos visualizar los productos de la tienda.

Ahora necesitamos que el cliente pueda seleccionarlos.

### Tu misión

Añadir un botón a cada tarjeta con el texto:

**Añadir al carrito**

### ¿Qué tienes que hacer?

1. Vuelve a la función `mostrarProductos()`.
2. Localiza el código que genera cada tarjeta.
3. Añade un botón después del precio.
4. El botón debe llamar a `agregarCarrito()`.
5. Envía el identificador del producto como argumento.

### Pista

Cada producto tiene una propiedad llamada `id`.

Puedes acceder a ella utilizando `producto.id`.

### Comprueba tu trabajo

Deben aparecer cuatro botones, uno por producto.

Todavía no funcionarán completamente.

Los programaremos en el siguiente reto.

---

## RETO 5 · Guardamos los productos seleccionados

### Situación

El cliente pulsa «Añadir al carrito».

Ahora necesitamos guardar el producto seleccionado.

### Tu misión

Utilizar un segundo array llamado `carrito`.

Este array comienza vacío.

### ¿Qué tienes que hacer?

1. Completa la función `agregarCarrito(id)`.
2. Busca el producto correspondiente en el catálogo.
3. Utiliza `find()` para localizarlo por su id.
4. Añádelo al array `carrito` utilizando `push()`.
5. Llama a las funciones que actualizarán el carrito.

### Pistas

Recuerda que `find()` permite localizar
un elemento de un array que cumpla una condición.

`push()` añade un elemento al final de un array.

Puedes utilizar `console.log(carrito)` para
comprobar los datos que se van guardando.

### Comprueba tu trabajo

Añade un teclado y después un ratón.

Comprueba en la consola que ambos objetos
aparecen dentro del array `carrito`.

**Piensa:**

¿Cuál es la diferencia entre el array
`productos` y el array `carrito`?

---

## RETO 6 · Mostramos el contenido del carrito

### Situación

Ya guardamos los productos seleccionados,
pero necesitamos que el cliente pueda verlos.

### Tu misión

Mostrar los productos del carrito en la página.

### ¿Qué tienes que hacer?

1. Completa la función `mostrarCarrito()`.
2. Localiza el elemento con id `lista-carrito`.
3. Vacía su contenido anterior.
4. Recorre el array `carrito`.
5. Muestra el nombre y precio de cada producto.
6. Añade un botón «Eliminar» a cada producto.

### Pistas

Utiliza un bucle `for` con un índice.

En este ejercicio necesitamos conocer la posición
de cada producto para poder eliminarlo después.

Puedes acceder a un producto utilizando `carrito[i]`.

### Comprueba tu trabajo

Cada vez que añadas un producto, debe aparecer
también en la zona del carrito.

Si añades dos veces el mismo producto,
aparecerá dos veces.

Cada producto representa una unidad.

---

## RETO 7 · Calculamos el importe total

### Situación

El cliente ya puede ver los productos que ha elegido.

Ahora necesita saber cuánto cuesta su compra.

### Tu misión

Calcular la suma de los precios del carrito.

### ¿Qué tienes que hacer?

1. Completa la función `calcularTotal()`.
2. Crea una variable `total` con valor inicial 0.
3. Recorre el array `carrito` con `for...of`.
4. Suma el precio de cada producto.
5. Localiza el elemento `total-carrito`.
6. Muestra el resultado con `textContent`.

### Comprueba tu trabajo

Realiza estas pruebas:

| Productos | Total esperado |
|---|---|
| Teclado | 35 € |
| Teclado + Ratón | 55 € |
| Dos ratones | 40 € |
| Monitor + Auriculares | 200 € |

**Piensa:**

¿Por qué inicializamos el total a cero
cada vez que ejecutamos la función?

---

## RETO 8 · Eliminamos productos del carrito

### Situación

Un cliente puede cambiar de opinión y decidir
que ya no quiere uno de los productos seleccionados.

### Tu misión

Permitir eliminar una unidad del carrito.

### ¿Qué tienes que hacer?

1. Completa la función `eliminarCarrito(posicion)`.
2. Utiliza `splice()` para eliminar el producto.
3. Vuelve a mostrar el contenido del carrito.
4. Actualiza el importe total.

### Pista

Recuerda que `splice()` permite eliminar
elementos de un array indicando su posición.

### Comprueba tu trabajo

1. Añade un teclado y un ratón.
2. Comprueba que el total es 55 €.
3. Elimina el ratón.
4. Comprueba que desaparece del carrito.
5. El total debe actualizarse a 35 €.

**Piensa:**

¿Eliminar un producto del carrito significa
que también desaparece del catálogo de la tienda?

---

# BLOQUE 4 · TERMINAMOS LA COMPRA

## RETO 9 · Finalizar compra

### Situación

El cliente ha seleccionado los productos que desea.

Necesitamos un botón que confirme que ha terminado.

### Tu misión

Mostrar un mensaje al pulsar «Finalizar compra».

### ¿Qué tienes que hacer?

1. Completa la función `finalizarCompra()`.
2. Localiza el elemento con id `mensaje-compra`.
3. Cambia su contenido con `textContent`.
4. Muestra el siguiente mensaje:

**Tu compra se ha finalizado**

No necesitas borrar el carrito ni realizar
ninguna otra operación.

Esta es una simulación didáctica de la finalización
de una compra. No se realiza ningún pago real.

### Comprueba tu trabajo

Al pulsar el botón debe aparecer el mensaje
de confirmación debajo del carrito.

---

# 4. Comprobación final de la aplicación

Antes de entregar tu trabajo, comprueba que:

- [ ] El saludo cambia según la hora.
- [ ] Los dos botones de promociones funcionan.
- [ ] Aparecen los cuatro productos del catálogo.
- [ ] El contador muestra la cantidad de productos.
- [ ] Cada tarjeta tiene un botón para añadir al carrito.
- [ ] Los productos seleccionados aparecen en el carrito.
- [ ] Puedes añadir varias unidades del mismo producto.
- [ ] El importe total se calcula correctamente.
- [ ] Puedes eliminar productos del carrito.
- [ ] El total se actualiza después de eliminar.
- [ ] El botón Finalizar compra muestra el mensaje.
- [ ] No aparecen errores en la consola del navegador.

---

# 5. ¿Qué hemos aprendido?

En esta práctica hemos conectado tres elementos
fundamentales del desarrollo web:

**HTML:** proporciona la estructura de la tienda.

**CSS:** define su diseño y apariencia.

**JavaScript:** controla cómo responde la página
a las acciones del usuario.

También hemos aprendido una idea importante:

Los arrays guardan nuestros datos y el DOM
permite mostrarlos en la página.

Cuando añadimos o eliminamos un producto del carrito,
primero modificamos el array y después actualizamos
lo que aparece en el navegador.

Este mismo principio se utiliza en aplicaciones
mucho más grandes.

---

# 6. Entrega de la práctica

Entrega la carpeta del proyecto con los archivos:

- index.html
- styles.css
- app.js

El archivo `app.js` debe contener los retos resueltos,
ordenados y con nombres de variables comprensibles.

Antes de entregar:

- Guarda todos los archivos.
- Abre la página en el navegador.
- Comprueba las funcionalidades.
- Revisa que no existan errores de JavaScript.

**Recuerda:**

No se trata solo de conseguir que la página funcione.

El objetivo es comprender cómo se relacionan
los datos, las funciones y los elementos HTML
para construir una aplicación interactiva.
"# tienda2910" 
