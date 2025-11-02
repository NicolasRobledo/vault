Secciones:
1. Determinacion de requerimientos
2. Ingenieria de requerimientos
3. Principios de Analisis
4. Tecnicas de Relevamiento
5. Especificacion de requisieros de Software

---
Temas teoricos previos:
- **Sistema Objeto**: Sistema por el cual nosotros estamos en condiciones de reconocer cual es la realidad a la que el analista debe atender para uqe pued a mejorar la actividad que se desarrolla en ese sistema
- **Sistema de Infomracion**: Conjunto de elementos que estan tratando de aprortar la informacion necesaria en todos los niveles de la organizacion. Tener presente el esquema de un sistema compuesto por HW, SW, Para informatizarlo a los componentes que hacen al manejo de la informacion Datos personas, politicas documentos, etc. Es un Concepto importante
- **Enfoques Dataloquicos e infrologicos**: 
- **Informacion eficiente**
- **Ciclos de vida**: "Recetas"
- **Perfil del Analista**: Capacidades, caracteristicas, actitudes. Perfil puente entre lo que la empresa quiere y el equipo de trabajo. protagonista principal para la determinacion de requerimiento. 
---

## 🔹 Análisis de Requerimientos

### Determinación de Requerimientos

**Determinación de Requerimientos**: Es el estudio de un sistema con el objetivo de conocer como trabaja y donde es necesario efectuar cambios y mejoras.

Aqui el personaje principal es el *analista funcional*. Este busca como es la realidad delimitada por un limite con esta.

La percepcion de la relaidad que tenga el analista, construye el **Sitema Objeto**.

Dentro del sistema Objeto, el analista comprende el **sistema de informacion**. En particular se presta atencion aqui. este es compuesto por varios elementos (Sistema de DATOS):
- Procedimientos: o froma en la que se hacen las cosas dentro de la organizacion.
- Gente: Trabaja en la organizacion
- documentos: Reflejasn como funciona diariamente la empresa dejando registros de ello.

**Requerimiento**: Caracteristica que debe incluirse en un nuevo sistema.

Esa caracteristica es facil de comprender a simple vista?

*"... Se que crees que comprendes loq ue piensas que de dicho, pero no estoy seguro de que loq ue creiste oir sea lo que yo quise decir"*

Antes de realizar la construccion de un software hayq ue atravezar este terreno complejo.

Requerimientos: Identifiacr descripciones de loque el sistem debe hacer ofrecer, que hacer para cambiar la vida y ayudar las persona y en que restringciones de operaciones deben operar.

**Tipos de Requerimientos**: Define con precicion el sofware que se va a construir.
- **Requerimientos del Usuario**: Descripcion abstractas de alto nivel.
- **Requerimientos del Sistema**:Descripcion del sistema de lo que el sistema debe hacer.
- **Requerimientos Funcionales**: Servicios que el sistema debe proveer, como reacciona a entradas y como deberia comprtarse en sustuaciones especificar. En alcunos casos tambien explican loq ue NO deberia hacer el sistema.
- **Requerimientos no funcionales**: Se relacionan con propiedades del software tales como fiabilidad, velocidad de respuesta, capacidad de almacenamiento, caracteristicas de seguridad, etc.

---

### Ingeniería de Requerimientos
Es el proceso de descubrir, analizarm documentar y verificar los servicios y restringciones se lla,a Ingenieria de requerimientos (IR)

4 etapas:
- **Descubrir**: Mediante las tecnicas apropiadas, establecer las caracteristicas del negocio donde se requiere el software.
- **Analizar**: Organizar las diferentes opciones de solucion, y elegir "La mejor alternativa de solucion"
- **Modelar**: Traducir en modelos la solucion a proponer.
- **Validar**: Chequear con el cliente si el modelo propuesto se ajusta a sus necesidades.

Analisis de requerimientos en el proceso de desarrollo: Se pueden Identificar 5 areas de esfuerzo:
- Reconocimiento del problema
- Evaluación y síntesis
- Modelización
- Especificación
- Revisión

---

### Principio de Análisis: 
- Se debe representar y comprender el ámbito de información del problema.
- Se deben desarrollar los modelos que representen la información, función y el comportamiento del sistema.
- Se deben subdividir los modelos (y el problema) de forma que se descubran los detalles de una manera progresiva (o jerárquica).
- El proceso de análisis debe ir de la información esencial hacia el detalle de la implementación.



---

