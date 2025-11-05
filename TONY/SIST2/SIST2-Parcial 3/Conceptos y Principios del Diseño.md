## Diseño e Ingeniería del Software
**Diseño**: *“Proceso de aplicar distintas técnicas y principios con el propósito de definir un  dispositivo, un proceso o un sistema con suficiente detalle como para permitir su realización física”*

Suponiendo que se han analizado y especificado los requisitos del software, el diseño es la primera actividad técnica necesaria para construir y verificar el software. (diseño, codificación, prueba)

Transformación del Modelo de Análisis en un Diseño de Software
## Diseño e Ingeniería del Software

**Diseño**: *“Proceso de aplicar distintas técnicas y principios con el propósito de definir un dispositivo, un proceso o un sistema con suficiente detalle como para permitir su realización”*.

Suponiendo que se han analizado y especificado los requisitos del software, el diseño es la primera actividad técnica necesaria para construir y verificar el software.

Esta recopilación fusiona tus apuntes de clase y las diapositivas en un único documento, organizado para repaso rápido antes del examen.

---

## 1. Proceso de diseño

El proceso de diseño es iterativo: se empieza en niveles altos de abstracción y se refina hasta especificaciones suficientes para implementar. Es equivalente a producir los planos de una casa: deben ser comprensibles y completos.

- Empezar abstracto y refinar (abstracción y refinamiento).
- Validar con el equipo y, cuando corresponda, con usuarios.
- Mantener coherencia entre niveles (datos, arquitectura, interfaces, procedimientos).

---

## 2. Conceptos clave

### Abstracción
Nivel de detalle con el que se expresa una solución. Niveles altos reducen complejidad, niveles bajos muestran implementación.

### Refinamiento
Estrategia descendente: definir funciones en alto nivel y detallar progresivamente (Niklaus Wirth).

### Ocultamiento de la información
Diseñar módulos que escondan sus detalles internos y expongan solo la interfaz necesaria.

---

## 3. Niveles de diseño (la pirámide)

1. Diseño de datos: modelos y estructuras que soportan la información (DER, tablas, atributos, restricciones).
2. Diseño arquitectónico: componentes, subsistemas y conectividad general.
3. Diseño de interfaz: cómo interactúan módulos entre sí y con usuarios (pseudocódigo, layouts, bosquejos de pantalla, aspectos estáticos y dinámicos).
4. Diseño procedimental: especificación detallada de algoritmos y procedimientos.

Cada nivel debe ser consistente con los demás.

---

## 4. Diseño modular efectivo

Objetivo: dividir el sistema en módulos claros y manejables.

Principios:
- Independencia funcional: cada módulo realiza una función clara.
- Cohesión: medir qué tan relacionadas están las responsabilidades dentro de un módulo (alta cohesión = bueno).
- Acoplamiento: medir dependencias entre módulos (bajo acoplamiento = bueno).

Beneficios: facilita pruebas, mantenimiento, paralelismo en el desarrollo y reutilización.

---

## 5. Estructura y jerarquía de control

- Profundidad: número de niveles jerárquicos.
- Anchura: cantidad de módulos en un mismo nivel.
- Grado de salida: cuántos módulos controla directamente un módulo.
- Grado de entrada: cuántos módulos controlan directamente al módulo.

Partición horizontal: separar en ramas funcionales (ej. entrada, procesamiento, salida).
Partición vertical: jerarquía de control (módulos superiores controlan, módulos inferiores realizan trabajo).

Conocer estas medidas ayuda a identificar puntos de riesgo y de complejidad en la arquitectura.

---

## 6. Estructuras de datos y procedimientos

Estructuras comunes: escalares, vectores, matrices, listas enlazadas, estructuras jerárquicas. Elegir la representación adecuada según requisitos de rendimiento y uso.

El diseño procedimental describe el comportamiento interno de los módulos (pseudocódigo, diagramas de flujo, DTE, etc.).

---

## 7. Diseño de interfaz (UI)

Elementos a considerar:
- Objetivo de la pantalla
- Funcionalidad requerida
- Organización y composición (consistencia entre pantallas)
- Tipografía y colores (coherencia visual y semántica)
- Iconos, botones, campos, menús, pestañas, grillas y notificaciones

Recomendaciones: mantener patrones visuales consistentes, prototipar, y preparar la presentación del prototipo para la exposición práctica.

---

## 8. Ciclos de vida y su relación con el diseño (resumen breve)

- Clásico (secuencial): simple y claro; útil con requisitos estables.
- Prototipado: útil si los requisitos son inciertos; implica diseño rápido y iteración con el cliente (ojo con el apego al prototipo).
- Espiral: para proyectos con riesgos importantes; incorpora análisis de riesgos en cada iteración.
- Paralelo: dividir por subsistemas y trabajar en paralelo; requiere buena coordinación.

El ciclo de vida elegido condiciona la manera de diseñar y validar (más iteraciones = más refinamiento y revisión).

---

## 9. Técnicas de relevamiento (contexto de requisitos)

- Entrevistas, cuestionarios, observación y revisión de registros. Estas técnicas alimentan el modelo de análisis que se transforma en diseño.

---

## 10. Heurísticas, ejemplos y ejercicios para repasar

- Explica con un ejemplo corto la pirámide de niveles de diseño.
- Para modularidad: toma un pequeño caso (registro de remitos) y define 3-4 módulos con responsabilidades.
- Para UI: bosqueja una pantalla, define objetivo, campos obligatorios, botones y mensajes de error.

Si quieres, puedo añadir ahora tres ejercicios resueltos (mini DER, bosquejo de interfaz y pseudocódigo) para practicar.

---

## Resumen rápido para el parcial

- Diseño = transformar requisitos en planos.
- Cuatro niveles: datos, arquitectura, interfaz, procedimental.
- Principios: modularidad, abstracción, refinamiento, ocultamiento de información, cohesión alta y bajo acoplamiento.
- Medidas: profundidad, anchura, grado entrada/salida.
- Conocer brevemente cuándo usar cada ciclo de vida.

---

Referencias: apuntes de clase (12Sep, 17Oct, 19Sep, 24Sep, 24Oct) y la diapositiva `_8_Disenio.pdf`.
