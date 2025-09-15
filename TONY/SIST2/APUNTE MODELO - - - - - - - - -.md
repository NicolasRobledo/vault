# Títulos
# Título nivel 1
## Título nivel 2
### Título nivel 3
#### Título nivel 4
##### Título nivel 5
###### Título nivel 6

---

# Estilos de texto
**Negrita**  
*Itálica*  
***Negrita e Itálica***  
~~Tachado~~  
<sub>Subíndice</sub>  
<sup>Superíndice</sup>

---

# Listas
- Lista con guiones
* Lista con asteriscos
+ Lista con signo +

1. Lista ordenada
2. Segundo item
   3. Sub-item
   4. Sub-item

- [ ] Tarea hecha
- [x] Tarea pendiente

---

# Citas
> Esto es una cita
>> Cita anidada

---

# Código
Texto en `inline code`

Bloques de código:
``bash
``echo "Hola Mundo"

# Links



---

# Links
[Texto del enlace](https://ejemplo.com)  
[Enlace con título](https://ejemplo.com "Título del enlace")  
<https://ejemplo.com>

---

# Imágenes
![Texto alternativo](https://via.placeholder.com/150 "Título opcional")

---

# Tablas
| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Valor 1   | Valor 2   | Valor 3   |
| Valor A   | Valor B   | Valor C   |

| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
|           |           |           |




---

# Separadores
---
___
***

---

# Bloques especiales (según el renderizador, como GitHub o Obsidian)
**Notas / Alerts usando blockquotes + negrita:**
> **Nota:** Esto es importante.  
> **Tip:** Atajo útil.  
> **Warning:** Cuidado con esto.

---

# Imágenes con tamaño (no estándar, pero soportado en algunos editores como Obsidian o VSCode con extensiones)
<img src="https://via.placeholder.com/150" width="200"/>

---

# Diagramas (si usás Obsidian, Typora o VSCode con plugins)
```mermaid
flowchart TD
    A[Inicio] --> B[Proceso]
    B --> C{Decisión?}
    C -->|Sí| D[Acción 1]
    C -->|No| E[Acción 2]
