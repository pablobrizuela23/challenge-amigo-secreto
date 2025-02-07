<h1>Challenge amigo secreto</h1>
Este programa permite agregar nombres a una lista y posteriormente seleccionar un nombre al azar mediante un sorteo.

## Características
- Permite agregar nombres a una lista de amigos.
- Muestra la lista de amigos en la interfaz.
- Valida que los campos no estén vacíos antes de agregar un amigo.
- Selecciona un amigo aleatoriamente de la lista.
- Muestra el amigo sorteado en la pantalla.

## Estructura del Código

### 1. **Lista de Amigos**
```js
let amigos = [];
```
Se inicializa un array vacío donde se almacenarán los nombres ingresados.

### 2. **Función `agregarAmigos()`**
- Obtiene el valor del campo de entrada.
- Valida que el campo no esté vacío.
- Agrega el nombre al array `amigos`.
- Limpia el campo de entrada.
- Llama a `actualizarListaAmigos()` para reflejar los cambios en la interfaz.

### 3. **Función `actualizarListaAmigos()`**
- Limpia la lista HTML antes de actualizarla.
- Recorre el array `amigos` y agrega cada nombre como un elemento `<li>` dentro de la lista en el DOM.

### 4. **Función `sortearAmigo()`**
- Verifica si el array `amigos` tiene elementos.
- Genera un índice aleatorio dentro del rango de la lista.
- Muestra el nombre del amigo seleccionado en el HTML.
- Muestra una alerta si la lista está vacía.

## Uso del Programa
1. Escribir un nombre en el campo de entrada.
2. Presionar el botón "Agregar Amigo" para incluirlo en la lista.
3. Presionar "Sortear" para seleccionar un amigo al azar.
4. El resultado se muestra en la pantalla.

## Tecnologías Utilizadas
- **HTML**: Estructura del programa.
- **CSS**: Diseño básico.
- **JavaScript**: Lógica para manipulación del DOM y la funcionalidad del sorteo.

## Mejoras Posibles
- Permitir eliminar nombres de la lista.
- Almacenar los nombres en `localStorage` para que no se pierdan al recargar la página.
- Agregar animaciones para mejorar la experiencia de usuario.