### Técnicas de Relevamiento
Propuesta tradicional:
1. **Entrevistas**: Encuentro personal para entablar diálogo con las personas adecuadas, a fin de reconocer las características del sistema.
	Entrevistas: Encuantro personal para entavlan rialogo con las personas adecuadas, a fin de reconocer las caracteristicas del sistema.
	
	Se quiere conocer opinión y sentimientos del usuario respecto al estado actual del sistema, objetivos de la organización, características del personal, procedimientos formales e informales, etc.
	
	Tipos de preguntas: La forma en que expresamos nuestras preguntas, condicionanla respuesta del entrevistado:
	- Preguntas abiertas: Permiten expresar libremente la respuesta
	- Preguntas Cerradas: Acoran la respuestas a opciones predefinidas.
	
	Formas de Entrevistas:
	Cuando planificamos una entrevista, podemos definir las siguientes formas:
	- Entrevista estructurada: Establecemos una lista de temas que guían el diálogo, y nos proponemos seguir uno a uno, de principio a fin.
	- Entrevista No Estructurada: Consiste en tener claro el objetivo del diálogo, pero planteamos el diálogo sin temario organizado, sino que abordaremos el tema objetivo en cuanto nos sea posible
	
	Formato de la entrevista: Cuando planificamos la entrevista, determinamos el objetivo del diálogo, respecto a la información que prioritariamente debemos obtener. Además, debemos prever cómo se desarrollará la actividad durante la entrevista. Las entrevistas se pueden abordar en las siguientes formas:
	- Piramidal: Consiste en iniciar directamente enfocados en el objetivo, y luego, de ser posible, ampliar el diálogo a más temas.
	  ![[Pasted image 20251102175425.png]]
	- Embudo: Consiste en iniciar un diálogo con temario amplio, para abordar el tema objetivo hacia el final de la entrevista.
	  ![[Pasted image 20251102175445.png]]
	- Rombo: Consiste en iniciar directamente enfocados en el objetivo, luego ampliar a otros temas, pero regresando al tema objetivo antes de terminar.
	  ![[Pasted image 20251102175501.png]]
	
	Pasos en la preparación de la entrevista:
	1. Lectura de antecedentes
	2. Establecimiento de los objetivos
	3. Selección de los entrevistados
	4. Preparación del entrevistado
	5. Selección del tipo de preguntas
	6. Selección de como documentar
	
	Tipo de informacion Obtenida:
	+ Objetivos
	+ Opiniones
	+ Sentimientos
	+ Procedimientos informales
	
	Recomendaciones Generales:
	+ Observar el objetivo general del sistema que se solicita.
	+ Asegurar el entendimiento y compromiso del entrevistado.
	+ Conducir ordenadamente la entrevista.
	+ Cerrar la entrevista con un tono positivo.
	+ Planificar la reunión con anticipación.
	+ Mantener el control de la entrevista

2. **Cuestionarios**: Consulta masiva, generalmente escrita. Puede ser anónima para favorecer la libre expresión. Los resultados pueden procesarse.
	
	Cuestionarios: Consulta masiva, generalmente escrita. Puede ser anónima para favorecer la libre expresión. Los resultados pueden procesarse.
	
	Permiten:
	- Unir informacion relacionada con varios aspectos de un sistema segun la opinion de un grupo grande de personas
	- Asegurar en anonimato del entrevistado, lo que conduce a respuestas mas honestas.
	- Las respuestas puedes cuantificarse, siendo posible utilizar preguntas abiertas o cerradas.
	- Determinar que tan difundido o limitado se encuentra un sentimiento (que halla sido expresado durante una entrevista)
	- Sondear una gran muestra de usuarios con el fin de detectar problemas (antes de la programación de las entrevistas).
	
	Tipo de infromacion obtenida:
	- Actitudes
	- Opiniones
	- conductas
	- Caracteristicas
	
	Recomendaciones generales:
	- Utilizar Cuestionarios si las personas a quienes se necesita interrogar se encuentran muy dispersas en distintas áreas.
	- Utilizar Cuestionarios si se desea medir la opinión general antes de que un proyecto tome una dirección particular.
	- Utilizar Cuestionarios si se desea sondear problemas del sistema actual para identificarlos y darles seguimiento por medio de entrevistas.

3. **Observación**: Permite verificar en el lugar donde suceden los hechos, cómo realmente se comportan el sistema y las personas.
	
	Observación: Permite verificar en el lugar donde suceden los hechos, cómo realmente se comportan el sistema y las personas.
	
	![[Pasted image 20251102182030.png]]
	
	Tipo de informacion obtenida: Se puede necesitar observar tanto el comportamiento de las personas de la organización, como del ambiente físico en el que se desarrollan  as actividades. Está orientada a verificar cómo se desempeña el sistema actual,  confirmando o corrigiendo lo que pudimos aprender con otras técnicas.

4. **Revisión de registros**: Permite conocer o confirmar, mediante los documentos cotidianos que usa la organización, detalles operativos.
	
	Revision de Registros: Permite conocer o confirmar, mediante los documentos cotidianos que usa la organización, detalles operativos.
	
	Tipo de informacion Obtenida:
	- Estructuras de los datos
	- Registros Informales 
	- Insuficiencia de datos
	
	Se debe verificar la información obtenida de entrevistas y cuestionarios con las reales actividades representadas en documentos y demás papeles de la organización.
	**Es conveniente obtener copias de documentos relevantes que estén usadas y no  formularios en blanco.**
	Al contar con numerosos documentos, informes de salida, etc. que generan los miembros de una organización. ¿A cuáles debe atender el analista y a cuáles debe ignorar?

5. Especificación de requisitos de software
	Introducción
	- Referencia del sistema
	- Descripción General
	- Restricciones del Proyecto software
	Descripción de la información
	- Representación del flujo de información
		- Flujo de Datos
		- Flujo de Control
	- Representación del contenido de la información
	- Descripción de la interfaz del sistema
	Descripción Funcional
	- Partición Funcional
	- Descripción Funcional
		- Narrativa del procesamiento
		- Restricciones / limitaciones
		- Requisitos de rendimiento
		- Restricciones de diseño
		- Diagramas de soporte
	- Descripción del Control
		- Especificaciones del Control
		- Restricciones de diseño
	Descripción del Comportamiento
	- Estados del Sistema
	- Sucesos y acciones
	Criterios de Validación
	- Límites de rendimiento
	- Clases de Pruebas
	- Respuestas esperadas del software
	- Consideraciones especiales
	Bibliografía
	Apéndice