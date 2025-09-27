# ⚡ Procesos Termodinámicos – Formulario Completo

## 📌 Significado de las Variables

| Variable | Significado |
|----------|-------------|
| $p$ | Presión del gas |
| $V$ | Volumen del gas |
| $T$ | Temperatura absoluta (Kelvin) |
| $n$ | Número de moles de gas |
| $Q$ | Calor intercambiado |
| $W$ | Trabajo realizado **por** el gas |
| $\Delta U$ | Cambio en la energía interna |
| $R$ | Constante universal de los gases ($8.314\ J/(mol·K)$) |
| $C_v$ | Capacidad calorífica molar a volumen constante |
| $C_p$ | Capacidad calorífica molar a presión constante |
| $\gamma$ | Coeficiente adiabático ($\gamma = C_p/C_v$) |

**Nota:** Para gas ideal monoatómico: $C_v = \frac{3}{2}R$, $C_p = \frac{5}{2}R$, $\gamma = \frac{5}{3}$

---

## 🔹 Adiabático
**Condición:** $Q = 0$ (sin intercambio de calor)

**Ecuación característica:**
$$p V^{\gamma} = \text{cte}$$

**Trabajo:**
$$W = n C_v (T_1 - T_2)$$
$$W = \frac{1}{\gamma - 1} (p_1 V_1 - p_2 V_2)$$

>👉 **En criollo:** Expansión → se enfría, Compresión → se calienta. Todo el trabajo sale/entra a costa de la temperatura.

---

## 🔹 Isocórico (Volumen constante)
**Condición:** $V = \text{cte}$, $W = 0$

**Energía interna/Calor:**
$$\Delta U = Q = n C_v (T_2 - T_1)$$

>👉 **En criollo:** Todo el calor va directo a cambiar la temperatura. No hay trabajo.

---

## 🔹 Isobárico (Presión constante)
**Condición:** $p = \text{cte}$

**Trabajo:**
$$W = p (V_2 - V_1)$$

**Calor:**
$$Q = n C_p (T_2 - T_1)$$

>👉 **En criollo:** El calor se reparte: parte aumenta temperatura y parte hace trabajo.

---

## 🔹 Isotérmico (Temperatura constante)
**Condición:** $T = \text{cte}$, $\Delta U = 0$

**Ecuación:** $pV = \text{cte}$

**Trabajo y Calor:**
$$W = nRT \ln \frac{V_2}{V_1}$$
$$Q = W$$

>👉 **En criollo:** Todo el calor que entra se convierte en trabajo.

---

## 📌 Resumen Ultra Rápido

| Proceso | Condición | Relación $Q$-$W$-$\Delta U$ |
|---------|-----------|-----------------------------------|
| **Adiabático** | $Q=0$ | $W = -\Delta U$ |
| **Isocórico** | $V=\text{cte}$ | $Q = \Delta U$, $W=0$ |
| **Isobárico** | $p=\text{cte}$ | $Q = \Delta U + W$ |
| **Isotérmico** | $T=\text{cte}$ | $Q = W$, $\Delta U=0$ |

## 💡 Recordatorio importante
- $W > 0$: Gas se EXPANDE (hace trabajo)
- $W < 0$: Gas se COMPRIME (recibe trabajo)
- $Q > 0$: Calor ENTRA al sistema
- $Q < 0$: Calor SALE del sistema