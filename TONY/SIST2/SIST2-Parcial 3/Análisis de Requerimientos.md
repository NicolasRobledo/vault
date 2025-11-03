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

Aqui el personaje principal es el **analista funcional**. Este busca como es la **realidad** delimitada por un limite con esta.

La percepcion de la relaidad que tenga el analista, construye el **Sitema Objeto**.

Dentro del sistema Objeto, el analista comprende el **sistema de informacion**. En particular se presta atención aquí. este es compuesto por varios elementos (**Sistema de DATOS**):
- *Procedimientos*: o forma en la que se hacen las cosas dentro de la organizacion.
- *Gente*: Trabaja en la organización
- *documentos*: Reflejan como funciona diariamente la empresa dejando registros de ello.

**Requerimiento**: (= **Requisito**) Característica que debe incluirse en un nuevo sistema. Es una característica solicitada por nuestro cliente o por nosotros.

Es Identificar descripciones de lo que el sistema debe hacer ofrecer, que hacer para cambiar la vida y ayudar las persona y en que **restricciones** de operaciones deben operar. de Hardware, de operacion (Compatibilidad), etc etc

Esa caracteristica es facil de comprender a simple vista?
*"... Se que crees que comprendes loq ue piensas que de dicho, pero no estoy seguro de que loq ue creiste oir sea lo que yo quise decir"*

Antes de realizar la construcción de un software hay que atravesar este terreno complejo.


**Tipos de Requerimientos**: Define con precicion el sofware que se va a construir. Lo mejor es establecer de distintos tipos para que sirvan como guia.
- **Requerimientos del Usuario**: Descripción abstractas de alto nivel. Estas en general tienen una descripcion tecnica muy baja. y no se pretende tener demaciado tecnisismo. Se espera que se usen terminologias y estilos afines al cliente.
- **Requerimientos del Sistema**: Descripcion del sistema de lo que el sistema debe hacer. mas detalladas, mas tecnicos, mas referidas a nuestos equipos.
- **Requerimientos Funcionales**: Servicios que el sistema debe proveer, como reacciona a entradas y como deberia comprtarse en sustuaciones especificar. En algunos casos tambien explican lo que NO deberia hacer el sistema.
- **Requerimientos no funcionales**: Se relacionan con propiedades del software tales como fiabilidad, velocidad de respuesta, capacidad de almacenamiento, características de seguridad, etc. Son caracteristicas que tienden a mencionar aspectos que no tienen que ver con la funcionalidad. Velocidad, capacidad de almacenamiento. Son las Caracteristicas no funcional, sino que son restrigciones de tipo tecnologicas y o operativas.
A todo esto se lo buelca en un documento el cual con los requerimientos define con precicion el software que se va a cosntruir. Este documento se llama "Especificacion de requerimentos" Es un documento de documentos, se lo mandan a los diseñadores para que las trabajen como planos para que después sea construido al software.

---

Este documento se construye a través de un *proceso de actividades*.

### Ingeniería de Requerimientos
Es el proceso de descubrir, analizarm, documentar y verificar los servicios y restringciones se llama Ingeniería de requerimientos (IR).
No se tiene los resultados de un momento a otro de la "Especificación de requerimientos", sino que lleva un análisis.

4 etapas:
- **Descubrir**: Mediante las tecnicas apropiadas, establecer las caracteristicas del negocio donde se requiere el software.
  Este proceso invita a analiszar las diferentes ideas y opciones que se nos presenta para designar la mejor solucion.
- **Analizar**: Organizar las diferentes opciones de solucion, y elegir "La mejor alternativa de solucion"
  Ya conociendo lo del punto 1 loq ue la empresa necesita, aqui imaginamos soluciones para resolver las necesidades.
- **Modelar**: Traducir en modelos la solucion a proponer.
  Diagramamanos esquemas a grandes razgos , por ejemplo dfd, der, dc, traducir las ideas a soluciones para los requerimentos.
- **Validar**: Chequear con el cliente si el modelo propuesto se ajusta a sus necesidades.
  Negociacion con el cliente para corroborar que el cliente esta deacuerdo con nuestra solucion.
