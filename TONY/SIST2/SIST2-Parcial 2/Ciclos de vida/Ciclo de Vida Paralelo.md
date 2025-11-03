![[Pasted image 20250916174844.png]]

El **Ciclo de Vida en Paralelo** (también conocido como **por subsistemas o en cascada paralela**) funciona así:

---

## Ciclo de Vida en Paralelo

La idea principal es **dividir el sistema completo en subsistemas (S₁, S₂, S₃, S₄, …)** y que cada uno de ellos recorra sus fases de desarrollo **de manera independiente, pero en paralelo al resto**.

### Estrategia

- El sistema **S** se divide en subsistemas más pequeños (**S₁, S₂, S₃, S₄**).
    
- Cada subsistema sigue el ciclo clásico:  
    **Análisis → Diseño → Código → Prueba → Entrega**
    
- Las fases no se ejecutan en serie para todo el sistema, sino que **cada subsistema puede estar en una fase distinta al mismo tiempo**.

---

### Características

1. **Trabajo en paralelo**: no se espera a que un subsistema termine para empezar otro.  
    Ejemplo: mientras S₁ está en **prueba**, S₂ puede estar en **código**, S₃ en **diseño**, y S₄ en **análisis**.
    
2. **Optimización del recurso humano**:  
    Los distintos roles (analistas, diseñadores, programadores, testers) trabajan al mismo tiempo, pero en subsistemas diferentes.
    
3. **Referencia temporal (t₁, t₂, t₃, t₄)**:  
    Permite visualizar cómo se van solapando las actividades.
    
    - En un mismo momento **tᵢ**, los equipos están trabajando en distintas fases de subsistemas diferentes.
        
4. **Posibilidad de retroceso**:  
    Se puede volver atrás en un subsistema si se detectan errores o riesgos.
    
5. **Entrega incremental**:  
    Cada subsistema se entrega cuando pasa su fase de prueba, por lo que el sistema final se construye por partes.
    

---

### Ventajas

- Reduce tiempos totales de desarrollo (se trabaja en paralelo).
    
- Optimiza la carga de trabajo de los equipos.
    
- Permite entregar partes del sistema más rápido.
    

### Desventajas

- Mayor complejidad de coordinación.
    
- Riesgo de **inconsistencias** si no se controlan bien las interfaces entre subsistemas.
    
- Dependencia entre entregas parciales: un error en un subsistema puede afectar al resto.

---

### Cita Pelada:

> _Hay que poner todo lo que dijo esa pelada acerca de esto... AYÚDAME A COMPLETAR ESTA PARTE ROBLE-DIOS
