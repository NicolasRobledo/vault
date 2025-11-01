# Clasificación según el procesamiento de datos

## Por lotes
Lote es una palabra que hace referencia a un conjunto, entonces estamos por registrar datos masivamente.  
Se realiza en un único momento, por ejemplo, al finalizar la jornada.  

Se aplica a criterios prácticos:  
- Actualización masiva de datos  
- Backup  
- Procesos automáticos programados  

Se pueden hacer algoritmos que a tal hora ejecuten la tarea, o de acuerdo con cierto criterio, para poder determinar en qué momento se empiezan a mandar los lotes de datos.
![[img/filmina4/pagina_4.svg]]


---

## En línea
Quiere decir que ocurre algo y nosotros ya lo estamos grabando al momento.  
Básicamente, apenas ocurre un suceso lo registramos.  

Un sistema en línea es aquel que registra los hechos en el momento en que ocurren.  
Tiene mucho que ver con la intranet: las empresas tienen su propia información almacenada y así conforman una base de datos sólida y propia con información que les resulta útil.  

Características:  
- Suelen ocurrir dentro de un entorno cerrado.  
- La respuesta del sistema no afecta al entorno del sistema.  

> **Pregunta de parcial**:  
> - Ejemplos de un sistema en línea  
> - ¿Qué tecnologías permiten un sistema en línea?  
> - Grafique un sistema en línea  

![[img/filmina4/pagina_5.svg]]

---

## Sistemas de Tiempo Real

### Definición básica  
Los sistemas de tiempo real son aquellos en los que los datos se registran en el mismo momento en que ocurre un suceso, pero bajo condiciones muy específicas que permiten que ciertos software puedan, por ejemplo, manejar un vehículo. No sólo registran los datos, sino que también los procesan, los trabajan y generan una respuesta en el menor tiempo posible.  

### Velocidad y respuesta  
La velocidad de respuesta es mucho mayor que la de cualquier otro tipo de sistema. Reaccionan de forma rápida y eficiente, pero se diferencian de los sistemas en línea en un aspecto clave: la respuesta que generan modifica directamente el entorno del sistema.  

### Definición alternativa  
Los sistemas de tiempo real cumplen con dos características principales:  
- Sus respuestas son extremadamente rápidas.  
- Las respuestas generadas modifican el entorno en el que están operando.  

### Ejemplos  
- Un piloto automático de avión, que debe responder en milisegundos a variaciones de altura o velocidad.  
- Un vehículo autónomo, que procesa en tiempo real las señales de cámaras, sensores y radares para frenar, girar o acelerar.  

### Origen de los datos  
Generalmente, los datos en un sistema de tiempo real provienen de sensores o dispositivos electrónicos. Esto se hace así porque la velocidad de transmisión y procesamiento debe ser electrónica, más allá de la capacidad humana.  

### Fases de funcionamiento de un sistema de tiempo real  
- **Procesar las entradas**: recibe los datos de sensores o dispositivos.  
- **Evaluar alternativas**: analiza en milisegundos cuál es la acción más adecuada.  
- **Modificar el entorno**: ejecuta una acción que impacta en el sistema o en el medio físico.  
- **Respuesta final**: devuelve un resultado tangible en el entorno (ejemplo: activar frenos, mover una turbina, redirigir un flujo eléctrico).  

### Importancia de la electrónica  
Es muy raro encontrar sistemas de tiempo real que no impliquen electrónica. Si bien pueden existir algunos casos mecánicos o biológicos que cumplen parcialmente la definición, los más relevantes y útiles en ingeniería y computación son los sistemas electrónicos.  

### Clasificación según criticidad  
- **Sistemas de tiempo real no críticos**: son aquellos en los que la vida humana no depende del sistema.  
  - Ejemplo: un videojuego en el que el motor gráfico debe responder en milisegundos para mostrar imágenes fluidas.  
- **Sistemas de tiempo real críticos**: son aquellos en los que la vida humana puede verse comprometida si el sistema falla o se retrasa.  
  - Ejemplo: un sistema de monitoreo cardíaco en un hospital o el software de control de un reactor nuclear.  

![[img/filmina4/pagina_6.svg]]