Despies de estas etapas estamos en condicion de expresar lo que es nuestro documento de analisis de requerimentos.
PELACITA: *"Ingenieria de requerimentos"*: porque hace referencia al uso del conocimiento cientifico para determinar los reequerimentos, que es la practica exitosa bolcada en antecedentes que se aprovecha para hacer con mayor probabilidad de exito en estos 4 pasos finalizando en el documento.

Contexto: Igenieria de sistemas de computadoras (Idea global del proyecto) < **Analisis de requerimentos del software** (Paso intermedio previo al diseño de software) < ...

En este contexto se pueden Identificar 5 areas de esfuerzo:
- Reconocimiento del problema
- Evaluación y síntesis
- Modelización
- Especificación
- Revisión

---

### Principio de Análisis:
Estos se aplican para lograr el analisis de requerimentos.
- Se debe representar y comprender el ámbito de información del problema. Determinar el alcance del negocio. "Analista con una lupita"
- Se deben desarrollar los modelos que representen la información, función y el comportamiento del sistema. Que son lo que usamos con diagramas de flujo, mantenimiento de datos en un der, etc
- Se deben subdividir los modelos (y el problema) de forma que se descubran los detalles de una manera progresiva (o jerárquica). La idea global es algo general y se la Soluciona haciendo pequeños diagramas como en el diagrama de contexto.
- El proceso de análisis debe ir de la información esencial hacia el detalle de la implementación. Al principio es pensar que tipo de software (Esencial) vamos a hacer y despues en el tipo de maquina (detalle) vamos a usar



---

### Técnicas de Relevamiento
Se la presenta como herramienta de trabajo tradicionales aveces algunas se aplican ensima de otra. En la proxima materia se le adicionan otras tecnicas. Tecnicas de relevamiento tradicionales:

#### ENTREVISTAS
Las **entrevistas** son encuentros personales que realiza el **analista de sistemas** con interlocutores que poseen información valiosa sobre la organización. Su propósito es **entablar un diálogo con las personas adecuadas** para **reconocer las características del sistema**, comprender su funcionamiento actual y detectar posibles necesidades de mejora.

A través de las entrevistas, se busca conocer **las opiniones, sentimientos y percepciones de los usuarios** respecto al sistema existente, los **objetivos de la organización**, las **características del personal**, y los **procedimientos formales e informales** que se llevan a cabo.

Estas reuniones permiten al analista **observar actitudes, emociones y niveles de compromiso** de los entrevistados, comprendiendo cómo realizan su trabajo, qué dificultades enfrentan y cuáles son sus aspiraciones. Por ello, las entrevistas deben ser **guiadas y estructuradas**, evitando que se transformen en simples charlas informales, para garantizar la eficiencia del proceso.

Generalmente, el analista inicia entrevistando a **personas con una visión general de la empresa**, continúa con **gerentes o supervisores**, y finaliza —con autorización— entrevistando a **operarios o empleados de base**, así como a **los dueños o directivos**. De este modo, puede comprender las distintas perspectivas que conviven dentro de la organización: la del trabajador, con una visión operativa y cotidiana, y la del empresario, con una mirada estratégica y gerencial.

El analista debe desarrollar una **gran capacidad de escucha activa**, manteniendo el control del diálogo sin interrumpir la expresión del entrevistado, para obtener la información necesaria y cumplir con los objetivos de la entrevista.
	
TIPOS DE PREGUNTAS
La **forma en que expresamos las preguntas** condiciona la respuesta del entrevistado:
- **Preguntas abiertas:** Permiten al entrevistado expresar libremente su respuesta. Consultas, de tal manera que el entravistado puede describir situaciones apliamente. Aqui debe de tenerse cuidado para que la entrevista no se valla por las ramas.
- **Preguntas cerradas:** Limitan la respuesta a opciones predefinidas. Aqui se formulan las preguntas para que las respuestas sean predefinidas. Se pueden sugerir las respuestas. Ejemplo: Se entendio? si/no.
	
