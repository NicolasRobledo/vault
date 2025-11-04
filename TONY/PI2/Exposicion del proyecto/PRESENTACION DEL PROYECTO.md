# Exposicion
Partes: 15 minutos
1. A:
	1. Objetivos del proyecto
	2. objetivos del producto
	3. Alcance
2. B;
	1. Sistema de información existente
	2. Infraestructura informática existente
	3. Necesidades estratégicas de información
3. C:
	1. Definición del producto a Implementar
	2. Infraestructura informática necesaria
	3. Ingeniería del proyecto

# Narrativa

## Resumen Ejecutivo

**La Cadena Hotelera Andina S.A.** es una empresa con **más de 20 años de experiencia** en el sector hotelero argentino, operando **12 hoteles de 3 y 4 estrellas** en las principales provincias turísticas del país (Salta, Jujuy, Tucumán, Catamarca, Córdoba, Mendoza y Buenos Aires). Con **1.800 habitaciones** y **720 empleados**, atiende tanto a turistas nacionales e internacionales como a empresas corporativas.

### Problemática Actual
La cadena enfrenta una **crisis operativa crítica** debido a la **gestión completamente manual y descentralizada** de sus procesos:
- **4.800 solicitudes mensuales** gestionadas por correos genéricos, llamadas telefónicas y planillas Excel
- **Ausencia total de integración** entre los 12 hoteles 
- **Pérdida de información**, duplicidades y errores humanos constantes
- **Sin trazabilidad** de reclamos, mantenimiento o reservas
- **Reportes dispersos** que impiden la toma de decisiones estratégicas

### Impacto en el Negocio
Esta fragmentación operativa genera:
- Tiempos de resolución **erráticos e impredecibles**
- **Sobreventas** y conflictos de disponibilidad
- **Sobrecarga** del personal operativo
- **Insatisfacción** tanto de huéspedes como del personal interno
- **Imposibilidad** de aprovechar economías de escala

### La Solución Propuesta
Implementar un **Sistema Integral de Información Hotelera Multisucursal** que transformará completamente la operación de la cadena, centralizando procesos, automatizando flujos de trabajo y proporcionando visibilidad 360° en tiempo real para la toma de decisiones estratégicas basadas en datos.




# [[Objetivos del Proyecto]] (SMART)
- **Objetivo General:** Implementar en un plazo máximo de 16 meses un Sistema Integral de Información Hotelera Multisucursal que centralice las reservas, consolide los reportes financieros y operativos, unifique la gestión de reclamos y mantenimiento, integre el control de proveedores y compras, y brinde dashboards corporativos en tiempo real.

- **Objetivos Específicos Cuantificables:** 
  - **Eficiencia Operativa:** Reducir en 80% el tiempo de generación de reportes operativos y financieros
  - **Mantenimiento Preventivo:** Disminuir en 30% las fallas críticas mediante alertas preventivas automatizadas
  - **Optimización de Costos:** Ahorrar 15% en costos de adquisición através de compras corporativas centralizadas
  - **Información Estratégica:** Incrementar en 90% la disponibilidad de información en tiempo real para decisiones estratégicas
  - **Satisfacción del Cliente:** Mejorar en 25% la satisfacción de huéspedes respecto a tiempos de atención y resolución de reclamos
  - **Automatización:** Reducir en 40% las tareas administrativas repetitivas del personal operativo

**🎯 Indicador de Éxito:** ROI positivo en 18 meses por eficiencias operativas

# [[Objetivos del Producto]]

## Módulos Principales del Sistema:
1. **Central de Reservas Unificada:** Centralizar la gestión de reservas con integración nativa a plataformas externas (Booking, Expedia, Despegar, Airbnb)
2. **CRM Hotelero Integrado:** Gestionar historial de huéspedes, preferencias y programas de fidelización para marketing segmentado
3. **Sistema de Ticketing Inteligente:** Unificar el registro y seguimiento de reclamos e incidencias con alertas y trazabilidad completa
4. **Gestión Corporativa de Proveedores:** Integrar la gestión de proveedores y órdenes de compra a nivel corporativo para optimizar costos
5. **Business Intelligence:** Brindar tableros de control para Dirección y Gerencias con KPIs de ocupación, ingresos, costos y satisfacción

