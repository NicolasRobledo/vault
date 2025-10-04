```js

const express = require('express');
const { Pool } = require('pg');
const auth = require('./auth');

const app = express();
const port = 3000;

app.use(express.json());

// Configuración de la base de datos
const pool = new Pool({
  user: 'miusuario',
  host: 'localhost',
  database: 'testdb',
  password: 'mipassword',
  port: 5432
});

// Ruta de login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const resultado = await auth.login(pool, email, password);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor en http://0.0.0.0:${port}`);
});

```

```js
module.exports = {
  login: async (pool, email, password) => {
    // Buscar usuario por email
    const result = await pool.query(
      'SELECT id, nombre, apellido, tipo_usuario, password FROM usuarios WHERE email = $1',
      [email]
    );

    // Si no existe el usuario
    if (result.rows.length === 0) {
      return { success: false };
    }

    const usuario = result.rows[0];

    // Comparar contraseñas directamente (sin hash para la maqueta)
    if (usuario.password === password) {
      return {
        success: true,
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          tipo_usuario: usuario.tipo_usuario
        }
      };
    } else {
      return { success: false };
    }
  }
};
```