FORMAS DE ENTREVISTAS
Al planificar una entrevista, podemos definir la estructura del diálogo:
- **Entrevista estructurada:** Se establece una lista de temas que guían la conversación, siguiendo un orden definido de principio a fin. Se puede hacer un check list para ir manejando y tocando todos los temas de la entrevista. si no lo hacemos asi puede que no se tengan el suficioente tiempo para desarrollarla. A quien le voy a estrevistar, cuanto timepo, cuanto tiempo, etc...
- **Entrevista no estructurada:** Se tiene claro el objetivo del diálogo, pero el temario no está organizado; se abordan los temas según surjan de manera natural durante la conversación. No hay claridad de la estructurada (O DE LA CHECK LIST)

*LAS ENTREVISTAS DEBEN PLANIFICARSE, NO SE PUEDE IMPROVISAR*

FORMATO DE LA ENTREVISTA
Al planificar la entrevista, es importante determinar el **objetivo del diálogo** ("Quiero saber __ en la entrevista...")y cómo se desarrollará la actividad. 

Los formatos más comunes son:
- **Piramidal:** Se inicia directamente enfocados en el objetivo, y luego, si es posible, se amplía el diálogo a otros temas. En preferencia se pueden preguntar de entrada facilmente o en estrategia se pueden saber primero los temas de los objetivos y depsues explayarse con otros temas.
    ![[Pasted image 20251102175425.png]]
- **Embudo:** Se inicia con un temario amplio y se va reduciendo progresivamente hacia el tema objetivo al final de la entrevista.  Temas que no se pueden saber facilmente "A cuantas personas quierendejar sin trabajo con el sistema"... entonces al tema se lo abarca con otra tematica complementaria con el tem a tratar. no solo son temas incomodos, sino que son temas que yo no tengo muy claros. 
    ![[Pasted image 20251102175445.png]]
    
- **Rombo:** Se inicia enfocado en el objetivo, se amplía a otros temas y se regresa al objetivo antes de finalizar la entrevista. Combina la piramidal como el embudo, primero presentamos un objetivo de la charla, eso da pie en otros temas y al final retomamos los objetivos antes de que termine la entrevista. Recomendacion: Es la estrategia de no terminar la entrevista sin tener en claro lo que el entrevistador tiene para enseñarnos. ESCUCHAR... si entendimos algo entonces lo confirmamos antes de que termine la entrevista.
  *PARA DIRIGIR UNA ENTREVISTA SE REQUIERE "MENTALIDAD ABIERTA", **EVITANTO PRECONCEPTOS**...* Es un desafió  importante evitar prejuzgar.
    ![[Pasted image 20251102175501.png]]
    
PASOS EN LA PREPARACIÓN DE LA ENTREVISTA: 
1. Lectura de antecedentes
2. Establecimiento de los objetivos
3. Selección de los entrevistados
4. Preparación del entrevistado
5. Selección del tipo de preguntas
6. Selección de como documentar: grabar no es una buena idea a menos que avisemos y que nuestro entrevistado quede condicionado.
	
TIPO DE INFORMACIÓN OBTENIDA
Hay procedimientos infromales que no estan de otra manera que si no fuese charlando no son mostradas.
- Objetivos
- Opiniones
- Sentimientos
- Procedimientos informales

*PELACITA: No es lo mismo que yo sea un __programador__ a que yo sea __analista__. depende que como me sienta en comodidad. interactuar con personas o programando.*

RECOMENDACIONES GENERALES
- Observar el objetivo general del sistema que se solicita.
- Asegurar el **entendimiento y compromiso** del entrevistado.
- Conducir la entrevista de manera ordenada.
- Cerrar la entrevista con un **tono positivo**.
- Planificar la reunión con **anticipación**.
- Mantener **control del diálogo** sin limitar la expresión del entrevistado.
*A esto no le dio bola en la clase*

#### CUESTIONARIOS
**Cuestionarios**: Consulta masiva, generalmente escrita. Puede ser anónima para favorecer la libre expresión. Los resultados pueden procesarse.

Permiten consultar masivamente, sobre como opinan o comompiensen sobre la organizacion, puede ser escrita puede ser virtual pero tiene como ventaja nos perimite conocer a muhca gente con respecto a sus opiñones, aqui tambien se pueden hacer preguntas abiertass o cerradas, y por lo general el entrevistado suele ser mas honesto, en general los cuestionarios suelen ser escritos, ejemplo, cuestionario web, y todos los contestan en linea. El problema es que el analista tiene que leer las masivas respuestas, a menos que tenga una tecnica sistema que procese las respuestas. Se tiene que aprvechar la ventaja pero esta no permite ver las expreciones y las actitudes humanas que no son vistas.

