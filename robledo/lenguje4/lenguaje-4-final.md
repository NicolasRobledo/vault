```js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(express.json());

// Config conexión
const pool = new Pool({
  user: 'miusuario',
  host: 'localhost',
  database: 'testdb',
  password: 'mipassword',
  port: 5432
});

// Diccionario de procedimientos permitidos
const procedures = {
  obtenerComentarios: "SELECT * FROM obtener_comentarios()",   // sin args
  insertarComentario: "SELECT * FROM insertar_comentario($1)", // 1 arg
  buscarPorFecha: "SELECT * FROM buscar_por_fecha($1, $2)"     // 2 args
};

// Endpoint genérico
app.post('/procedure', async (req, res) => {
  try {
    const { procedure, args } = req.body;

    // Validar que exista en el diccionario
    if (!procedures[procedure]) {
      return res.status(400).json({ error: 'Procedimiento no permitido' });
    }

    // Ejecutar el procedimiento
    const result = await pool.query(procedures[procedure], args || []);

    res.json({
      mensaje: `Procedimiento ${procedure} ejecutado`,
      resultado: result.rows
    });
  } catch (err) {
    console.error('Error ejecutando procedimiento:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Iniciar servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor iniciado en http://0.0.0.0:${port}`);
});


```
