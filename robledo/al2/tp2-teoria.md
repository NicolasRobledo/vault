# Álgebra Lineal II  
## Clase 2.24 – Ecuación de Recta y Plano

---

## Ecuación de la recta que pasa por dos puntos

Dados los puntos:  
$A=(1,5,3)$ y $B=(-2,3,4)$  

- Vector director:  
$\vec{v} = AB = B - A = (-3,-2,1)$  

- Usando el punto $A$:  
**Ecuación vectorial:**  
$$X = (1,5,3) + t(-3,-2,1)$$  

**Ecuación paramétrica:**  
$$
\begin{cases}
x = 1 - 3t \\
y = 5 - 2t \\
z = 3 + t
\end{cases}
$$

**Ecuación simétrica:**  
$$
\frac{x-1}{-3} = \frac{y-5}{-2} = \frac{z-3}{1}
$$

---

## Verificar si un punto pertenece a una recta

Recta:  
$$
\begin{cases}
x = 1 + t \\
y = -2 - 5t \\
z = 3 + 2t
\end{cases}
$$

Punto $M=(-2,13,-3)$  

Reemplazo:  
- $-2 = 1 + t \implies t=-3$  
- $13 = -2 - 5t \implies t=-3$  
- $-3 = 3 + 2t \implies t=-3$  

➡ Como se obtiene el mismo valor de $t$, $M$ pertenece a la recta.

---

## Posición relativa entre dos rectas

### Caso 1
$r: X = (1,0,3) + t(1,2,-1)$  
$s: X = (-1,5,1) + \alpha(2,4,-2)$  

Vectores directores proporcionales:  
$$\frac{1}{2} = \frac{2}{4} = \frac{-1}{-2}$$  

Son **paralelas o coincidentes**.  
Se prueba con $A=(1,0,3)$ en $s$:  
$$
\begin{cases}
1 = -1+2\alpha \implies \alpha=1 \\
0 = 5+4\alpha \implies \alpha=-\tfrac{5}{4}
\end{cases}
$$  

➡ Distintos valores de $\alpha$, entonces **son paralelas**.

---

### Caso 2
$r: X = (1,5,2) + t(1,-2,3)$  
$s: X = (-1,2,1) + \alpha(1,0,1)$  

Vectores directores NO proporcionales.  
➡ Pueden ser **secantes o alabeadas**.  

Sistema:  
$$
\begin{cases}
1+t = -1+\alpha \\
5-2t = 2 \implies t=\tfrac{3}{2} \\
2+3t = 1+\alpha
\end{cases}
$$  

Reemplazo:  
$\alpha=\tfrac{7}{2}$  
pero la tercera ecuación no se cumple.  

➡ Rectas **alabeadas**.

---

## Ecuación del plano

Un plano queda definido por:  
- Vector normal $N$  
- Punto $P$ en el plano  
- Punto genérico $X$ en el plano  

### Ecuación normal
$$N \cdot \overrightarrow{PX} = 0$$  

### Ecuación general
$$ax + by + cz = d$$  
donde $N=(a,b,c)$  

---

### Ejemplo 1 – Plano paralelo a un vector
Dado $u=(1,2,-1)$ y el punto $P=(1,1,5)$  

- Busco un $N$ ortogonal a $u$:  
$N=(3,-1,1)$ ya que $u \cdot N = 0$  

- Ecuación:  
$$N \cdot (X-P)=0$$  
$$(3,-1,1)\cdot(x-1,y-1,z-5)=0$$  

- General:  
$$3x - y + z = 7$$

---

### Ejemplo 2 – Plano por tres puntos
Puntos $A=(1,2,5)$, $B=(-1,3,1)$ y $C=(5,4,-2)$  

- Vector normal:  
$$N = AB \times AC =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
-2 & 1 & -4 \\
4 & 2 & -7
\end{vmatrix} = (1,-30,-8)$$  

- Ecuación general:  
$$x - 30y - 8z = d$$  

Reemplazando $C$:  
$5 - 30(4) - 8(-2) = d \implies d=-99$  

➡ **Ecuación del plano:**  
$$x - 30y - 8z = -99$$
