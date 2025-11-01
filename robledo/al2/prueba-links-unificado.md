# Prueba de Links

- [Ecuacion Vectorial](#ecuacion_vectorial)
- [Ecuacion Parametrica](#ecuacion_parametrica)
- [Ecuacion Simetrica](#ecuacion_simetrica)

```bash

pandoc prueba-links-unificado.md -s --toc --mathml --epub-chapter-level=1 -o rectas.epub

```

---

# Ecuacion_Vectorial

Representa todos los puntos de la recta como:

$$
\vec{r} : \vec{X} = \vec{P_0} + t \vec{v} = (x_0, y_0) + t (v_1, v_2), \quad t \in \mathbb{R}
$$

**Cómo construirla:**
1. Identificar un punto $P_0$ por donde pasa la recta.
2. Obtener un vector director $\vec{v}$ que indique la dirección de la recta.
3. Escribir la ecuación en la forma $\vec{X} = \vec{P_0} + t \vec{v}$.
4. El parámetro $t$ recorre todos los reales para generar los puntos de la recta.

---

# Ecuacion_Parametrica

Se obtiene separando la ecuación vectorial en coordenadas:

$$
\vec{r} :
\begin{cases}
x = x_0 + t v_1 \\
y = y_0 + t v_2
\end{cases}, \quad t \in \mathbb{R}
$$

**Cómo construirla:**
1. Partir de la ecuación vectorial $\vec{X} = \vec{P_0} + t \vec{v}$.
2. Escribir cada coordenada por separado:
   - $x = x_0 + t v_1$
   - $y = y_0 + t v_2$
3. El parámetro $t$ recorre $\mathbb{R}$.

---

# Ecuacion_Simetrica

Se obtiene de la paramétrica eliminando el parámetro $t$, si $v_1, v_2 \neq 0$:

$$
\vec{r} : \frac{x - x_0}{v_1} = \frac{y - y_0}{v_2}
$$

**Cómo construirla:**
1. Partir de la ecuación paramétrica.
2. Despejar $t$ en cada coordenada:
   - $t = \frac{x - x_0}{v_1}$
   - $t = \frac{y - y_0}{v_2}$
3. Igualar las dos expresiones de $t$ para obtener la ecuación simétrica:
   $$
   \frac{x - x_0}{v_1} = \frac{y - y_0}{v_2}
   $$