## Beneficios Transformacionales:
- **Eliminación de sobreventas:** Sistema centralizado evita conflictos de disponibilidad
- **Trazabilidad 360°:** Seguimiento completo desde solicitud hasta resolución
- **Decisiones basadas en datos:** Dashboards en tiempo real reemplazan reportes manuales
- **Economías de escala:** Compras corporativas vs. compras independientes por hotel

## Stakeholders Beneficiarios:
- **720 empleados** distribuidos en 12 hoteles (desde CEO hasta personal operativo)
- **Huéspedes finales** con mejor experiencia y tiempos de atención
- **Proveedores** con procesos de compra más eficientes

# [[Alcance del Proyecto]]

## Fases y Cronograma (16 meses):
1. **Análisis de Requerimientos** (1.5 meses) - Relevamiento y documentación
2. **Diseño y Desarrollo** (1.5 meses) - Arquitectura y políticas de seguridad  
3. **Armado de Ambientes** (3 meses) - Configuración de servidores
4. **Migración de Datos** (2 meses) - Normalización e integración
5. **Actualización de Infraestructura** (2 meses) - Upgrade tecnológico
6. **Pruebas de Calidad** (1.5 meses) - Testing integral
7. **Capacitación e Implementación** (1.5 meses) - Rollout escalonado
8. **Soporte Post-Implementación** (1.6 meses) - Estabilización
9. **Contrato de Mantenimiento** (2 meses) - Formalización soporte

## Entregables Documentales:
- Documento de requerimientos funcionales y no funcionales
- Modelo de datos y diagramas de arquitectura
- Plan de implementación y mantenimiento
- Informe de migración con trazabilidad

## Entregables Funcionales:
- Sistema integral operativo con todos los módulos
- Dashboards estratégicos y operativos en tiempo real  
- Apps móviles para empleados
- Scripts de instalación y despliegue

## Entregables Formativos:
- Manual de usuario por rol (recepción, mantenimiento, administración, gerencias)
- Manual técnico para soporte interno
- Materiales de capacitación y simulaciones

---

# [[Sistema de información existente]]

## Situación Crítica Actual:
- **Volumen de solicitudes:** 4.800 solicitudes mensuales sin sistema unificado
  - 2.400 de reservas y modificaciones de estadía
  - 1.000 de órdenes de compra y facturación  
  - 800 de reclamos de huéspedes
  - 400 de mantenimiento
  - 200 de consultas de proveedores

## Proceso Manual Fragmentado:
- **Canales informales:** Correos genéricos + llamadas telefónicas + visitas presenciales
- **Sin estandarización:** Cada mensaje con diferente grado de detalle
- **Bandejas saturadas:** Decenas de mensajes sin orden, muchos sin leer o en spam
- **Asignación manual:** Gerente revisa y distribuye una vez al día, generando errores de enrutamiento

## Consecuencias Operativas:
- **Tiempo de resolución errático:** Incidentes que podrían resolverse en horas se demoran días
- **Sin priorización:** Todas las solicitudes por orden de llegada, sin distinguir criticidad
- **Pérdida de información:** Cada empleado registra en hojas de cálculo o libretas propias
- **Sin seguimiento:** No hay notificaciones automáticas de estado de tickets

**📊 Diagrama sugerido:** Flujo actual vs. flujo propuesto del sistema de ticketing

# [[Infraestructura informática existente]]

## Inventario Tecnológico Actual:
### Hardware por Hotel:
- **8 PCs estándar:** AMD Ryzen 3, 8GB RAM, SSD 256GB
- **1 estación gerencial:** Intel i5, 16GB RAM  
- **Capacidad:** Suficiente para operación básica, requiere upgrade mínimo

### Plataforma de Software:
- **Sistemas Operativos:** Windows Server 2022 Standard + Windows 10
- **Base de Datos:** SQL Server 2019 Standard (licencias ya disponibles)
- **Productividad:** Microsoft 365 Business Standard
- **Seguridad:** Defender for Business + Firewall UTM (FortiGate 60E)

### Conectividad y Red:
- **Sede Central:** Fibra óptica 100Mbps simétrica  
- **12 Sucursales:** Enlaces 20-30Mbps con túneles VPN IPSec seguros
- **Limitación identificada:** Ancho de banda insuficiente para aplicaciones en tiempo real

