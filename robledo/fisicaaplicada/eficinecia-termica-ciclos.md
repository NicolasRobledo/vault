
## 🔹 Fórmulas de eficiencia térmica y ciclos

**Ciclo Otto (gas ideal):**  
$$
\eta_{\text{Otto}} = 1 - \frac{1}{r^{\gamma - 1}}
$$

**Refrigerador (coeficiente de desempeño $K$):**  
$$
K = \frac{|Q_C|}{|W|} = \frac{|Q_C|}{Q_H - Q_C}
$$

**Ciclo Carnot (eficiencia):**  
$$
\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H} = \frac{T_H - T_C}{T_H}
$$

$$
\frac{Q_C}{Q_H} = \frac{T_C}{T_H}
$$
### 📋 Tabla de Variables

| Variable             | Significado en Criollo                                                                                                                                                 | Unidades Típicas   |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| **$\eta$** (eta)     | **Eficiencia térmica:** Qué porcentaje del calor que le metés a la máquina se convierte en trabajo útil.                                                               | Sin unidades (o %) |
| **$r$**              | **Relación de compresión:** Cuántas veces más grande es el volumen cuando el pistón está abajo ($V_{\text{máx}}$) comparado con cuando está arriba ($V_{\text{mín}}$). | Sin unidades       |
| **$\gamma$** (gamma) | **Coeficiente adiabático:** Una medida de cómo se comporta el gas cuando se comprime o expande sin perder calor. Para el aire es ~1.4.                                 | Sin unidades       |
| **$K$**              | **Coeficiente de desempeño:** Cuán "bueno" es el refrigerador para mover calor.                                                                                        | Sin unidades       |
| **$Q_H$**            | **Calor absorbido del foco caliente:** El calor que le metés a la máquina (ej: de la combustión).                                                                      | Joules (J)         |
| **$Q_C$**            | **Calor cedido al foco frío:** El calor que la máquina bota al ambiente (ej: por el radiador).                                                                         | Joules (J)         |
| **$W$**              | **Trabajo neto:** El "laburo" útil que la máquina entrega.                                                                                                             | Joules (J)         |
| **$T_H$**            | **Temperatura de la fuente caliente:** Temperatura de donde la máquina toma el calor.                                                                                  | Kelvin (K)         |
| **$T_C$**            | **Temperatura de la fuente fría:** Temperatura a la que la máquina bota el calor residual.                                                                             | Kelvin (K)         |

>**💡 Nota:** En las fórmulas de Carnot, **SIEMPRE** usá la temperatura en Kelvin (K).