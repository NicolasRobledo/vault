# Segunda clase

---

## ¿Qué significa diseño de software?

**Analista ≠ Diseñador**

Las técnicas de relevamiento van juntas y complementan el análisis, las especificaciones y los requerimientos.  
En la práctica, uno hace todo limpio… y también hace café ☕.

El diseñador es un personaje con características distintas del analista; está preparado para **trabajar con él**.  
El diseño es una **actividad más técnica**.

---

## Ingeniería de software

La ingeniería de software es la aplicación del conocimiento transmitido por otros ingenieros.  

> “Cuando no hay ingeniería, hay artesanía.”

El diseño es algo de ingenieros, **no es artesanal**.  
Los planes y otros programas o procesos de software involucran muchas actividades dentro del marco del proceso.  
Por eso, se ve el diseño como si fuera un proceso: **primer concepto**.

---

## ¿Qué es el diseño?

Es el proceso de aplicar técnicas, con el objetivo de definir algo con el suficiente nivel de detalle —un artefacto o un software—.  
Un elemento lo delegamos planteado de modo que un programador pueda construirlo sin tener que preguntarse *“¿cómo?”*.  
No debe tener que pensar cómo se hace la letra “x” o cómo la “b”, “b”.  

El diseño se aplica tanto a **dispositivos físicos** como a **software**, con el suficiente nivel de detalle para que pueda construirse correctamente.

---

## Aspectos del diseño

Existen **cuatro planos**.  
Si no están, el programador tiene que tomar decisiones o preguntar.

- ¿Cómo es posible que exista el teletrabajo o trabajo remoto?  
- ¿Por qué existen los planos?

Si el desarrollador no tiene nada que hacer en ese momento,  
se refiere a que el gerente debe decirle qué hacer todo el tiempo,  
porque **no hay planos definidos**.

![[Drawing-planos.excalidraw]]

> “Donde va una puerta, no puede ir un caño.”  
> Esto es una contradicción.

En el software hay muchos planos.  
Lo que hicimos en la práctica fue el **plano de interfaz de usuario**, que es un tipo de plano:

- Interfaz de usuario  
- Plano de datos  
- Diseño de algoritmo  
- Diseño arquitectónico  

> “No deberías pensar que algo está en otro plano y no en el tuyo;  
> los planos deben ser **constantes y balanceados** entre ellos.”

---

## Tipos de diseño

**Diseño de datos:** tablas y atributos.  
**Diseño arquitectónico:** manifiesta cómo se construye el software.  
**Diseño procedimental:** diseña el algoritmo en detalle.

Tiene el algoritmo que quiere, por ejemplo:
- *Login*  
- *Autenticación / sin autenticación*

> ¿Cuál es el mejor nivel de detalle del algoritmo?  

Debe explicar lo que hace el software en esa porción;  
cada pieza de software se explica detalladamente.

- **Pseudocódigo:** “Se puede seguir bajando el nivel de detalle, pero para eso ya lo programo yo.”

---

## Contexto histórico

Estos fueron los principales hasta hace poco.  
Antes, a nadie se le ocurría dónde y cuándo mostrar algo en el monitor.  

**Contexto histórico:** hasta hace poco los monitores solo podían mostrar texto, en un solo color.  
Eran monitores **CRT de fósforo**.  
Luego aparecieron los **píxeles**, y más tarde los **monitores a color**.  
Ahí es cuando surgen diferentes formas de mostrar las cosas.

![[Drawing-tipos-planos.excalidraw]]

> Ejemplifique un software que cumpla este ordenamiento con capas.  
> ¿Cuáles son las nuevas técnicas de diseño?  
> Describa diseño de datos.

---

## Del análisis al diseño

El **modelo de diseño** se alimenta del **análisis**, hacia el diseño con las especificaciones de requerimientos.

**Diseño de interfaz:**  
Las distintas ventas de productos se parecen entre sí; por ejemplo, un sitio que vende zapatillas tiene interfaces parecidas a otro que vende otro producto.

> ¿Qué es software de calidad?  
> ¿Qué tan buenos somos diseñando calidad?

---

## Diseño arquitectónico

**404 — Falta desarrollar.**

> “Desarrollamos software como hacemos café.”  
> Es algo noble: lo hacemos entre ingenieros.  
> Es un embole la gente que no cuida los detalles.

> ¿Qué es la calidad de software? → *Ojo con los detalles.*

---

## Abstracción vs. Detalle

Mientras más abstracto, menos detalle.  
Hay que encontrar un **equilibrio** entre el detalle y la abstracción.

Puedo trabajar con altísimos niveles de abstracción,  
pero si necesito más detalle, debo abandonar parte de esa abstracción y agregar detalles.

> “Nunca tu primer boceto es el final.”

![[Drawing-Refinamiento.excalidraw]]

> ¿Qué es refinamiento? → “Un proceso de ir a lo más detallado, a partir de lo general.”  
> ¿Refinamiento y abstracción son diferentes?

El **refinamiento** es la acción para conseguir detalle.

---

## Módulos y modularidad

> ¿Qué es un módulo?  
> Es un **pedazo de software**.

**Ejemplo de módulo:**  
“Clientes” es una porción de software cuantificable, con nombre.

Entonces, ¿qué es la **modularidad**?  
Es el concepto que nos incita a **dividir el software en módulos**.  

Un software comercial tiene miles de líneas de código;  
dividirlo en porciones permite crear **partes reutilizables y manejables**.

> “La modularidad es buenísima.”

> ¿Cuántos pedazos?  
> “Si no está en porciones —una sola porción—, tengo un software monolítico.”  

El **software monolítico** (software con un solo módulo) es la forma en que originalmente se hacía el software.

---

## Modularidad vs. Monolito

![[Drawing-Modulo-Monolito.excalidraw]]
