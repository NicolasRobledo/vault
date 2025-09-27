# Resumen Completo: Configuración PostgreSQL + Node.js

## 1. Conectarse como superusuario y crear usuario/DB

```bash
sudo -u postgres psql
```

## 2. Comandos SQL esenciales (ejecutar en psql)

### Crear usuario y base de datos

```sql
-- Crear base de datos
CREATE DATABASE testdb;

-- Crear usuario
CREATE USER miusuario WITH PASSWORD 'mipassword';

-- Conectar a la base de datos
\c testdb

-- Crear tabla
CREATE TABLE comentario (
    id SERIAL PRIMARY KEY,
    texto TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conceder permisos (ESTOS 3 COMANDOS SON CLAVE)
GRANT ALL PRIVILEGES ON TABLE comentario TO miusuario;
GRANT USAGE, SELECT ON SEQUENCE comentario_id_seq TO miusuario;
GRANT USAGE ON SCHEMA public TO miusuario;

-- Verificar que todo está bien
\z comentario

-- Salir
\q
```

## 3. Código Node.js final (`app.js`)

```javascript
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Para poder recibir JSON en POST
app.use(express.json());

const pool = new Pool({
  user: 'miusuario',
  host: 'localhost',
  database: 'testdb',
  password: 'mipassword',
  port: 5432
});

app.get('/comentarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT texto, fecha FROM comentario');
    res.json(result.rows);
  } catch (err) {
    console.log('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/comentarios', async (req, res) => {
  try {
    const { texto } = req.body;
    const result = await pool.query(
      'INSERT INTO comentario (texto) VALUES ($1) RETURNING *',
      [texto]
    );
    res.json({ 
      mensaje: 'Comentario agregado', 
      comentario: result.rows[0] 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar servidor en 0.0.0.0
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor iniciado en http://0.0.0.0:${port}`);
});


```

## 4. Comandos para ejecutar

```bash
# Instalar dependencias
npm install express pg

# Ejecutar servidor
node app.js
```


# Documentación de la API de Comentarios

## Base URL

La base pública de la API es:

```
http://186.123.108.73:3000/comentarios
```

## Endpoints disponibles

### 1. Obtener todos los comentarios

- **Método:** `GET`
- **URL:** `/comentarios`
- **Descripción:** Obtiene todos los comentarios existentes.
- **Respuesta ejemplo:**

```json
[
  {"texto":"Comentario desde otra máquina","fecha":"2025-09-27T17:36:46.522Z"}
]
```

### 2. Crear un nuevo comentario

- **Método:** `POST`
- **URL:**` http://186.123.108.73:3000/comentarios`
- **Descripción:** Agrega un comentario nuevo a la base de datos.
- **Cuerpo de la petición (JSON):**

```json
{
  "texto": "Mi comentario"
}
```

- **Respuesta ejemplo:**

```json
{
  "mensaje": "Comentario agregado",
  "comentario": {
    "texto": "Mi comentario",
    "fecha": "2025-09-27T17:36:46.522Z"
  }
}
```

### 3. Probar endpoints

- **GET:** `http://186.123.108.73:3000/comentarios`
- **POST:** `http://186.123.108.73:3000/comentarios` (JSON: `{"texto": "Mi comentario"}`)

### 4. Hacer un POST desde terminal

```bash
# Instalar curl
sudo apt install curl
```

```bash
# Enviar comentario
curl -X POST http://186.123.108.73:3000/comentarios \
  -H "Content-Type: application/json" \
  -d '{"texto": "Hola Mundo"}'

```