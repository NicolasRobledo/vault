#

# 📚 Proyecto Compartido en Obsidian

Este repositorio está diseñado para **trabajo colaborativo con Obsidian**.  
Cada participante tiene su espacio personal y además existe un **área común** para notas e imágenes, editable por todos.

---

## 📂 Estructura de directorios

```
.
├── cayapa/          # Resúmenes y notas personales de Cayapa
├── robledo/         # Resúmenes y notas personales de Robledo
├── tony/            # Resúmenes y notas personales de Tony
├── comun/           # Área compartida (todos pueden editar)
│   ├── materias/    # Notas organizadas por materia
│   └── imagenes/    # Recursos gráficos compartidos
└── documentacion/   # Manuales y guías generales
```

---

## 📌 Reglas de colaboración

### Carpetas personales
Cada uno organiza sus resúmenes y notas a su manera.  
Son de uso personal: no modificar las carpetas de otros sin permiso.

### Área común
**`materias/`** → notas compartidas, organizadas por asignatura.  
**`imagenes/`** → imágenes y recursos gráficos de uso común.  
Es un espacio **dinámico y libre**, todos pueden editar.  
Mantener respeto: antes de formatear o reorganizar, considerar el trabajo previo de otros.

### Documentación
Aquí van manuales, guías o explicaciones generales.

---

## 🔄 Flujo de trabajo con Git

### Antes de trabajar
```bash
git pull
```
Para traer los cambios más recientes.

### Opciones de trabajo
**Opción simple (recomendada):** Trabajar directo en tu **repositorio local** y hacer commit/push de los cambios.  

**Opción avanzada:** Crear una **rama propia** y luego hacer un **merge** hacia `main` o `master`.
```bash
git checkout -b mi-rama
```

### Al terminar
```bash
git add .
git commit -m "Descripción clara del cambio"
git push
```

### Para colaborar en el área común
Hacer los cambios en `comun/` siguiendo la estructura de carpetas (`materias/`, `imagenes/`).  
Si usás ramas, mergear después hacia `main`.

---

## ✅ Buenas prácticas

Usar nombres claros para archivos (ej: `algebra_lineal_resumen.md`, `diagrama_vectores.png`).  
Respetar las estructuras de carpetas para evitar desorden.  
Si hay cambios grandes en `comun/`, explicarlos bien en el commit.  
Coordinar merges importantes para evitar conflictos.  
Recordar que el **área común es de todos**, y que cada uno organiza su carpeta personal como prefiera.

---

## ✍️ Colaboradores iniciales

- Cayapa
- Robledo  
- Tony
