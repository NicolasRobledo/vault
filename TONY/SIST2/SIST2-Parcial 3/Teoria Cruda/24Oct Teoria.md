Conceptos de diseño: en este paso dio el ejemplo el main y que le pasa el contol a una parte A yq ue puede ser para ABCDstc

**Profundidas**: numero de niveles jerarquicos. Lo modelo como un modulo de arbol invertiddo. fromando dependencias de padre e hijo
p:
	------  A
		---- E
		---- F
	------  B
	------  C
**Anchura**: Anbito global de control. Seria busar el nivel mas ancho... en el dibujo anterior
p:
	------  A
		---- E
		---- F
	------  B
	------  C
la anchura seria de 3
**Grado de salida**: Medida del nuemro de modulos controlados directamente por un modulo. en este caso:
p:
	------  A
		---- E
		---- F
	------  B -> E
	------  C ->E
El grado de salida de p es de 3 porque de el salen a,b,c
**Grado de entrada**: Indica cuantos modulos controlan directamente el modulo. grado de entradad de E es 3 que vienen de B, C, A


En el super grafico: porque? porque esta pensado enq ue si falla algo, no se averie todo y que se sepa donde hayq ue arreglar

DISEÑO DE DATOS: desde una variable escalar (true or false, numero, vector, etc) 


Diseño Modular Efectivo:
- independecia funcional: Se pretende que un modulo tenga esta caracteristica. que trabaje sin que dependa del resto de los modulos. loq ue pas aen un modulo no afecte lo que pase a otro modulo.
- Cohesion: 
- Acoplamiento
  
  
  
Investigar lo que es *Variable local y global*. En lo posible no usar variables globales.

Lo que no me gustaba hacer... Los procedimientos en la programacion: 

x=2
y,z
funcion(x,y,z)
mostrar(x)
"x=34000"

Eso es lo mejor que puedo hacer

