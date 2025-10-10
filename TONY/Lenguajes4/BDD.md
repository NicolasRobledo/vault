## Modelado

### 1. Usuario
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id_usuario` | PK | Identificador único |
| `nombre` | string | Nombre del usuario |
| `apellido` | string | Apellido del usuario |
| `email` | string único | Email único |
| `contraseña` | hash | Contraseña encriptada |
| `teléfono` | string | Número de teléfono |
| `tipo_usuario` | ENUM | 'cliente', 'operador', 'admin' |
### 2. Habitación
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id_habitacion` | PK | Identificador único |
| `numero` | único | Número de habitación único |
| `tipo` | string | single, doble, suite, etc. |
| `capacidad` | integer | Capacidad de personas |
| `precio_noche` | decimal | Precio por noche |
| `estado` | ENUM | 'disponible', 'ocupada', 'mantenimiento', 'cerrada' |
| `descripcion` | text | Descripción de la habitación |
### 3. Reserva
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id_reserva` | PK | Identificador único |
| `id_usuario` | FK → Usuario | Usuario que realiza la reserva |
| `id_habitacion` | FK → Habitación | Habitación reservada |
| `fecha_inicio` | date | Fecha de inicio |
| `fecha_fin` | date | Fecha de fin |
| `estado` | ENUM | 'pendiente', 'confirmada', 'cancelada', 'finalizada' |
| `fecha_creacion` | datetime | Fecha de creación |
### 4. Pago
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id_pago` | PK | Identificador único |
| `id_reserva` | FK → Reserva | Reserva asociada |
| `id_usuario` | FK → Usuario | Usuario que paga |
| `metodo_pago` | string | tarjeta, efectivo, transferencia |
| `monto` | decimal | Monto del pago |
| `fecha_pago` | datetime | Fecha del pago |
| `estado_pago` | ENUM | 'aprobado', 'rechazado', 'pendiente' |
### 5. Consulta
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id_consulta` | PK | Identificador único |
| `id_usuario` | FK → Usuario | Usuario que consulta |
| `asunto` | string | Asunto de la consulta |
| `mensaje` | text | Mensaje de la consulta |
| `fecha_consulta` | datetime | Fecha de la consulta |
| `estado` | ENUM | 'pendiente', 'respondida', 'cerrada' |
## Relaciones

Usuario(1,n)Reserva 
Usuario(1,n)Consulta 
Usuario(1,n)Pago 
Pago(1,1)Reserva 
Habitacion(1,n)Reserva

## Diagrama DER + ET

![[Pasted image 20250930093133.png]]


## Modelado en Posgres
```sql
INSERT INTO Usuario (nombre, apellido, email, contraseña, telefono, tipo_usuario)
VALUES ('Nicolas', 'Robledo', 'nicolas@example.com', 'miclave123', '1122334455', 'cliente');

```


```sql
INSERT INTO Habitacion (numero, tipo, capacidad, precio_noche, estado, descripcion)
VALUES (101, 'doble', 2, 4500.00, 'disponible', 'Habitación doble con vista al jardín');

```


```sql
INSERT INTO Reserva (id_usuario, id_habitacion, fecha_inicio, fecha_fin, estado)
VALUES (1, 1, '2025-10-10', '2025-10-15', 'pendiente');


```


```PostgreSQL

-- Crear tipos ENUM
CREATE TYPE tipo_usuario_enum AS ENUM ('cliente', 'operador', 'admin');
CREATE TYPE estado_habitacion_enum AS ENUM ('disponible', 'ocupada', 'mantenimiento', 'cerrada');
CREATE TYPE estado_reserva_enum AS ENUM ('pendiente', 'confirmada', 'cancelada', 'finalizada');
CREATE TYPE metodo_pago_enum AS ENUM ('tarjeta', 'efectivo', 'transferencia');
CREATE TYPE estado_pago_enum AS ENUM ('aprobado', 'rechazado', 'pendiente');
CREATE TYPE estado_consulta_enum AS ENUM ('pendiente', 'respondida', 'cerrada');

