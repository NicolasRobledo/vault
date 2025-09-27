# Álgebra Lineal II

## Contenidos
- **Producto escalar**: propiedades
- **Producto vectorial**: propiedades y aplicaciones geométricas
- **Producto mixto**: propiedades y aplicaciones geométricas

---

## Producto escalar

Es una operación definida en $\mathbb{R}^n$ que tiene como resultado un escalar.  

Sea:
- $u = (x_1, x_2, x_3, \dots, x_n)$  
- $v = (y_1, y_2, y_3, \dots, y_n)$  

Se define como:

$$
u \cdot v = \sum_{i=1}^n x_i y_i
$$

### Propiedades
- $u \cdot v = v \cdot u$ (conmutatividad)  
- $(u+v) \cdot w = u \cdot w + v \cdot w$ (distributiva)  
- $u \perp v \iff u \cdot v = 0$  
- $\|u\|^2 = u \cdot u = \sum_{i=1}^n x_i^2$  
- $u \cdot v = \|u\| \, \|v\| \cos \alpha$ (siendo $\alpha$ el ángulo entre los vectores)  

---

## Producto vectorial

Es una operación definida en $\mathbb{R}^3$ que tiene como resultado un vector.  

Se denota como:  
$$
u \times v
$$

Sean:
- $u = (x_1, x_2, x_3)$  
- $v = (y_1, y_2, y_3)$  

Se define mediante el determinante:

$$
u \times v =
\begin{vmatrix}
i & j & k \\
x_1 & x_2 & x_3 \\
y_1 & y_2 & y_3
\end{vmatrix}
$$

### Ejemplo
$$
(1, -2, 3) \times (4, 1, -2) =
\begin{vmatrix}
i & j & k \\
1 & -2 & 3 \\
4 & 1 & -2
\end{vmatrix}
= (1, 14, 9)
$$

### Propiedades
- Módulo: $\|u \times v\| = \|u\| \, \|v\| \, \sin \theta$  
- Dirección: perpendicular a $u$ y $v$  
- Sentido: dado por la regla de la mano derecha  
- $u \times v \perp u$ y $u \times v \perp v$  
- $u \times v = - (v \times u)$ (anticonmutatividad)  
- $u \times 0 = 0 \times u = 0$  
- $(\alpha u) \times v = \alpha (u \times v)$  
- $u \times (v+w) = u \times v + u \times w$  

### Interpretación geométrica
- Área del paralelogramo: $\|u \times v\|$  
- Área del triángulo: $\tfrac{1}{2}\|u \times v\|$  

#### Ejemplo
Calcular el área del triángulo de vértices $A=(1,5,-3)$, $B=(1,1,0)$ y $C=(4,5,2)$.  

Vectores:  
- $CA = (-3,0,-5)$  
- $CB = (-3,-4,-2)$  

$$
CA \times CB =
\begin{vmatrix}
i & j & k \\
-3 & 0 & -5 \\
-3 & -4 & -2
\end{vmatrix}
= (-20,9,12)
$$

Área del triángulo:

$$
\frac{1}{2}\|CA \times CB\| = \frac{25}{2}
$$

---

## Producto mixto

Es una operación definida en $\mathbb{R}^3$ que tiene como resultado un escalar.  

Se denota como:  
$$
(u,v,w) = u \cdot (v \times w) = (u \times v) \cdot w
$$

Sea:
- $u = (a,b,c)$  
- $v = (d,e,f)$  
- $w = (g,h,i)$  

$$
(u,v,w) =
\begin{vmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{vmatrix}
$$

### Ejemplo
Calcular $(u,v,w)$ con:  
- $u = (2,-3,5)$  
- $v = (0,-1,3)$  
- $w = (3,-3,6)$  

$$
(u,v,w) =
\begin{vmatrix}
2 & -3 & 5 \\
0 & -1 & 3 \\
3 & -3 & 6
\end{vmatrix}
= -6
$$

### Propiedades
- Permutación circular: $(u,v,w) = (v,w,u) = (w,u,v)$  
- Transposición: $(u,v,w) = - (u,w,v) = - (w,v,u) = -(v,u,w)$  
- $(u,v,w) = 0 \iff u,v,w \ \text{son coplanares}$  
- $(\alpha u, v, w) = \alpha (u,v,w)$  

### Interpretación geométrica
- Volumen del paralelepípedo: $\|(u,v,w)\|$  
- Volumen del tetraedro: $\frac{1}{6} \|(u,v,w)\|$  

#### Ejemplo
Calcular el volumen del tetraedro con:  
- $u = (1,5,0)$  
- $v = (2,-1,3)$  
- $w = (3,1,1)$  

$$
(u,v,w) =
\begin{vmatrix}
1 & 5 & 0 \\
2 & -1 & 3 \\
3 & 1 & 1
\end{vmatrix}
= 31
$$

$$
V = \frac{31}{6}
$$
