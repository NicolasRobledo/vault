# Resumen Completo: Configuración PostgreSQL + Node.js

## 1. Conectarse como superusuario y crear usuario/DB

```bash
sudo -u postgres psql
```

## 2. Comandos SQL esenciales (ejecutar en psql)

### Crear usuario y base de datos

```sql
CREATE USER miusuario WITH PASSWORD 'mipassword';
CREATE DATABASE testdb OWNER miusuario;
\q
```

### Conectarse con el nuevo usuario

```bash
psql -U miusuario -d testdb -W
```

### Crear tabla y permisos

```sql
-- Crear tabla
CREATE TABLE comentario (
    id SERIAL PRIMARY KEY,
    texto TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de prueba
INSERT INTO comentario (texto) VALUES ('Hola mundo');

-- Dar permisos
GRANT ALL PRIVILEGES ON TABLE comentario TO miusuario;
GRANT ALL PRIVILEGES ON SEQUENCE comentario_id_seq TO miusuario;

-- Verificar
SELECT * FROM comentario;
\dp comentario
```

## 3. Código Node.js final (`app.js`)

```javascript
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// ✅ 1. AGREGAR ESTO: Para poder recibir JSON en POST
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
    res.status(500).json({error: err.message});
  }
});

// ✅ 2. AGREGAR ESTA RUTA POST:
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
    res.status(500).json({error: err.message});
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});

```

## 4. Comandos para ejecutar

```bash
# Instalar dependencias
npm install express pg

# Ejecutar servidor
node app.js
```

## 5. Probar endpoints

- **GET:** `http://localhost:3000/comentarios`
- **POST:** `http://localhost:3000/comentarios` (JSON: `{"texto": "Mi comentario"}`)
# 6.hacer un post
```bash
# Instalar curl
sudo apt install curl

# Una vez instalado, usa tu comando:
curl -X POST http://localhost:3000/comentarios \
  -H "Content-Type: application/json" \
  -d '{"texto": "Comentario desde terminal"}'

```