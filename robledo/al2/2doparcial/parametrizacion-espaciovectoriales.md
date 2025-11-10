# Parametrización de Subespacios Vectoriales

## ¿Qué es Parametrizar?

**Parametrizar** un subespacio vectorial significa encontrar una expresión que describa **todos** sus elementos usando un conjunto de **parámetros libres**. Es como dar una "fórmula" para generar cualquier vector del subespacio.

### ¿Qué Logramos al Parametrizar?

#### 1. **Descripción Explícita del Conjunto**
- Antes: $\{x \in V : Ax = 0\}$ (definición implícita)
- Después: $\{s_1v_1 + s_2v_2 + \cdots + s_kv_k\}$ (fórmula explícita)

#### 2. **Dimensión Inmediata**
- Número de parámetros libres = dimensión del subespacio
- Ejemplo: 2 parámetros → subespacio de dimensión 2 (un plano)

#### 3. **Base Automática**
- Los vectores que multiplican a los parámetros **FORMAN** una base
- En $\{s\mathbf{v}_1 + t\mathbf{v}_2\}$, $\{\mathbf{v}_1, \mathbf{v}_2\}$ es base del subespacio

---

## Concepto General y Proceso

**Parametrizar** = Expresar todos los elementos de un subespacio usando parámetros libres:

$$
W = \{a_1\mathbf{v}_1 + a_2\mathbf{v}_2 + \cdots + a_k\mathbf{v}_k : a_i \in \mathbb{R}\}
$$

Donde $k = \dim(W)$ y $\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ es una base.

### Proceso General de Parametrización

**Paso 1:** Identificar grados de libertad
- Variables totales: $n$
- Ecuaciones independientes: $r$
- Parámetros libres: $k = n - r$ (dimensión del subespacio)

**Paso 2:** Elegir variables libres
- Seleccionar $k$ variables como parámetros

**Paso 3:** Despejar variables dependientes
- Expresar cada variable dependiente en términos de los parámetros

**Paso 4:** Escribir forma paramétrica
$$
\mathbf{x} = s_1\mathbf{v}_1 + s_2\mathbf{v}_2 + \cdots + s_k\mathbf{v}_k
$$

---

## Ejemplos en Diferentes Espacios Vectoriales

### 1. Parametrización en $\mathbb{R}^n$ (Vectores)

#### Ejemplo 1: Plano en $\mathbb{R}^3$
**Subespacio**: $W = \{(x,y,z) \in \mathbb{R}^3 : 2x - y + 3z = 0\}$

**Proceso**:
- 1 ecuación → 3 - 1 = 2 parámetros
- Variables libres: $y = s$, $z = t$
- Variable dependiente: $x = \frac{1}{2}(s - 3t)$

**Parametrización**:
$$
(x, y, z) = \left(\frac{1}{2}s - \frac{3}{2}t, s, t\right) = s\left(\frac{1}{2}, 1, 0\right) + t\left(-\frac{3}{2}, 0, 1\right)
$$

#### Ejemplo 2: Recta en $\mathbb{R}^4$
**Subespacio**: $W = \{(x,y,z,w) : x+y=0, z-w=0, 2x+z=0\}$

**Parametrización**:
$$
(x, y, z, w) = (t, -t, -2t, -2t) = t(1, -1, -2, -2)
$$

---

### 2. Parametrización en $\mathcal{P}_n$ (Polinomios)

#### Ejemplo 3: Polinomios con raíz en $x=1$
**Subespacio**: $W = \{p(x) \in \mathcal{P}_2 : p(1) = 0\}$

**Parametrización**:
$$
p(x) = s(x^2 - 1) + t(x - 1)
$$

**Base**: $\{x^2 - 1, x - 1\}$

#### Ejemplo 4: Polinomios pares de grado ≤ 3
**Subespacio**: $W = \{p(x) \in \mathcal{P}_3 : p(-x) = p(x)\}$

**Parametrización**:
$$
p(x) = sx^2 + t = s(x^2) + t(1)
$$

**Base**: $\{x^2, 1\}$

---

## 3. Parametrización en $\mathcal{M}_{m\times n}$ (Matrices)

### Ejemplo 5: Matrices 2×2 con traza cero
**Subespacio**:  
$$
W = \left\{\begin{pmatrix} a & b \\ c & d \end{pmatrix} : a + d = 0 \right\}
$$

**Proceso**:  
- Condición: $d = -a$  
- Parámetros libres: $a = s$, $b = t$, $c = u$

**Parametrización**:  
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix} 
= \begin{pmatrix} s & t \\ u & -s \end{pmatrix} 
= s \underbrace{\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}}_{M_1} 
+ t \underbrace{\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}}_{M_2} 
+ u \underbrace{\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}}_{M_3}
$$

**Base**:  
$$
\left\{
\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, 
\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, 
\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}
\right\}
$$


---

### 4. Parametrización en Espacios de Funciones

#### Ejemplo 7: Soluciones de ecuación diferencial
**Subespacio**: $W = \{y(x) : y'' - 4y = 0\}$

**Parametrización**:
$$
y(x) = se^{2x} + te^{-2x}
$$

**Base**: $\{e^{2x}, e^{-2x}\}$

---

## Estrategias Comunes por Tipo de Espacio

### Para $\mathbb{R}^n$:
1. Resolver sistema de ecuaciones lineales
2. Identificar variables libres
3. Despejar variables dependientes

### Para $\mathcal{P}_n$:
1. Escribir polinomio general
2. Aplicar condiciones del subespacio
3. Despejar coeficientes dependientes

### Para $\mathcal{M}_{m\times n}$:
1. Escribir matriz general
2. Aplicar condiciones a las entradas
3. Expresar entradas dependientes

### Para espacios de funciones:
1. Encontrar solución general de la EDO
2. Los coeficientes son los parámetros

---

## Verificación de Parametrizaciones

### Criterios:
1. **Completitud**: Todo elemento del subespacio se puede generar
2. **Independencia**: Los vectores base son LI
3. **Pertenencia**: Todo vector generado está en el subespacio

### Ejemplo de verificación (Matrices simétricas):
- Completitud: Toda matriz simétrica 2×2 es de la forma $\begin{pmatrix} s & t \\ t & u \end{pmatrix}$
- Independencia: Los vectores base son LI
- Pertenencia: $\begin{pmatrix} s & t \\ t & u \end{pmatrix}$ es simétrica ∀ $s,t,u$

---

## Resumen Conceptual

**Parametrizar = Dar coordenadas internas al subespacio**

- **Antes**: Restricciones (ecuaciones)
- **Después**: Libertad controlada (parámetros)
- **Logro**: Cambiar de visión "estática" (conjunto solución) a visión "dinámica" (generador de elementos)

La parametrización es el puente natural entre la definición **implícita** (ecuaciones) y la definición **explícita** (generadores) de un subespacio vectorial.

---

## Teorema Fundamental

Si $W \subseteq V$ es un subespacio de dimensión $k$, entonces existen exactamente $k$ parámetros libres en cualquier parametrización de $W$, y los vectores coeficientes forman una base de $W$.

$$
\dim(W) = k \Leftrightarrow W = \{s_1\mathbf{v}_1 + \cdots + s_k\mathbf{v}_k : s_i \in \mathbb{R}\}
$$