Cuestionarios: Consulta masiva, generalmente escrita. Puede ser anónima para favorecer la libre expresión. Los resultados pueden procesarse.
Permite Unir informacion relacionada con varios aspectos de un sistema segun la opinion de un grupo grande de personas
Asegurar en anonimato del entrevistado, lo que conduce a respuestas mas honestas.
Las respuestas puedes cuantificarse, siendo posible utilizar preguntas abiertas o cerradas.
Determinar que tan difundido o limitado se encuentra un sentimiento (que halla sido expresado durante una entrevista)
Sondear una gran muestra de usuarios con el fin de detectar problemas (antes de la programación de las entrevistas).

Tipo de infromacion obtenida:
- Actitudes
- Opiniones
- conductas
- Caracteristicas

Es importante saber que los cuestionarios no es la primer tecnica que se aplica, en general uno aplica mejor entrevista, se tiene idea de la oorganizacion y de alli se utiiliza cuestionarios... hay sucursales o sectores en los que se combiene implementar...

Recomendaciones generales:
- Utilizar Cuestionarios si las personas a quienes se necesita interrogar se encuentran muy dispersas en distintas áreas.
- Utilizar Cuestionarios si se desea medir la opinión general antes de que un proyecto tome una dirección particular.
- Utilizar Cuestionarios si se desea sondear problemas del sistema actual para identificarlos y darles seguimiento por medio de entrevistas.

#### Observación
Permite verificar en el lugar donde suceden los hechos, cómo realmente se comportan el sistema y las personas.

Observación: Permite verificar en el lugar donde suceden los hechos, cómo realmente se comportan el sistema y las personas.

Permite verificar desde el lugar que trabaja la empresa como ocurren las cosas, a lo mejor que hicimos cuestionario y sacamos concluciones. lo ejor es hacerse un tiempo para tomarse el lugar de observar. Consiste en estar presente en el lugar, una contra: yo podre encontrar muchas imfromacion importante: mensajes, relaciones, influencias, etc etc peromite sacar conclusiones diferentes a las de los otros dos metodos. tenemos que saber que si nos paramos en un Hambiente de trabajo el analista ya genera una influencia ya que es un egente externo al entorno aboral a pesar de ser este presentado por el dueño, este es un condicionante importante.

![[Pasted image 20251102182030.png]]

Tipo de informacion obtenida: Se puede necesitar observar tanto el comportamiento de las personas de la organización, como del ambiente físico en el que se desarrollan  as actividades. Está orientada a verificar cómo se desempeña el sistema actual,  confirmando o corrigiendo lo que pudimos aprender con otras técnicas.

#### Revisión de registros
Permite conocer o confirmar, mediante los documentos cotidianos que usa la organización, detalles operativos.
	
Revision de Registros: Permite conocer o confirmar, mediante los documentos cotidianos que usa la organización, detalles operativos.

Consiste en ver documentos que se utilizan en la empresa, la idea es recuperar a partir de estos documentos el funcionamiento de la empresa. Documentos que esten usados, no en blanco o en limpio, las anotaciones a los margenes dan pistas mejores para determinar las caracteristicas que tiene que tener el sistema a implementar


Tipo de informacion Obtenida:
- Estructuras de los datos: ¿Como se estructuran los datos? como se anotan siertos formularios, etc
- Registros Informales  
- Insuficiencia de datos
Uno aprende , se imagina y se aprende mas sobre el negocio en el que se esta trabajando.
PELACITA: no es la primer tecnica pero nos va a confirmar a que caracteristicas hayq ue pestar atencion y cuales ignorar porque no van a la vida diaria de la empresa.

Se debe verificar la información obtenida de entrevistas y cuestionarios con las reales actividades representadas en documentos y demás papeles de la organización.
**Es conveniente obtener copias de documentos relevantes que estén usadas y no  formularios en blanco.**
Al contar con numerosos documentos, informes de salida, etc. que generan los miembros de una organización. ¿A cuáles debe atender el analista y a cuáles debe ignorar?