-- Tabla Usuario
CREATE TABLE Usuario (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña TEXT NOT NULL,
    telefono VARCHAR(20),
    tipo_usuario tipo_usuario_enum NOT NULL
);

-- Tabla Habitación
CREATE TABLE Habitacion (
    id_habitacion SERIAL PRIMARY KEY,
    numero INT UNIQUE NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    capacidad INT NOT NULL,
    precio_noche NUMERIC(10,2) NOT NULL,
    estado estado_habitacion_enum NOT NULL,
    descripcion TEXT
);

-- Tabla Reserva
CREATE TABLE Reserva (
    id_reserva SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES Usuario(id_usuario),
    id_habitacion INT NOT NULL REFERENCES Habitacion(id_habitacion),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    estado estado_reserva_enum NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT NOW()
);

-- Tabla Pago
CREATE TABLE Pago (
    id_pago SERIAL PRIMARY KEY,
    id_reserva INT NOT NULL REFERENCES Reserva(id_reserva),
    id_usuario INT NOT NULL REFERENCES Usuario(id_usuario),
    metodo_pago metodo_pago_enum NOT NULL,
    monto NUMERIC(10,2) NOT NULL,
    fecha_pago TIMESTAMP DEFAULT NOW(),
    estado_pago estado_pago_enum NOT NULL
);

-- Tabla Consulta
CREATE TABLE Consulta (
    id_consulta SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES Usuario(id_usuario),
    asunto VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_consulta TIMESTAMP DEFAULT NOW(),
    estado estado_consulta_enum NOT NULL
);
CREATE TABLE EstadoConcurrencia (
    id_estado SERIAL PRIMARY KEY,
    nombre_tabla VARCHAR(50) UNIQUE NOT NULL,
    version INT NOT NULL DEFAULT 1
);
INSERT INTO EstadoConcurrencia (nombre_tabla, version) VALUES
('Usuario', 1),
('Habitacion', 1),
('Reserva', 1);

```

```sql
UPDATE EstadoConcurrencia
SET version = version + 1
WHERE nombre_tabla = 'Usuario';

```

## PROCEDIMIENTO ALMACENADO o FUNCION

```sql
-- ==========================================
-- PROCEDIMIENTO ALMACENADO: Crear Reserva
-- ==========================================
CREATE OR REPLACE PROCEDURE crear_reserva(
    p_id_usuario INT,
    p_id_habitacion INT,
    p_fecha_inicio DATE,
    p_fecha_fin DATE,
    p_estado estado_reserva_enum
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO Reserva (id_usuario, id_habitacion, fecha_inicio, fecha_fin, estado)
    VALUES (p_id_usuario, p_id_habitacion, p_fecha_inicio, p_fecha_fin, p_estado);
    
    -- Actualizar el estado de la habitación a 'ocupada'
    UPDATE Habitacion
    SET estado = 'ocupada'
    WHERE id_habitacion = p_id_habitacion;
END;
$$;

-- ==========================================
-- FUNCION: Calcular total de reserva
-- ==========================================
CREATE OR REPLACE FUNCTION total_reserva(p_id_reserva INT)
RETURNS NUMERIC(10,2)
LANGUAGE plpgsql
AS $$
DECLARE
    v_precio NUMERIC(10,2);
    v_fecha_inicio DATE;
    v_fecha_fin DATE;
    v_total NUMERIC(10,2);
BEGIN
    SELECT h.precio_noche, r.fecha_inicio, r.fecha_fin
    INTO v_precio, v_fecha_inicio, v_fecha_fin
    FROM Reserva r
    JOIN Habitacion h ON r.id_habitacion = h.id_habitacion
    WHERE r.id_reserva = p_id_reserva;

    v_total := v_precio * (v_fecha_fin - v_fecha_inicio + 1);
    RETURN v_total;
END;
$$;


```
## FIN... no hay mas para la base de dato
# abrir-base-datos
```bash
sudo -i -u postgres
```

``` sql
psql -d testdb

```
