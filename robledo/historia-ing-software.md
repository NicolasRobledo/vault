Perfecto 🙌 Lo que compartiste son **apuntes de clase muy esquemáticos**. Te armo una **versión en lenguaje natural, desarrollada y complementada**, como si fuera un resumen narrado para *Sistemas II* en Ingeniería del Software.

---

# 📖 Introducción a la Ingeniería del Software

Perfecto, podemos explicar el gráfico **en orden cronológico** integrando la historia de los lenguajes de programación y cómo se relacionan con la crisis del software. Te propongo una explicación detallada:

---

## Evolución del Software según el gráfico
![[documentacion/_5_IngSoftware_CV.pdf#page=5]]



1. **1940 – Primera generación (1G: Código Binario)**

   * **Contexto histórico:** Desarrollo de la informática durante y después de la Segunda Guerra Mundial.
   * **Características:**
     * Programación directamente en **código máquina** (0 y 1).
     * Uso de **tarjetas perforadas** para almacenar instrucciones.
     * La ejecución era **lineal**, instrucción por instrucción.
   * **Problemas:** Muy difícil de mantener y modificar; dependía completamente del programador original.
   * **Aforismo:** “Cada bit cuenta, y cada error cuesta.”

2. **1950 – Segunda generación (2G: Assembler)**

   * **Descripción:** Se introducen los **lenguajes ensambladores**, con **mnemotécnicos de 3 letras** para representar instrucciones (`MOV`, `ADD`, `JMP`) y direccionamiento de variables en hexadecimal.
   * **Ventaja:** Facilita la lectura y escritura del código respecto al lenguaje máquina, aunque sigue siendo dependiente del hardware.
   * **Ejecución:** Lineal, con posibilidad de saltos (`GOTO`).
   * **Problemas:** Aún complejo de mantener, especialmente en proyectos grandes.
   * **Aforismo:** “Un nombre hace la instrucción más humana, pero el error sigue siendo mortal.”

3. **1960 – Tercera generación (3G: No estructurado)**

   * **Lenguajes representativos:** Fortran, COBOL.
   * **Descripción:** Lenguajes de **alto nivel**, más abstractos que Assembler. Permiten **funciones, procedimientos, condicionales y bucles**, pero el código suele ser **no estructurado**.
   * **Problemas:** Muchos programas eran difíciles de mantener, mal documentados y dependientes de los programadores originales.
   * **Relación con la Crisis del Software:** Este periodo coincide con la **Crisis del Software**, donde grandes proyectos fallaban por falta de planificación, documentación y estándares.
   * **Aforismo:** “La abstracción salva tiempo, pero no reemplaza la disciplina.”

4. **1970 – Tercera generación (3G: Estructurado)**

   * **Lenguajes representativos:** Pascal, Prolog.
   * **Descripción:** Introducción de la **programación estructurada**, con bloques claramente definidos, modularidad y control de flujo más organizado.
   * **Ventaja:** Mejora la mantenibilidad y la comprensión del código.
   * **Aforismo:** “Estructura y claridad son los pilares del software sostenible.”

5. **1980 – Cuarta generación (4G: Lenguajes de alto nivel para tareas específicas)**

   * **Lenguajes representativos:** SQL (para bases de datos), otros 4GL.
   * **Descripción:**
     * Lenguajes **de propósito específico**, que permiten realizar tareas complejas con pocas instrucciones.
     * SQL permite **consultar, insertar y modificar datos** de manera declarativa, sin indicar paso a paso cómo se ejecutan las operaciones.
   * **Ventaja:** Incrementa la productividad y reduce errores humanos en tareas repetitivas o especializadas.
   * **Problemas:** No solucionan todos los problemas estructurales de grandes sistemas heredados.
   * **Aforismo:** “No hay lenguaje que sustituya un buen diseño de sistema.”

---

¡Claro! Te lo explico de manera clara y cronológica:

---

## Crisis del software en los años 60

Durante la **década de 1960**, la informática comenzó a expandirse rápidamente: grandes computadoras se utilizaban para tareas complejas en empresas, gobiernos y universidades. Sin embargo, surgió un problema crítico que se llamó la **crisis del software**.

### ¿Qué pasaba exactamente?

1. **Falta de documentación:**
   Los programas se desarrollaban casi siempre de manera artesanal. Los programadores escribían código para cumplir funciones específicas, pero **no dejaban documentación clara** sobre cómo funcionaba ni sobre su mantenimiento. Esto generaba problemas enormes cuando otro programador intentaba entender, modificar o mejorar el software.

2. **Proyectos que fallaban o se retrasaban:**
   Los sistemas eran cada vez más complejos, y los errores eran difíciles de detectar. Muchos proyectos de software **no se terminaban a tiempo** o **no funcionaban correctamente**, lo que aumentaba costos y frustración.

3. **Difícil mantenimiento:**
   Cambiar o actualizar programas antiguos era muy complicado porque **nadie sabía exactamente cómo estaban construidos**. Esto hacía que el software fuera frágil y propenso a errores.

### Reacción de la comunidad científica

Debido a estos problemas, varios **científicos de la computación y programadores se reunieron** para buscar soluciones. En 1968, se celebró la **conferencia de la NATO sobre software**, que es considerada un hito histórico. Allí se discutieron los problemas del desarrollo de software y se propuso una **solución estructurada**:

* Aplicar principios **ingenieriles al desarrollo de software**.
* Introducir **documentación, planificación y métodos sistemáticos**.
* Crear **procesos de diseño, pruebas y mantenimiento** como parte de un ciclo de vida formal.

### Surgimiento de la Ingeniería de Software

De esta reunión y las discusiones posteriores nació el concepto de **ingeniería de software**, que buscaba:

* Tratar el desarrollo de software como una **disciplina profesional** y no solo artesanal.
* Garantizar que los sistemas sean **fiables, mantenibles y documentados**.
* Introducir metodologías, herramientas y estándares que redujeran errores y mejoraran la productividad.


---

## 1️⃣ Qué es la **Ingeniería**

La **ingeniería** es la disciplina que aplica **conocimientos científicos, matemáticos y técnicos** para **diseñar, construir y mantener soluciones útiles** a problemas del mundo real.

En otras palabras:

* No es solo “hacer cosas que funcionan”, sino **hacerlas de manera planificada, segura y eficiente**.
* Por ejemplo: un ingeniero civil no solo pone ladrillos; diseña estructuras resistentes, calcula fuerzas y documenta todo el proceso.

---

## 2️⃣ Qué es la **Ingeniería de Software**

La **ingeniería de software** aplica los mismos principios de la ingeniería **pero al software**.

* Antes de la crisis de los 60, el software se hacía “artesanalmente”: cada programador hacía lo que podía y a su manera.
* Esto generaba problemas enormes: errores, retrasos, falta de mantenimiento y poca documentación.

Entonces, la ingeniería de software se propuso:

1. **Planificación**: definir qué debe hacer el software antes de empezar a programar.
2. **Diseño estructurado**: pensar la arquitectura, módulos y funciones antes de escribir código.
3. **Documentación**: dejar registro de cómo funciona y cómo mantenerlo.
4. **Pruebas y mantenimiento**: asegurarse de que el software funcione correctamente y pueda actualizarse sin romperlo.

✅ Es decir, **llevar la disciplina y la sistematicidad de la ingeniería clásica al mundo del software**.

---

💡 **Analogía:**

* Hacer software sin ingeniería es como construir un puente sin cálculos: puede sostenerse por suerte, pero es muy arriesgado y difícil de mantener.
* La ingeniería de software garantiza que el software sea **robusto, confiable y sostenible**.

---

Si querés, puedo hacer un **diagrama simple que muestre la relación entre ingeniería e ingeniería de software**, para que lo tengas más visual.

¿Querés que haga eso?

---

## Proceso de Construcción de Software

Todo proyecto de software sigue, en esencia, un **proceso de resolución de problemas**:

1. Identificar el problema.
2. Definirlo y representarlo claramente.
3. Explorar distintas estrategias de solución.
4. Aplicar la estrategia elegida.
5. Evaluar los resultados y retroalimentar.

Esto se traduce en las fases clásicas: **estudio de necesidades, análisis, diseño, construcción, instalación, mantenimiento y eventual retiro** del sistema.

---

## Proceso Software vs. Ciclo de Vida del Software

* El **proceso de software** es la colección de actividades que permiten desarrollarlo.
* El **ciclo de vida del software** es la mirada desde el punto de vista del producto: desde la concepción hasta su retiro.

Un proyecto de software combina ambas perspectivas: cómo trabajamos (proceso) y cómo evoluciona el producto (ciclo de vida).

---

## Modelos de Ciclo de Vida

Para organizar el trabajo, la ingeniería de software propuso **modelos de ciclo de vida**, que son estrategias para ordenar y relacionar las actividades.

1. **Modelo Clásico o en Cascada (Royce, 1970):**

   * Fases secuenciales: análisis → diseño → codificación → pruebas → instalación.
   * Muy estructurado pero poco flexible: si un requisito cambia, es difícil volver atrás.

2. **Modelo de Prototipado (Bohem, 1981; Martin, 1982):**

   * Se construyen prototipos rápidos que el cliente evalúa.
   * Permite refinar los requisitos y reducir riesgos.
   * Puede ser **evolutivo** (se mejora hasta ser el producto final) o **desechable** (sirve solo para aclarar ideas).

3. **Modelo en Espiral (Bohem, 1986):**

   * Integra prototipado con análisis de riesgos.
   * El desarrollo avanza en “vueltas” o espirales: cada vuelta planifica, analiza riesgos, desarrolla y valida.
   * Es muy usado en proyectos complejos y de gran incertidumbre.

4. **Modelo en Paralelo:**

   * El sistema se divide en **subsistemas** que se desarrollan en paralelo.
   * Permite aprovechar mejor los recursos humanos y reducir tiempos.
   * Requiere buena coordinación para integrar todo al final.

---

✅ En síntesis:
La **Ingeniería del Software** surge como respuesta a la crisis, con el objetivo de **organizar, planificar y profesionalizar el desarrollo de programas**. Los distintos modelos de ciclo de vida son formas de guiar el proceso, cada uno con ventajas y desventajas según el tipo de proyecto.

---

¿Querés que te arme este contenido en un **resumen tipo apunte para estudiar** (breve y esquemático) o en un **texto más narrado y descriptivo** (como si fuera un capítulo de libro)?
