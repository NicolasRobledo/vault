### Usuarios
| id_usuario | nombre  | apellido  | email                  | contraseña | telefono | tipo_usuario |
|------------|---------|-----------|-----------------------|------------|----------|--------------|
| 1          | Nicolas | Robledo   | tomatekiwi84@gmail.com | 12345678   |          | cliente      |
| 2          | puto    | puflito   | tonygay@gmail.com      | 12345678   |          | operador     |
| 3          | Ana     | Gómez     | ana@gmail.com          | pass123    |          | cliente      |
| 4          | Luis    | Martínez  | luis@gmail.com         | pass123    |          | cliente      |
| 5          | María   | Rodríguez | maria@gmail.com        | pass123    |          | cliente      |
| 6          | Carlos  | Fernández | carlos@gmail.com       | pass123    |          | cliente      |
| 7          | Lucía   | Sánchez   | lucia@gmail.com        | pass123    |          | cliente      |
| 8          | Diego   | Torres    | diego@gmail.com        | pass123    |          | cliente      |
| 9          | Elena   | Ruiz      | elena@gmail.com        | pass123    |          | cliente      |
| 10         | Pedro   | Vega      | pedro@gmail.com        | pass123    |          | cliente      |

### Habitaciones
| id_habitacion | numero | tipo     | capacidad | precio_noche | estado        | descripcion                           |
|---------------|--------|----------|-----------|--------------|---------------|---------------------------------------|
| 1             | 101    | Simple   | 1         | 50.00        | disponible    | Habitación cómoda para una persona.   |
| 2             | 102    | Simple   | 1         | 60.00        | ocupada       | Habitación sencilla ocupada.          |
| 3             | 103    | Doble    | 2         | 120.00       | mantenimiento | Habitación en mantenimiento.          |
| 4             | 104    | Suite    | 3         | 200.00       | cerrada       | Suite cerrada temporalmente.          |
| 5             | 105    | Familiar | 4         | 250.00       | disponible    | Habitación familiar disponible.       |
| 6             | 106    | Simple   | 1         | 55.00        | disponible    | Habitación simple recién remodelada. |
| 7             | 107    | Doble    | 2         | 130.00       | ocupada       | Habitación doble ocupada actualmente.|
| 8             | 108    | Doble    | 2         | 125.00       | disponible    | Habitación doble disponible.          |
| 9             | 109    | Suite    | 3         | 210.00       | disponible    | Suite con vista al jardín.            |
| 10            | 110    | Familiar | 4         | 260.00       | ocupada       | Habitación familiar ocupada.          |

### Reservas
| id_reserva | id_usuario | id_habitacion | fecha_inicio | fecha_fin | estado      | fecha_creacion           |
|------------|------------|---------------|--------------|-----------|------------|-------------------------|
| 12         | 1          | 1             | 2025-10-05   | 2025-10-08 | confirmada | 2025-10-04 13:37:07.060548 |
| 13         | 2          | 2             | 2025-10-03   | 2025-10-07 | pendiente  | 2025-10-04 13:37:07.060548 |
| 14         | 3          | 3             | 2025-10-01   | 2025-10-04 | finalizada | 2025-10-04 13:37:07.060548 |
| 15         | 4          | 4             | 2025-10-10   | 2025-10-12 | confirmada | 2025-10-04 13:37:07.060548 |
| 16         | 5          | 5             | 2025-10-15   | 2025-10-18 | pendiente  | 2025-10-04 13:37:07.060548 |
| 17         | 6          | 6             | 2025-10-01   | 2025-10-03 | cancelada  | 2025-10-04 13:37:07.060548 |
| 18         | 7          | 7             | 2025-10-08   | 2025-10-11 | confirmada | 2025-10-04 13:37:07.060548 |
| 19         | 8          | 8             | 2025-10-05   | 2025-10-09 | finalizada | 2025-10-04 13:37:07.060548 |
| 20         | 9          | 9             | 2025-10-12   | 2025-10-14 | confirmada | 2025-10-04 13:37:07.060548 |
| 21         | 10         | 10            | 2025-10-02   | 2025-10-05 | pendiente  | 2025-10-04 13:37:07.060548 |
