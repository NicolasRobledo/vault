# Nota sobre parametrización del núcleo: **forma paramétrica**

## Transformación lineal dada
$$
T\!\left(\begin{pmatrix}a & b \\ c & d\end{pmatrix}\right) = (a-b-c,\ 0,\ 0,\ d)
$$

---

## Forma paramétrica del núcleo

### Del sistema de ecuaciones:
$$
\begin{cases}
a - b - c = 0 \\
d = 0
\end{cases}
$$

### Parametrización explícita:

**Opción 1:** Con parámetros $s$ y $t$
$$
\begin{cases}
a = s + t \\
b = s \\
c = t \\
d = 0
\end{cases}
\quad s,t \in \mathbb{R}
$$

**Opción 2:** En notación vectorial paramétrica
$$
\ker(T) = \left\{(s+t,\ s,\ t,\ 0) \in \mathbb{R}^4 : s,t \in \mathbb{R}\right\}
$$

**Opción 3:** En notación de combinación lineal
$$
\ker(T) = \left\{s(1,1,0,0) + t(1,0,1,0) : s,t \in \mathbb{R}\right\}
$$

---

## Forma paramétrica matricial (2×2)

### Para matrices:
$$
\ker(T) = \left\{\begin{pmatrix}s+t & s \\ t & 0\end{pmatrix} : s,t \in \mathbb{R}\right\}
$$

### O equivalentemente:
$$
\ker(T) = \left\{s\begin{pmatrix}1 & 1 \\ 0 & 0\end{pmatrix} + t\begin{pmatrix}1 & 0 \\ 1 & 0\end{pmatrix} : s,t \in \mathbb{R}\right\}
$$

---

## Descripción geométrica del núcleo

El núcleo es un **plano vectorial** (subespacio de dimensión 2) en:
- $\mathbb{R}^4$ (pensado como espacio de matrices 2×2)
- Determinado por la intersección de dos hiperplanos:
  1. $a - b - c = 0$
  2. $d = 0$

---

## Tabla de valores paramétricos

| $s$ | $t$ | Vector $(a,b,c,d)$ | Matriz $\begin{pmatrix}a & b \\ c & d\end{pmatrix}$ |
| --- | --- | ------------------ | --------------------------------------------------- |
| 1   | 0   | $(1,1,0,0)$        | $\begin{pmatrix}1 & 1 \\ 0 & 0\end{pmatrix}$        |
| 0   | 1   | $(1,0,1,0)$        | $\begin{pmatrix}1 & 0 \\ 1 & 0\end{pmatrix}$        |
| 1   | 1   | $(2,1,1,0)$        | $\begin{pmatrix}2 & 1 \\ 1 & 0\end{pmatrix}$        |
| 2   | -1  | $(1,2,-1,0)$       | $\begin{pmatrix}1 & 2 \\ -1 & 0\end{pmatrix}$       |

---

## Verificación de que satisface $T=0$

Para cualquier $s,t \in \mathbb{R}$:
$$
T\left(\begin{pmatrix}s+t & s \\ t & 0\end{pmatrix}\right) = ((s+t)-s-t,\ 0,\ 0,\ 0) = (0,0,0,0)
$$

---

## Resumen en forma paramétrica compacta

### Forma vectorial:
$$
\ker(T) = \{(s+t,\ s,\ t,\ 0) : s,t \in \mathbb{R}\}
$$

### Forma matricial:
$$
\ker(T) = \left\{\begin{pmatrix}s+t & s \\ t & 0\end{pmatrix} : s,t \in \mathbb{R}\right\}
$$

### Forma de span:
$$
\ker(T) = \text{span}\left\{\begin{pmatrix}1 & 1 \\ 0 & 0\end{pmatrix},\ \begin{pmatrix}1 & 0 \\ 1 & 0\end{pmatrix}\right\}
$$

---

## Dimensión y propiedades

- $\dim(\ker T) = 2$ (2 parámetros libres)
- **Base canónica del núcleo**: 
  $$\mathcal{B}_{\ker T} = \left\{\begin{pmatrix}1 & 1 \\ 0 & 0\end{pmatrix},\ \begin{pmatrix}1 & 0 \\ 1 & 0\end{pmatrix}\right\}$$
- **Condiciones del núcleo**: $d = 0$ y $a = b + c$
