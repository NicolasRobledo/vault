# notas-clase-boludeces-rivera2
temas terminados hasta a hora: Memoria schedule de ejecucion procesos.
proceso se ejecutan rafaga.
huecos los huecos se ocupan o se liberan este proceso produce fragmentacion,en windows esiste un fragmentador hay dos tipos de fragmentacion interna y externa ,si ese proceso proceso crecia en uso desperdicio del espacio entre la memoriaque se le asigno anteriormente y el que ocupa ocurre la fragmentacion externa.
memoria contigua
la fragmentacion esterna se soluciona con al compactacion la cpu compacta ,pero trata de ebitar que compacte todo el todo el tiempo consume timpo quedan todos los procesos y soklibre mapa de bits y lista enlazada.
donde empieza ese proceso y donde temrian ?
relacion huecos libres y procesos .si la cpu tiene muhcos procesos en memoria tiendea generar fragmentaiocn externa solucion ,compactacion.luego se le suele mapa de bits y lista enlazada no tiene nada que ver con fifo pipo.
la memoria esta cargada doma de proceso o todavia no inicio en el mapa de bots en una busqueda lieneal busca la seguidilla de ceros .en caso de no encontrar supongamos fragmentaiocion interna sin externa la compactacion no funciona.
el mapa de bits es una matriz cuadrada la lista enlazada se peude hacer muchas optimizaciones.
el tamaño del mapa de bits no depende la dencidad de divicion.
la lista enlazada si depende de los procesos en ejecucion,particiones.
peor ajuste mejor ajuste ,cual es mas rapido?el hueco mas grande ?ordenar y buscar mayor a menor lo que soluciona el problema de fragmentaiocn externe
el porcentaje de cpu timepo usado sobre el periodo.
importatnte resumiendo una cpu una core como todo abrimos los procesos en momentos distintos.

# Sistemas Operativos — Clase: Memoria y Scheduling de Ejecución de Procesos

## Ejecución de Procesos y Ráfagas

- Los procesos se ejecutan en **ráfagas de CPU** (porciones de tiempo asignadas por el scheduler). 
- Durante su ejecución, los procesos **ocupan y liberan huecos de memoria**, lo que puede causar fragmentación.

> “Los procesos se ejecutan en ráfagas. Los huecos se ocupan o se liberan; eso produce fragmentación.”

---

## Tipos de Fragmentación

Existen dos tipos principales de fragmentación de memoria:

### Fragmentación interna
- Ocurre cuando a un proceso se le asigna un bloque de memoria mayor al que necesita.  
- El espacio no utilizado dentro de ese bloque se desperdicia.  

### Fragmentación externa
- Aparece cuando hay suficiente memoria libre, pero no de forma **contigua**.  
- Es decir, hay espacio disponible, pero está dividido en pequeños huecos.  
- En sistemas como Windows existe un **desfragmentador** que intenta reducir este problema.

> “En Windows existe un fragmentador. Hay dos tipos de fragmentación: interna y externa.”  
> “Si el proceso crece en uso y desperdicia el espacio entre la memoria que se le asignó y la que ocupa, ocurre la fragmentación externa.”

---

## Memoria Contigua y Compactación

- En la **memoria contigua**, los procesos se cargan en bloques consecutivos.  
- La **fragmentación externa** puede solucionarse mediante la **compactación**, donde la CPU reorganiza los procesos para unir los huecos libres.  
- Sin embargo, **compactar constantemente no es conveniente**, porque consume tiempo de CPU.  
- Una vez compactada la memoria, los procesos quedan ordenados y los huecos libres se agrupan.

> “La fragmentación externa se soluciona con la compactación. La CPU compacta, pero trata de evitar hacerlo todo el tiempo porque consume tiempo.”  
> “Después de compactar, quedan todos los procesos juntos y los huecos libres al final.”

---

## Mapas de Bits y Listas Enlazadas

- Para administrar la memoria, el sistema operativo utiliza estructuras como el **mapa de bits** y la **lista enlazada**.  
- Ambas representan la relación entre los **procesos cargados** y los **espacios libres**.

---

### Mapa de Bits

- Representa la memoria como una secuencia de bits:
  - `1` → bloque ocupado  
  - `0` → bloque libre
- El sistema busca una **secuencia de ceros contiguos** para ubicar un proceso.  
- Si no se encuentra, puede haber **fragmentación interna o externa**, y la compactación no siempre la soluciona.  
- El tamaño del mapa de bits **no depende de la densidad de división** de la memoria.

> “En el mapa de bits se hace una búsqueda lineal, buscando una seguidilla de ceros.”  
> “Si no encuentra una seguidilla, hay fragmentación interna o externa y la compactación no funciona.”  
> “El mapa de bits es una matriz cuadrada.”  
> “El tamaño del mapa de bits no depende de la densidad de división.”

---

### Lista Enlazada

- Representa cada bloque de memoria (ocupado o libre) como un **nodo**.  
- Su tamaño depende de la cantidad de **procesos en ejecución** y de las **particiones**.  
- Permite diferentes estrategias de asignación:

  - **Primer ajuste (First Fit):** toma el primer hueco libre que sea suficiente.  
  - **Mejor ajuste (Best Fit):** elige el hueco más pequeño posible.  
  - **Peor ajuste (Worst Fit):** elige el hueco más grande disponible.

> “La lista enlazada permite muchas optimizaciones.”  
> “La lista enlazada sí depende de los procesos en ejecución.”  
> “¿Cuál es más rápido, el peor o el mejor ajuste? Si ordenamos los huecos de mayor a menor, el peor ajuste puede solucionar la fragmentación externa.”

---

## Carga de Procesos y Fragmentación/segmentacoin

- Cuando un proceso se carga, el sistema verifica si hay espacio suficiente contiguo en memoria.  
- Si no lo hay, puede generarse **fragmentación externa**.  
- En ese caso, el sistema puede **compactar** la memoria o esperar a que se liberen más huecos.

> “¿Dónde empieza ese proceso y dónde termina? Relación entre huecos libres y procesos.”  
> “Si la CPU tiene muchos procesos en memoria, tiende a generar fragmentación externa. La solución es la compactación.”  
> “El mapa de bits y la lista enlazada no tienen nada que ver con FIFO o PIPO.”

---

## Uso de CPU y Procesos Concurrentes

- El **porcentaje de CPU** usado sobre un período indica la **eficiencia de uso del procesador**.  
- En una CPU **de un solo núcleo (single core)**, los procesos se abren en momentos distintos y se alternan en ejecución mediante el **scheduler**.

> “Resumiendo: una CPU, un core. Los procesos se abren en momentos distintos.”
