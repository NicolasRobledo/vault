# notas-clase-boludeces-rivera1

introducción a sistemas operativos
tiempo compartido
¿qué son las llamadas al sistema?
cómo se realizan invocación
La comunicación modo usuario y kernel se hace con una llamada al sistema.
El kernel, cuando cambia de modo usuario a kernel, es costoso y guarda algo en memoria.
La llamada al sistema es el puente entre el modo usuario y el modo kernel.
Node: se destaca por su velocidad.
Wait / poll: esperar pod, process id, finalice su ejecución; depende del sistema operativo y la arquitectura.
¿Qué es un programa?
Si se está ejecutando, significa que está en memoria y viceversa; está cargado en memoria.
Todo son archivos: absolutos, bloques, caracteres, secuenciales.
máquina virtual: lo que comúnmente conocemos como MV de sistemas. Son independientes; otras se usan como interfaz entre el programa y el sistema.
Ejemplo: Java VM se compila en bytecode que puede ser leído por la JVM; por eso se sabe que Java es multiplataforma, como enlace al traducir al sistema operativo.
Hipervisor:

# Introducción a los Sistemas Operativos (según Tanenbaum)

## Tiempo compartido
El **tiempo compartido** es una técnica que permite que varios procesos o usuarios utilicen un mismo sistema computacional de forma simultánea, compartiendo el tiempo del procesador.  
Cada proceso recibe una fracción del tiempo de CPU antes de que el control pase al siguiente, generando la ilusión de ejecución paralela.  

> tiempo compartido

---

## Llamadas al sistema
Las **llamadas al sistema** son el mecanismo mediante el cual un programa en **modo usuario** solicita un servicio al **kernel** del sistema operativo.  
Actúan como un puente entre el modo usuario y el modo kernel.  

La **invocación** de una llamada al sistema implica un cambio de modo (de usuario a kernel), lo cual es costoso en términos de tiempo, ya que el sistema debe guardar información en memoria para preservar el estado del proceso.  

> ¿qué son las llamadas al sistema?  
> cómo se realizan invocación  
> La comunicación modo usuario y kernel se hace con una llamada al sistema.  
> El kernel, cuando cambia de modo usuario a kernel, es costoso y guarda algo en memoria.  
> La llamada al sistema es el puente entre el modo usuario y el modo kernel.  
> Node: se destaca por su velocidad.

---

## Procesos y ejecución
Un **programa** es un conjunto de instrucciones almacenadas en disco.  
Cuando el programa se **ejecuta**, se convierte en un **proceso** y se encuentra cargado en memoria.  
Si no está en ejecución, no ocupa memoria principal.  

> ¿Qué es un programa?  
> Si se está ejecutando, significa que está en memoria y viceversa; está cargado en memoria.  
> Todo son archivos: absolutos, bloques, caracteres, secuenciales.

---

## Comandos relacionados con procesos
- `wait()`: hace que un proceso espere hasta que otro proceso (identificado por su PID) finalice su ejecución.  
  El funcionamiento exacto depende del sistema operativo y de la arquitectura.  

> Wait / poll: esperar pod, process id, finalice su ejecución; depende del sistema operativo y la arquitectura.

---

## Máquina virtual
Una **máquina virtual (MV)** es una abstracción que simula una computadora completa.  
Permite que varios sistemas operativos se ejecuten de forma independiente sobre el mismo hardware físico.  
Además, puede actuar como interfaz entre un programa y el sistema operativo.  

> máquina virtual: lo que comúnmente conocemos como MV de sistemas. Son independientes; otras se usan como interfaz entre el programa y el sistema.  

**Ejemplo: Java Virtual Machine (JVM)**  
El código Java se compila en **bytecode**, que puede ser interpretado por la JVM.  
Esto permite que Java sea multiplataforma, ya que el bytecode puede ejecutarse en cualquier sistema operativo que tenga una JVM compatible.  

> Ejemplo: Java VM se compila en bytecode que puede ser leído por la JVM; por eso se sabe que Java es multiplataforma, como enlace al traducir al sistema operativo.

---

## Hipervisor
El **hipervisor** es el software que permite ejecutar y administrar múltiples máquinas virtuales sobre un mismo hardware físico.  
Controla los recursos y garantiza el aislamiento entre las MVs.  

> Hipervisor:
