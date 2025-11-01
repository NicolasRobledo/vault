# Evolución del software
![[img/filmina5/pagina_5.svg]]

## 1° Generación (1940s: Código Binario)
**Contexto histórico:** Desarrollo de la informática durante y después de la Segunda Guerra Mundial.  
**Características:**
- Programación directamente en **código máquina** (0 y 1).  
- Uso de **tarjetas perforadas** para almacenar instrucciones.  
- La ejecución era **lineal**, instrucción por instrucción.  

**Problemas:** Muy difícil de mantener y modificar; dependía completamente del programador original.  

---

## 2° Generación (1950s: Assembler)
**Descripción:** Se introducen los **lenguajes ensambladores**, con **mnemotécnicos de 3 letras** (`MOV`, `ADD`, `JMP`) y direccionamiento de variables en hexadecimal.  
**Ventaja:** Facilita la lectura y escritura del código respecto al lenguaje máquina, aunque sigue siendo dependiente del hardware.  
**Ejecución:** Lineal, con posibilidad de saltos (`GOTO`).  
**Problemas:** Aún complejo de mantener, especialmente en proyectos grandes.  

---

## 3° Generación (1960s: No estructurado)
**Lenguajes representativos:** Fortran, COBOL.  
**Descripción:** Lenguajes de **alto nivel**, más abstractos que Assembler. Permiten **funciones, procedimientos, condicionales y bucles**, pero el código suele ser **no estructurado**.  
**Problemas:** Muchos programas eran difíciles de mantener, mal documentados y dependientes de los programadores originales.  
**Relación con la Crisis del Software:** Este periodo coincide con la **Crisis del Software**, donde grandes proyectos fallaban por falta de planificación, documentación y estándares.  

---

## 3° Generación (1970s: Estructurado)
**Lenguajes representativos:** Pascal, Prolog.  
**Descripción:** Introducción de la **programación estructurada**, con bloques claramente definidos, modularidad y control de flujo más organizado.  
**Ventaja:** Mejora la mantenibilidad y la comprensión del código.  

---

## 4° Generación (1980s: Lenguajes de alto nivel para tareas específicas)
**Lenguajes representativos:** SQL (bases de datos), otros 4GL.  
**Descripción:**
- Lenguajes **de propósito específico**, que permiten realizar tareas complejas con pocas instrucciones.  
- SQL permite **consultar, insertar y modificar datos** de manera declarativa, sin indicar paso a paso cómo se ejecutan las operaciones.  

**Ventaja:** Incrementa la productividad y reduce errores humanos en tareas repetitivas o especializadas.  
**Problemas:** No solucionan todos los problemas estructurales de grandes sistemas heredados.
