## Diseño e Ingeniería del Software
**Diseño**: *“Proceso de aplicar distintas técnicas y principios con el propósito de definir un  dispositivo, un proceso o un sistema con suficiente detalle como para permitir su realización física”*

Suponiendo que se han analizado y especificado los requisitos del software, el diseño es la primera actividad técnica necesaria para construir y verificar el software. (diseño, codificación, prueba)

Transformación del Modelo de Análisis en un Diseño de Software
![[Pasted image 20251102185529.png]]

---
## Proceso de Diseño
El proceso de diseño es un conjunto de pasos repetitivos que permiten al diseñador describir todos los aspectos del software a construir. La capacidad creativa, la experiencia acumulada, el sentido de “buen software” y un empeño global en la calidad son factores críticos del éxito del diseño.
El modelo del diseño es el equivalente a los planos de una casa.

---
## Conceptos de Diseño

**Abstraccion**
La solución a un problema se puede plantear en diferentes niveles de detalle. En un nivel alto de abstracción, se reduce el problema a expresiones referidas al comportamiento global del sistema, sin preocupaciones respecto a cómo implementar la solución al problema en cuestión mediante computadoras.
A medida que se avanza en el desarrollo del sistema, se baja de nivel de abstracción (se manejan más detalles) y se incorporan consideraciones de la implementación en un ambiente tecnológico concreto. *Existen abstracciones de datos, procedimentales y de control.*

**Refinamiento**
El refinamiento paso a paso es una estrategia de diseño descendente (Niklaus Wirth).
Es un proceso de elaboración. Se inicia enunciando funciones a un alto nivel de abstracción, sin informar sobre los procesos internos de la función o la estructura interna de la función. Se proporciona más detalle en cada refinamiento sucesivo.

*La abstracción y el refinamiento son conceptos complementarios*.

**Modularidad**
Se divide al software en componentes identificables y tratables por separado (módulos), que se integran para satisfacer los requisitos del programa.
*“La modularidad es el atributo del software que permite a un programa ser manejable intelectualmente”*

Se llama software *monolítico* al que se desarrolla como un único módulo. Es muy difícil de entender en cuanto a sus caminos de control, ámbito de referencia, número de variables y complejidad global.

**Costos Integracion & por modulo**
![[Pasted image 20251102190818.png]]

**Arquitectura de Software**:
La arquitectura del software alude a *“la estructura global del software y las maneras en que esa estructura proporciona integridad conceptual a un sistema”* 
Es la estructura jerárquica de los componentes del programa (módulos), la manera de interactuar de estos componentes, y la estructura de datos usados por esos componentes.
Se deben especificar:
- Propiedades estructurales: Define los componentes de un sistema.
- Propiedades extra-funcionales: Debe describirse cómo se espera obtener rendimiento, capacidad, fiabilidad, seguridad, adaptabilidad y otras características.
- Familias de sistemas relacionados: Deberían reutilizarse esquemas definidos previamente.

**Jerarquía de Control**
Representa la organización (a menudo jerárquica) de componentes del programa. No representa aspectos procedimentales del software.
+ Profundidad: Número de niveles de control.
+ Anchura: Ámbito global de control.
- Grado de Salida: medida del número de módulos controlados directamente por un módulo.
- Grado de Entrada: Indica cuántos módulos controlan directamente al módulo en cuestión.
Existen los conceptos de *superior a* y *subordinado de* para indicar jerarquía
![[Pasted image 20251102191542.png]]

**Partición estructural**
*La partición horizontal* define ramas separadas de la jerarquía modular para cada función principal del programa. Los módulos de control se usan para coordinar la comunicación entre ellas y la ejecución de las funciones del programa. El enfoque más simple define tres particiones: *entrada, procesamiento y salida*.
Beneficios:
- Software más fácil de probar
- Software más fácil de mantener
- Propaga menos efectos secundarios
- Software más fácil de ampliar
![[Pasted image 20251102191932.png]]

*La partición vertical* (descomposición en factores) sugiere que *el control y el trabajo se distribuyan descendentemente en la arquitectura del programa*. Los módulos superiores deberían realizar funciones de control y poco trabajo de procesamiento. Los módulos de nivel inferior deberían realizar las tareas de entrada, procesamiento y salida.
Un cambio en un módulo de control (parte alta de la arquitectura) tiene mayor probabilidad de propagar error a otros módulos subordinados, al contrario de cambios en los módulos de trabajo.
![[Pasted image 20251102191947.png]]

**Estructura de Datos**
Es la representación de la lógica entre los elementos individuales de datos.
- *Elemento escalar es la forma más simple*.
- *Vector secuencial*
- *Espacio n-dimensional (matriz)*
- *Lista enlazada*
- *Estructura de datos jerárquica*
Las estructuras de datos pueden representarse a distintos niveles de abstracción.
Una pila es un modelo conceptual de una estructura que puede implementarse como un vector o como una lista enlazada.

**Procedimiento del software**
La estructura del programa define la jerarquía de control sin tener en cuenta la secuencia del procesamiento y las decisiones. *El procedimiento del software se centra en los detalles de procedimiento de cada módulo individualmente*.

Existe una relación entre la estructura y el procedimiento. La representación del procedimiento del software debe incluir referencias a todos los módulos subordinados.

**Ocultamiento de la Información**
¿Cómo descomponemos una solución software para obtener el mejor conjunto de módulos?
El *ocultamiento de información* significa que se deben diseñar los módulos de manera tal que la información dentro del módulo (procedimiento y datos) sea inaccesible a otros módulos que no necesiten esa información.
Los módulos deberían comunicarse entre ellos sólo con la información mínima y necesaria para actuar.

## Diseño Modular Efectivo
El *Diseño modular* reduce la complejidad, Facilita los cambios y el mantenimiento. Fomenta el desarrollo en paralelo por parte de un equipo de trabajo.
Conceptos:
- Independencia Funcional: ...
- Cohesión: Es una medida de la fuerza funcional relativa de un módulo
  ![[Pasted image 20251102192826.png]]
- Acoplamiento: Es una medida de la interdependencia entre módulos del software
  ![[Pasted image 20251102192853.png]]

## Heurísticas de Diseño
## Especificación del Diseño
