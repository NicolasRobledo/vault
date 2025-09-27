# 📘 Transferencia de Calor

La **transferencia de calor** es el movimiento de energía térmica de un cuerpo a otro. Puede ocurrir de tres formas: **conducción, convección y radiación**.

---

## 🔹 1. Conducción (por contacto)

La **conducción** es el flujo de calor a través de un material **sin que el material se mueva**, debido a una diferencia de temperatura.

**Ley de Fourier:**

$$
q = -k \  A \  \frac{dT}{dx}
$$

o para una barra de longitud $L$ y temperatura lineal:

$$
Q = k \  A \  \frac{T_1 - T_2}{L} \  \Delta t
$$

donde:  
- $q$ = flujo de calor (W)  
- $Q$ = calor transferido (J)  
- $k$ = conductividad térmica (W/m·K)  
- $A$ = área transversal (m²)  
- $T_1, T_2$ = temperaturas de los extremos (K o °C)  
- $L$ = longitud del material (m)  

> **En criollo:** El calor se pasa de una parte caliente a una fría, como cuando apoyás la mano en un metal caliente.

---

## 🔹 2. Convección (por movimiento de fluidos)

La **convección** ocurre cuando el calor se transfiere **a través de un fluido (líquido o gas) en movimiento**.  

**Ley de enfriamiento de Newton:**

$$
q = h \  A \  (T_s - T_\infty)
$$

donde:  
- $q$ = flujo de calor (W)  
- $h$ = coeficiente de convección (W/m²·K)  
- $A$ = área de la superficie (m²)  
- $T_s$ = temperatura de la superficie (K o °C)  
- $T_\infty$ = temperatura del fluido lejos de la superficie (K o °C)  

> **En criollo:** El calor se lleva el fluido, como el aire caliente que sube de un radiador o agua hirviendo que se mueve.

---

## 🔹 3. Radiación (transferencia por ondas)

La **radiación térmica** es la transferencia de calor mediante **ondas electromagnéticas**, sin necesidad de contacto ni medio material.  

**Ley de Stefan-Boltzmann:**

$$
q = \epsilon \  \sigma \  A \  (T_s^4 - T_\text{amb}^4)
$$

donde:  
- $q$ = flujo de calor (W)  
- $\epsilon$ = emisividad de la superficie (0 ≤ ε ≤ 1)  
- $\sigma$ = constante de Stefan-Boltzmann ($5.67 \times 10^{-8}$ W/m²·K⁴)  
- $A$ = área de la superficie (m²)  
- $T_s$ = temperatura de la superficie (K)  
- $T_\text{amb}$ = temperatura ambiente (K)  

> **En criollo:** El calor se manda por “luz infrarroja”, como el calor que sentís de un fuego sin tocarlo.

---

## 🔹 Resumen de mecanismos

| Mecanismo    | Medio necesario        | Forma de transferencia        | Ejemplo                           |
|-------------|---------------------|-----------------------------|----------------------------------|
| Conducción  | Sólido               | Por contacto directo        | Mano en metal caliente           |
| Convección  | Líquido o gas        | Movimiento del fluido       | Aire calentado por un radiador   |
| Radiación   | No necesita medio    | Ondas electromagnéticas     | Sol calentando la Tierra         |
