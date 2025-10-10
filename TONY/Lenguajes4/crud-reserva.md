# CRUD de Reservas con Control de Concurrencia

Este documento describe cómo interactuar con la API de la tabla `Reserva` usando las funciones de `reserva.js`. Se incluyen ejemplos de datos que enviar y la respuesta esperada para cada operación.

---

## 1️⃣ Obtener todas las reservas

**Petición:**

```http
GET /reservas
```

**Body:** ninguno

**Respuesta esperada:**

```json
{
  "ok": true,
  "estado_tabla": 3,
  "datos": [
    {
      "id_reserva": 1,
      "id_usuario": 1,
      "id_habitacion": 2,
      "fecha_inicio": "2025-10-15",
      "fecha_fin": "2025-10-20",
      "estado": "pendiente",
      "fecha_creacion": "2025-10-10T12:00:00.000Z"
    },
    {
      "id_reserva": 2,
      "id_usuario": 2,
      "id_habitacion": 3,
      "fecha_inicio": "2025-10-18",
      "fecha_fin": "2025-10-22",
      "estado": "confirmada",
      "fecha_creacion": "2025-10-10T12:05:00.000Z"
    }
  ]
}
```

> `estado_tabla` indica la versión actual de la tabla `Reserva` en `EstadoConcurrencia`.

---

## 2️⃣ Insertar una reserva

**Petición:**

```http
POST /reserva
Content-Type: application/json
```

**Body:**

```json
{
  "id_usuario": 1,
  "id_habitacion": 2,
  "fecha_inicio": "2025-10-25",
  "fecha_fin": "2025-10-28",
  "estado": "pendiente",
  "version": 3
}
```

**Respuesta esperada:**

```json
{
  "ok": true,
  "estado_tabla": 4,
  "datos": {
    "id_reserva": 3,
    "id_usuario": 1,
    "id_habitacion": 2,
    "fecha_inicio": "2025-10-25",
    "fecha_fin": "2025-10-28",
    "estado": "pendiente",
    "fecha_creacion": "2025-10-10T12:15:00.000Z"
  }
}
```

> `estado_tabla` se incrementa tras la inserción.

---

## 3️⃣ Actualizar una reserva

**Petición:**

```http
PUT /reserva/3
Content-Type: application/json
```

**Body:**

```json
{
  "id_usuario": 1,
  "id_habitacion": 2,
  "fecha_inicio": "2025-10-26",
  "fecha_fin": "2025-10-29",
  "estado": "confirmada",
  "version": 4
}
```

**Respuesta esperada:**

```json
{
  "ok": true,
  "estado_tabla": 5,
  "datos": {
    "id_reserva": 3,
    "id_usuario": 1,
    "id_habitacion": 2,
    "fecha_inicio": "2025-10-26",
    "fecha_fin": "2025-10-29",
    "estado": "confirmada",
    "fecha_creacion": "2025-10-10T12:15:00.000Z"
  }
}
```

> La versión de la tabla se incrementa tras actualizar.

---

## 4️⃣ Eliminar una reserva

**Petición:**

```http
DELETE /reserva/3
Content-Type: application/json
```

**Body:**

```json
{
  "version": 5
}
```

**Respuesta esperada:**

```json
{
  "ok": true,
  "estado_tabla": 6,
  "datos": {
    "id_reserva": 3,
    "id_usuario": 1,
    "id_habitacion": 2,
    "fecha_inicio": "2025-10-26",
    "fecha_fin": "2025-10-29",
    "estado": "confirmada",
    "fecha_creacion": "2025-10-10T12:15:00.000Z"
  }
}
```

> `estado_tabla` incrementa +1 tras eliminar.

---

## 🔹 Notas importantes

* Para **insertar o actualizar**, siempre necesitás la **versión actual de la tabla**.
* `id_usuario` y `id_habitacion` deben existir en sus tablas.
* `id_reserva` solo se usa para actualizar o eliminar.
* `estado_tabla` ayuda a manejar **control de concurrencia**, evitando conflictos si otro usuario modifica la tabla al mismo tiempo.
