## Estructura de los conceptos

1. Definición de Objetivos
   ├─ Objetivo del proyecto: Aqui es lo que se pretende con el proyecto
   ├─ Objetivo del producto: Aqui se describe que es lo que haria el producto
   ├─ Alcances: Se dice que es lo que se le da y es lo que no se le da
   └─ Duración / Costos / Riesgos iniciales

3. Análisis del Contexto
   ├─ Descripción de la organización
   ├─ FODA
   ├─ Tipificación del cliente / Mercado
   ├─ Sistema de información existente: que dispone la empresa y con lo que tiene se desataca lo que le falta.
   ├─ Infraestructura informática (Existente): 
   ├─ Cultura organizacional: 
   └─ Necesidades estratégicas de información: 

5. Análisis Técnico-Operativo
   ├─ Sistema informático óptimo
   ├─ Alternativas tecnológicas
   ├─ Producto a implementar
   ├─ Infraestructura necesaria
   ├─ Metodología de diseño
   ├─ Condicionamientos
   ├─ Resistencia al cambio
   ├─ Plan de capacitación
   ├─ Estrategia de relación
   ├─ Ingeniería del proyecto: Fase/Modulo
   ├─ Gestión de riesgos
   └─ Marco legal y regulatorio

6. Análisis Económico-Financiero
   ├─ Costos de producción y administración
   ├─ Inversión inicial
   ├─ ROI y rentabilidad
   └─ Escenarios presupuestarios

7. Factibilidad del Proyecto
   ├─ Económica
   ├─ Técnica
   ├─ Operativa
   └─ Legal

8. Decisión Final
   ├─ Roles y compromisos
   └─ Factores de riesgo finales




## Conceptos:
### **1. [[OBJETIVO DEL PROYECTO]]**

Define **qué se busca lograr globalmente** con el proyecto.  
Debe ser **SMART** (específico, medible, alcanzable, relevante y temporal).  
👉 En el caso de la cadena hotelera: implementar en **16 meses** un **Sistema Integral de Información Hotelera Multisucursal** que centralice operaciones, reduzca tiempos, optimice costos y mejore la satisfacción del cliente.

---

### **2. OBJETIVO DEL PRODUCTO**

Es el **resultado tangible o sistema final** que se desarrollará.  
Describe **qué hará el sistema** y **cómo solucionará los problemas detectados**.  
👉 En el proyecto: desarrollar e implementar un sistema que centralice reservas, reclamos, mantenimiento, CRM y proveedores, con dashboards e integración a plataformas como Booking y Airbnb.

---

### **3. ALCANCES DEL PROYECTO**

Define **qué actividades, entregables y responsables** están incluidos y **cuáles no**.  
Incluye fases, productos esperados y stakeholders involucrados.  
👉 En este caso: abarca desde relevamiento, diseño, desarrollo, migración de datos, pruebas, capacitación, soporte post-implementación y contrato de mantenimiento.

---

### **4. DESCRIPCIÓN DE LA ORGANIZACIÓN**

Presenta **quién es el cliente**, su **estructura**, **recursos**, **problemas actuales** y **contexto operativo**.  
👉 Cadena Hotelera Andina S.A.: red de 12 hoteles en 7 provincias, con 720 empleados y procesos manuales y descentralizados que generan errores, demoras y sobreventas.

---

### **5. ANÁLISIS FODA**

Herramienta que **evalúa factores internos y externos** de la organización:

- **Fortalezas:** lo que la empresa hace bien.
    
- **Oportunidades:** condiciones externas favorables.
    
- **Debilidades:** aspectos internos a mejorar.
    
- **Amenazas:** factores externos de riesgo.  
    👉 Antes del proyecto: procesos manuales, errores, dispersión.  
    👉 Después: centralización, trazabilidad, analítica y ventaja competitiva.
    

---

### **6. TIPIFICACIÓN DEL CLIENTE Y ANÁLISIS DEL MERCADO**

Identifica **a quién se le entrega la solución** y **qué necesidades cubre**.  
Se distingue entre:

- Cliente institucional (empresa contratante).
    
- Usuarios internos (empleados y gerentes).
    
- Clientes finales (huéspedes, empresas, agencias).  
    👉 El sistema mejora la operación interna, pero **beneficia indirectamente al huésped final** al agilizar la atención.
    

---

### **7. SISTEMA DE INFORMACIÓN EXISTENTE**

Describe cómo se gestionan actualmente los datos, procesos y tecnología.  
👉 En la cadena: uso de **Excel, correos y llamadas** sin integración ni trazabilidad, lo que causa sobreventas, errores y pérdida de información.

---

### **8. INFRAESTRUCTURA INFORMÁTICA DEL CLIENTE**

Detalla el **hardware, software, conectividad y seguridad actuales**.  
👉 Equipos Ryzen, red VPN IPSec, SQL Server 2019, Windows Server 2022, backups locales y en la nube, antivirus centralizado y conexión por fibra óptica.

