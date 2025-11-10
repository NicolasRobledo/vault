
## 1. Conceptos Fundamentales

**Definición:**
Sea $A$ una matriz cuadrada de orden $n$. Un número real $\lambda$ es un **autovalor** de $A$ si existe un vector no nulo $\vec{v} \in \mathbb{R}^n$ tal que:

$$A\vec{v} = \lambda\vec{v}$$

El vector $\vec{v}$ se llama **autovector** asociado al autovalor $\lambda$.

**Interpretación Geométrica:**
- La multiplicación $A\vec{v}$ solo escala el vector $\vec{v}$, no cambia su dirección
- Cada autovector define una "dirección privilegiada" de la transformación
- El autovalor indica el factor de escala en esa dirección

## 2. Cálculo de Autovalores y Autovectores

**Paso 1: Encontrar autovalores**
$$\det(A - \lambda I) = 0$$

- Esta ecuación se denomina **polinomio característico**
- Las raíces del polinomio son los autovalores $\lambda_1, \lambda_2, \ldots, \lambda_n$

**Paso 2: Encontrar autovectores**

Para cada autovalor $\lambda_i$, resolver:
$$(A - \lambda_i I)\vec{v} = \vec{0}$$

- Las soluciones no triviales son los autovectores asociados a $\lambda_i$

## 3. Diagonalización de Matrices

**Teorema Fundamental:**

Una matriz $A$ es **diagonalizable** si existe una matriz invertible $P$ y una matriz diagonal $D$ tales que:
$$A = PDP^{-1}$$

**Componentes:**
- $D = \begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}$ → contiene los autovalores
- $P = \begin{pmatrix} | & | & & | \\ \vec{v}_1 & \vec{v}_2 & \cdots & \vec{v}_n \\ | & | & & | \end{pmatrix}$ → columnas son los autovectores

## 4. Condiciones para Diagonalización

**Multiplicidades:**
- **Multiplicidad algebraica** $m_a(\lambda_i)$: orden de $\lambda_i$ como raíz del polinomio característico
- **Multiplicidad geométrica** $m_g(\lambda_i)$: dimensión del espacio propio $E(\lambda_i) = \{\vec{v}: A\vec{v} = \lambda_i\vec{v}\}$

**Condición necesaria y suficiente:**
$$m_g(\lambda_i) = m_a(\lambda_i) \quad \forall i$$

## 5. Interpretación Geométrica y Flujo de Transformación

**Diagrama Conceptual:**
$$\text{Base estándar} \xrightarrow{P^{-1}} \text{Base de autovectores} \xrightarrow{D} \text{Base de autovectores} \xrightarrow{P} \text{Base estándar}$$

**Relación Matricial:**
$$A\begin{pmatrix} | & | & & | \\ \vec{v}_1 & \vec{v}_2 & \cdots & \vec{v}_n \\ | & | & & | \end{pmatrix} = \begin{pmatrix} | & | & & | \\ \vec{v}_1 & \vec{v}_2 & \cdots & \vec{v}_n \\ | & | & & | \end{pmatrix} \begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}$$

## 6. Aplicaciones y Ventajas

**Simplificación de operaciones:**
- **Potencias:** $A^k = PD^kP^{-1}$
- **Exponencial:** $e^A = Pe^DP^{-1}$
- **Sistemas dinámicos:** $\vec{x}(t) = e^{At}\vec{x}_0$

**Interpretación:**
- La matriz $A$ se descompone en operaciones más simples cuando se mira desde la perspectiva correcta (base de autovectores)
- Cada autovector se escala independientemente por su autovalor correspondiente

## 7. Resumen Visual de la Descomposición

$$\underbrace{A}_{\text{Transformación Compleja}} = \underbrace{P}_{\text{Cambio a Base Propia}} \times \underbrace{D}_{\text{Escalas Puras}} \times \underbrace{P^{-1}}_{\text{Regreso a Base Original}}$$

## Conclusión

La diagonalización permite entender una transformación lineal compleja como una combinación de escalamientos simples en direcciones privilegiadas (autovectores). Esta perspectiva no solo simplifica cálculos, sino que revela la estructura fundamental de la transformación.