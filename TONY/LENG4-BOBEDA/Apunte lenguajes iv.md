# Lenguajes IV – React, Node.js y NPM

## 1. JSX (JavaScript XML)
- Sintaxis que permite escribir elementos tipo XML dentro de JavaScript.
- Flujo: **JSX → Elementos React → Virtual DOM → DOM real**.
- Reglas:
  - Un solo elemento raíz.
  - Expresiones JS con `{}`.
  - Comentarios con `{/* comentario */}`.
  - Atributos camelCase (`className`, `onClick`).

## 2. Componentes React
- **Funcionales**: retornan JSX, usan hooks (`useState`, `useEffect`).
- **De clase**: usan `render()` y `this.state`.
- Props y state controlan la UI.
- Permiten **renderizado dinámico y condicional**.

## 3. Virtual DOM
- Representación ligera del DOM real en memoria.
- React compara Virtual DOM anterior y nuevo (**diffing**) y actualiza solo lo necesario (**reconciliación**).
- Ventajas: **alto rendimiento**, UI consistente.

## 4. Renderizado en React
- Render inicial:  

ReactDOM.render(<App />, document.getElementById('root'));

    Actualizaciones dinámicas: cambios en state/props → nuevo Virtual DOM → actualización eficiente del DOM real.

    Necesita renderizador:
        React DOM (web)
        React Native (móviles)

## 5. Listas y Fragmentos

    Renderizado de listas con .map() y key única:

{items.map(item => <li key={item.id}>{item.name}</li>)}

### Práctica – Lenguajes IV

Docente: Lic. Carlos Pacheco - Comisión 2
Requisitos

    Asistencia obligatoria.
    La materia se aprueba con un proyecto (backend y frontend en localhost).
    Proyecto: APIs para consumir servicios, librería React, BDD, local storage, testing (opcional).
    Trabajos prácticos: como práctica para el proyecto.

APIs y Abstracciones

    Se usan APIs web: no es necesario memorizar, se basa en documentación.

    Ejemplo en consola:

if(navigator.geolocation){
  console.log("tengo posibilidad de posicionamiento")
} else {
  console.log("no lo tengo")
}

    Referencias útiles:

        Navigator - API Web | MDN

### History: pushState() method - Web APIs | MDN
Conceptos Clave

    DOM: Document Object Model.
    Objeto literal y todos los objetos en JS.
    Herramienta: Google Analytics

        Etiqueta HTML/CSS/JS que migra datos mediante cookies.
        Sesión: período de interacción entre usuario y sistema.

            Duración típica: 30 min.
            Capacidad: 5 MB.

    Cookies: pequeños archivos en el navegador (4 KB aprox.).
    Local Storage

        Almacena pares clave–valor en navegador.
        Capacidad: 5–10 MB.
        Persistente: datos permanecen tras cerrar navegador.
        Solo accesible desde cliente (JS), no viaja al servidor.

    Session Storage

        Igual que Local Storage, pero temporal: se borra al cerrar pestaña/ventana.

    Resumen rápido

        Local Storage: persiste hasta eliminar.

        Session Storage: dura mientras la ventana esté abierta.

### Otros Datos

    Tokens, JWT.

    Ataques XSS y variantes.

    Comando para delay: setInterval().

    API Navigator: acceso a datos de dispositivos desde sitio web.

## Práctica 28/08/2025 – Pacheco

    Evitar librerías puede ser útil para:

        Proteger datos sensibles.

        Entrevistas de trabajo.

        Reducir recursos.

    API Drag & Drop: permite arrastrar y soltar archivos en un área.

        Convierte archivos a tipo array.

        Documentación: HTML Drag and Drop API

    API File

        Maneja archivos y datos BLOB (binario).

        Más control que solo con JS.