---

### **9. CULTURA INFORMÁTICA Y ORGANIZACIONAL**

Analiza **cómo se relacionan las personas con la tecnología** y la estructura jerárquica.  
👉 Cultura tradicional, procesos fragmentados, resistencia media al cambio, pero con infraestructura adecuada y predisposición a capacitarse.

---

### **10. DETERMINACIÓN DE LAS NECESIDADES ESTRATÉGICAS DE INFORMACIÓN**

Define **qué información es clave** para la toma de decisiones.  
👉 En este caso: rentabilidad por sede, fidelización de huéspedes, gestión de reclamos, análisis de demanda, control de proveedores y dashboards gerenciales.

---

### **11. SISTEMA INFORMÁTICO ÓPTIMO**

Representa **la versión ideal** del sistema propuesto: cómo debería funcionar si no existieran limitaciones.  
👉 Ecosistema digital centralizado (web + app móvil) con base de datos única, integraciones OTA, BI y CRM.

---

### **12. ALTERNATIVAS TECNOLÓGICAS**

Evalúa diferentes opciones para implementar el sistema:

- **Desarrollo a medida (on-premise o nube)**
    
- **ERP SaaS existente**
    
- **Solución híbrida**  
    👉 Se eligió **desarrollo a medida**, por adaptabilidad y control total de datos.
    

---

### **13. DEFINICIÓN DEL PRODUCTO A IMPLEMENTAR**

Describe **la arquitectura técnica y los módulos principales** del sistema elegido.  
👉 Arquitectura React + .NET Core + SQL Server; módulos: reservas, mantenimiento, ticketing, CRM y BI.

---

### **14. INFRAESTRUCTURA NECESARIA**

Define **los recursos tecnológicos adicionales** requeridos para ejecutar el sistema.  
👉 Servidores Xeon, PCs modernas, tablets, VPN segura, Firewalls FortiGate, Power BI, SQL Server, y nube híbrida con respaldo automático.

---

### **15. METODOLOGÍA DE DISEÑO**

Explica **el enfoque de trabajo y gestión del proyecto**.  
👉 Metodología **Scrum** con gestión del cambio, entregas quincenales, feedback constante y enfoque participativo para reducir la resistencia al cambio.

---

### **16. CONDICIONAMIENTOS DEL PROYECTO**

Son los **factores que limitan o condicionan** el desarrollo.  
👉 Tiempo (16 meses), presupuesto (2600 h), alcance definido, compatibilidad tecnológica, y dependencias de terceros (Booking, Expedia, proveedores).

---

### **17. ANÁLISIS DE RESISTENCIA AL CAMBIO**

Identifica **causas, nivel y estrategias** para superar la resistencia.  
👉 Miedo al uso de tecnología, pérdida de control, jerarquía rígida.  
Solución: comunicación, capacitación, soporte continuo y agentes de cambio internos.

---

### **18. PLAN DE CAPACITACIÓN**

Organiza la **formación del personal por roles**.  
Incluye objetivos, contenidos, metodología, horarios, lugar y recursos.  
👉 Módulos de capacitación por área (recepción, housekeeping, mantenimiento, finanzas, dirección, TI) con material interactivo y soporte post-implementación.

---

### **19. ESTRATEGIA DE RELACIÓN CON LA ORGANIZACIÓN**

Define **cómo se trabajará con los distintos stakeholders**.  
👉 Comunicación transparente, involucramiento activo, capacitación y soporte continuo.  
Se busca mantener alineados a todos los niveles jerárquicos.

---

### **20. GESTIÓN DE RIESGOS**

Proceso sistemático para **identificar, evaluar y mitigar riesgos**.  
Metodología **OWASP adaptada** al contexto hotelero.  
Categorías: tecnológicos, seguridad, operativos, financieros, legales y reputacionales.  
👉 Se identificaron 8 riesgos principales (fallas de servidores, ciberataques, errores humanos, etc.) con planes de mitigación, auditorías y revisión trimestral.

---

### **21. MARCO LEGAL Y REGULATORIO**

Determina las **leyes y normativas aplicables** al sistema y su operación.  
👉 Ley 25.326 (Datos personales), Ley 24.240 (Consumidor), Ley 26.388 (Delitos informáticos), AFIP (facturación electrónica), Ley 11.723 (Propiedad intelectual).  
Incluye designación de DPO, trazabilidad y registros auditables.

---

### **22. INGENIERÍA DEL PROYECTO**

Conjunto de **recursos, tiempos y actividades planificadas** que estructuran la ejecución.  
👉 Define fases del proyecto, cronograma tipo Gantt, dependencias y tiempos estimados.  
Duración total: **16 meses** (2600 horas promedio), con 10 fases desde análisis hasta entrega final.