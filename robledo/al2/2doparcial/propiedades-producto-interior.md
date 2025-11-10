# Propiedades del Producto Interior

## Definición
Un **producto interior** en un espacio vectorial $V$ sobre $\mathbb{R}$ es una función:
$$
\langle \cdot, \cdot \rangle: V \times V \to \mathbb{R}
$$
que cumple las siguientes propiedades para todo $\vec{u}, \vec{v}, \vec{w} \in V$ y $\alpha \in \mathbb{R}$:

---

## 1. Positividad
$$
\langle \vec{u}, \vec{u} \rangle \geq 0
$$

**Demostración con coordenadas:**
Si $\vec{u} = (u_1, u_2, \dots, u_n)$, entonces:
$$
\langle \vec{u}, \vec{u} \rangle = u_1^2 + u_2^2 + \cdots + u_n^2 \geq 0
$$

---

## 2. Definitud
$$
\langle \vec{u}, \vec{u} \rangle = 0 \iff \vec{u} = \vec{0}
$$

**Demostración:**
$$
\langle \vec{u}, \vec{u} \rangle = u_1^2 + u_2^2 + \cdots + u_n^2 = 0 \implies u_1 = u_2 = \cdots = u_n = 0
$$

---

## 3. Linealidad en el Segundo Argumento
$$
\langle \vec{u}, \vec{v} + \vec{w} \rangle = \langle \vec{u}, \vec{v} \rangle + \langle \vec{u}, \vec{w} \rangle
$$

**Desarrollo:**
$$
\langle \vec{u}, \vec{v} + \vec{w} \rangle = u_1(v_1 + w_1) + u_2(v_2 + w_2) + \cdots + u_n(v_n + w_n)
$$
$$
= (u_1v_1 + u_2v_2 + \cdots + u_nv_n) + (u_1w_1 + u_2w_2 + \cdots + u_nw_n)
$$
$$
= \langle \vec{u}, \vec{v} \rangle + \langle \vec{u}, \vec{w} \rangle
$$

---

## 4. Linealidad en el Primer Argumento
$$
\langle \vec{u} + \vec{v}, \vec{w} \rangle = \langle \vec{u}, \vec{w} \rangle + \langle \vec{v}, \vec{w} \rangle
$$

**Demostración usando simetría:**
$$
\langle \vec{u} + \vec{v}, \vec{w} \rangle = \langle \vec{w}, \vec{u} + \vec{v} \rangle
= \langle \vec{w}, \vec{u} \rangle + \langle \vec{w}, \vec{v} \rangle
= \langle \vec{u}, \vec{w} \rangle + \langle \vec{v}, \vec{w} \rangle
$$

---

## 5. Homogeneidad
$$
\langle \alpha \vec{u}, \vec{v} \rangle = \alpha \langle \vec{u}, \vec{v} \rangle = \langle \vec{u}, \alpha \vec{v} \rangle
$$

**Desarrollo:**
$$
\langle \alpha \vec{u}, \vec{v} \rangle = (\alpha u_1)v_1 + (\alpha u_2)v_2 + \cdots + (\alpha u_n)v_n
$$
$$
= \alpha(u_1v_1 + u_2v_2 + \cdots + u_nv_n) = \alpha \langle \vec{u}, \vec{v} \rangle
$$

---

## 6. Simetría
$$
\langle \vec{u}, \vec{v} \rangle = \langle \vec{v}, \vec{u} \rangle
$$

**Demostración:**
$$
\langle \vec{u}, \vec{v} \rangle = u_1v_1 + u_2v_2 + \cdots + u_nv_n
= v_1u_1 + v_2u_2 + \cdots + v_nu_n = \langle \vec{v}, \vec{u} \rangle
$$

---

## Aplicaciones Geométricas

### Norma de un Vector
$$
\|\vec{u}\| = \sqrt{\langle \vec{u}, \vec{u} \rangle} = \sqrt{u_1^2 + u_2^2 + \cdots + u_n^2}
$$