## Ventaja Competitiva:
- **Infraestructura compatible:** Stack Microsoft homogéneo facilita integración
- **Inversión protegida:** Reutilización de licencias SQL Server y Office 365 existentes
- **Seguridad establecida:** VPN corporativa ya implementada entre sedes

**📊 Diagrama sugerido:** Topología de red actual y propuesta con mejoras de conectividad


# [[Necesidades estratégicas de información]]
- **Información requerida:** Dashboards de ocupación, rentabilidad por sede, análisis de fidelización CRM
- **Frecuencia de uso:** Tiempo real para operaciones, reportes diarios/mensuales para gerencia
- **Usuarios que la necesitan:** CEO, gerencias regionales, personal operativo (720 empleados en 12 hoteles)


---

# [[Definición del producto a Implementar]]

## Justificación de Desarrollo a Medida:
Tras evaluar alternativas (ERP hotelero SaaS vs. solución híbrida), se optó por **desarrollo propio** debido a:
- **Máxima adaptación** a procesos únicos de la cadena
- **Aprovechamiento total** de infraestructura existente (SQL Server 2019)
- **Control absoluto** sobre datos sensibles y propiedad intelectual
- **Visión futura:** Base para comercializar a otras cadenas hoteleras

## Arquitectura Tecnológica Propuesta:
- **Frontend:** React.js + TypeScript (interfaz moderna y responsive)
- **Backend:** .NET Core Web API (compatibilidad nativa con infraestructura actual)  
- **Base de Datos:** SQL Server 2019 centralizada (licencias ya disponibles)
- **Hosting:** Infraestructura local + Azure para APIs externas
- **Integración:** APIs REST nativas con Booking, Expedia, Airbnb, Despegar

## Módulos Principales Detallados:

### 1. Central de Reservas Unificada
- Gestión de 1.800 habitaciones en tiempo real
- Sincronización automática cada 5 minutos con OTAs
- **Beneficio:** Elimina 100% de sobreventas

### 2. CRM & Perfil del Huésped  
- Expediente único por cliente con historial completo
- Marketing segmentado automático
- **Beneficio:** Aumenta tasa de retorno sin gasto adicional

### 3. Mantenimiento Preventivo
- Programación automática (aires cada 90 días, ascensores cada 6 meses)
- **Beneficio:** Reduce 30% fallas críticas

**📊 Diagrama sugerido:** Arquitectura del sistema y flujos de integración con plataformas externas


# [[Infraestructura informática necesaria]]
- **Hardware requerido:** 2 estaciones adicionales Ryzen 5 (16GB), 2 tablets Android, servidor/NAS para respaldo
- **Software necesario:** Mantenimiento de stack actual (.NET, SQL Server), integración API con Booking/Expedia
- **Recursos de red:** Ancho de banda, protocolos]


# [[Ingeniería del proyecto]]

## Metodología Scrum con Gestión del Cambio
**¿Por qué Scrum para este proyecto?**
- **Cultura tradicional:** Entregas visibles cada 2 semanas ganan confianza de usuarios escépticos
- **Feedback constante:** Usuarios finales participan activamente, sienten ownership del proceso
- **Transparencia total:** Visibilidad clara del progreso para organización acostumbrada a información dispersa
- **Enfoque iterativo:** Estandarización gradual vs. cambio abrupto

## Cronograma de Esfuerzo (2.600 horas estimadas):
- **Escenario optimista:** 12 meses (máxima eficiencia)
- **Escenario probable:** 16 meses (incluye curva aprendizaje) ✅
- **Escenario pesimista:** 22 meses (resistencia significativa)

## Gestión de Resistencia al Cambio (Nivel: Medio):
### Estrategia de Mitigación:
1. **Comunicación anticipada:** Beneficios claros por rol
2. **Capacitación por perfiles:** 6 módulos específicos (recepción, housekeeping, mantenimiento, gerencias, administración, IT)
3. **Rollout escalonado:** Hotel piloto → validación → expansión gradual
4. **Campeones internos:** Usuarios clave como agentes de cambio

## Matriz de Riesgos Principales:
- **Alto riesgo:** Fallas en servidores, ciberataques, errores de carga → Mitigación: backups + MFA + capacitación
- **Medio riesgo:** Resistencia personal, inconsistencias contables → Mitigación: gestión del cambio + validaciones automáticas

**📊 Diagrama sugerido:** Cronograma Gantt con hitos críticos y dependencias entre fases



---

FIN