### Ángulo entre Vectores
$$
\cos \theta = \frac{\langle \vec{u}, \vec{v} \rangle}{\|\vec{u}\| \|\vec{v}\|}
$$

### Ortogonalidad
$$
\vec{u} \perp \vec{v} \iff \langle \vec{u}, \vec{v} \rangle = 0
$$

### Desigualdad de Cauchy-Schwarz
$$
|\langle \vec{u}, \vec{v} \rangle| \leq \|\vec{u}\| \|\vec{v}\|
$$

---

## Ejemplo Numérico

Sean $\vec{u} = (1, 2)$, $\vec{v} = (3, 4)$, $\vec{w} = (5, 6)$, $\alpha = 2$

**Positividad:**
$$
\langle \vec{u}, \vec{u} \rangle = 1^2 + 2^2 = 5 \geq 0
$$

**Linealidad:**
$$
\langle \vec{u}, \vec{v} + \vec{w} \rangle = \langle (1,2), (8,10) \rangle = 1\cdot8 + 2\cdot10 = 28
$$
$$
\langle \vec{u}, \vec{v} \rangle + \langle \vec{u}, \vec{w} \rangle = (1\cdot3 + 2\cdot4) + (1\cdot5 + 2\cdot6) = 11 + 17 = 28
$$

**Homogeneidad:**
$$
\langle 2\vec{u}, \vec{v} \rangle = \langle (2,4), (3,4) \rangle = 2\cdot3 + 4\cdot4 = 22
$$
$$
2\langle \vec{u}, \vec{v} \rangle = 2(1\cdot3 + 2\cdot4) = 2\cdot11 = 22
$$

---

## Resumen de Propiedades

| Propiedad | Fórmula |
|-----------|---------|
| Positividad | $\langle \vec{u}, \vec{u} \rangle \geq 0$ |
| Definitud | $\langle \vec{u}, \vec{u} \rangle = 0 \iff \vec{u} = \vec{0}$ |
| Linealidad 2° arg | $\langle \vec{u}, \vec{v} + \vec{w} \rangle = \langle \vec{u}, \vec{v} \rangle + \langle \vec{u}, \vec{w} \rangle$ |
| Linealidad 1° arg | $\langle \vec{u} + \vec{v}, \vec{w} \rangle = \langle \vec{u}, \vec{w} \rangle + \langle \vec{v}, \vec{w} \rangle$ |
| Homogeneidad | $\langle \alpha \vec{u}, \vec{v} \rangle = \alpha \langle \vec{u}, \vec{v} \rangle$ |
| Simetría | $\langle \vec{u}, \vec{v} \rangle = \langle \vec{v}, \vec{u} \rangle$ |

---

## Propiedades Derivadas

### Bilinealidad
El producto interior es **bilineal**:
$$
\langle \alpha \vec{u} + \beta \vec{v}, \vec{w} \rangle = \alpha \langle \vec{u}, \vec{w} \rangle + \beta \langle \vec{v}, \vec{w} \rangle
$$
$$
\langle \vec{u}, \alpha \vec{v} + \beta \vec{w} \rangle = \alpha \langle \vec{u}, \vec{v} \rangle + \beta \langle \vec{u}, \vec{w} \rangle
$$

### Identidad del Paralelogramo
$$
\|\vec{u} + \vec{v}\|^2 + \|\vec{u} - \vec{v}\|^2 = 2(\|\vec{u}\|^2 + \|\vec{v}\|^2)
$$

**Demostración:**
$$
\|\vec{u} + \vec{v}\|^2 = \langle \vec{u} + \vec{v}, \vec{u} + \vec{v} \rangle = \|\vec{u}\|^2 + 2\langle \vec{u}, \vec{v} \rangle + \|\vec{v}\|^2
$$
$$
\|\vec{u} - \vec{v}\|^2 = \langle \vec{u} - \vec{v}, \vec{u} - \vec{v} \rangle = \|\vec{u}\|^2 - 2\langle \vec{u}, \vec{v} \rangle + \|\vec{v}\|^2
$$
