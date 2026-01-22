<div align="center">
  <svg width="139" height="42" viewBox="0 0 139 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- tu SVG completo aquí -->
  </svg>
</div>

![Logo](https://github.com/user-attachments/assets/5b6c0d85-78f6-4a6e-b5f9-a9579ac69264)

<div align="center">
  <h3>Plataforma moderna para gestión y visualización de usuarios</h3>
  <p>Desarrollada con Angular 21, TypeScript y Tailwind CSS</p>
</div>

<div align="center">
  <img width="1773" height="1007" alt="image" src="https://github.com/user-attachments/assets/a020db34-0e2b-4e41-b264-daa470efa80f" />
</div>

---

## 📋 Descripción

**Userly** es una aplicación web moderna y completa diseñada para la gestión y visualización de información de usuarios. La plataforma ofrece una experiencia de usuario excepcional con herramientas potentes para buscar, filtrar, paginar y visualizar datos de usuarios de manera eficiente.

La aplicación consume datos de la API pública de [Random User](https://randomuser.me/) para proporcionar información realista de usuarios, incluyendo datos personales, ubicación, contacto y fotografías. Está construida siguiendo las mejores prácticas de Angular, utilizando arquitectura modular, componentes standalone y signals para una reactividad óptima.

### 🎯 Objetivo del Proyecto

Userly demuestra las capacidades de Angular 21 en la construcción de aplicaciones modernas, escalables y mantenibles, con un enfoque en:
- **Experiencia de Usuario**: Interfaz intuitiva y responsive
- **Rendimiento**: Optimización mediante lazy loading y computed signals
- **Mantenibilidad**: Arquitectura limpia y código bien estructurado
- **Modernidad**: Uso de las últimas características de Angular

---

## ✨ Características Principales

### 🏠 Página de Inicio
- Diseño moderno con gradientes y animaciones suaves
- Sección hero con call-to-action
- Tarjetas de características destacadas
- Métricas y estadísticas visuales
- Diseño completamente responsive

### 👥 Gestión de Usuarios
- **Lista de Usuarios**: Visualización en formato tabla (desktop) y tarjetas (móvil)
- **Búsqueda Avanzada**: Filtrado en tiempo real por nombre, email o país
- **Paginación Inteligente**: Sistema de paginación con navegación intuitiva (10 usuarios por página)
- **Skeleton Loaders**: Indicadores de carga elegantes durante la obtención de datos
- **Exportación a Excel**: Generación de reportes en formato .xlsx con datos filtrados
- **Vista Detallada**: Acceso completo a información detallada de cada usuario

### 🎨 Interfaz y Experiencia
- **Tema Claro/Oscuro**: Sistema de temas con persistencia en localStorage
- **Diseño Responsive**: Adaptación perfecta a móviles, tablets y escritorio
- **Navegación Intuitiva**: Menú sticky con indicadores de página activa
- **Transiciones Suaves**: Animaciones y efectos hover en elementos interactivos
- **Banderas de Países**: Visualización de banderas usando códigos ISO

### 📱 Responsive Design
- Diseño mobile-first
- Menú hamburguesa para dispositivos móviles
- Tabla adaptativa que se convierte en tarjetas en pantallas pequeñas
- Optimización de imágenes y carga diferida

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 21** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework de utilidades CSS
- **RxJS** - Programación reactiva
- **Angular Signals** - Sistema de reactividad moderno

### Herramientas y Utilidades
- **Random User API** - Fuente de datos de usuarios
- **XLSX** - Generación de archivos Excel
- **Angular SSR** - Server-Side Rendering para mejor SEO

### Arquitectura
- **Standalone Components** - Componentes independientes
- **Lazy Loading** - Carga diferida de rutas
- **Computed Signals** - Cálculos reactivos optimizados
- **Service Layer** - Separación de lógica de negocio

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm (versión 9 o superior)
- Angular CLI (versión 21 o superior)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd userly
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   # o
   ng serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

### Construcción para Producción

```bash
# Construcción estándar
ng build

# Construcción con SSR
ng build --configuration production
```

---

## 📁 Estructura del Proyecto

```
userly/
├── src/
│   ├── app/
│   │   ├── core/                    # Módulos core de la aplicación
│   │   │   ├── models/              # Modelos de datos
│   │   │   │   └── user.model.ts
│   │   │   └── services/            # Servicios principales
│   │   │       ├── user.service.ts  # Servicio de usuarios
│   │   │       └── theme.service.ts # Servicio de temas
│   │   │
│   │   ├── shared/                  # Componentes compartidos
│   │   │   └── components/
│   │   │       ├── navbar/          # Barra de navegación
│   │   │       ├── footer/          # Pie de página
│   │   │       ├── search-input/    # Componente de búsqueda
│   │   │       └── skeleton-loader/ # Loader de carga
│   │   │
│   │   ├── features/                # Módulos de características
│   │   │   ├── home/                # Página de inicio
│   │   │   ├── users/               # Lista de usuarios
│   │   │   ├── user-detail/         # Detalle de usuario
│   │   │   └── about/               # Página acerca de
│   │   │
│   │   ├── app.component.ts         # Componente raíz
│   │   ├── app.config.ts            # Configuración de la app
│   │   └── app.routes.ts            # Configuración de rutas
│   │
│   ├── environments/                # Variables de entorno
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   │
│   ├── styles/                      # Estilos globales
│   │   ├── tailwind.css
│   │   └── _variables.scss
│   │
│   └── index.html                   # HTML principal
│
├── public/                          # Archivos estáticos
│   └── img/                         # Imágenes y assets
│
├── angular.json                     # Configuración de Angular
├── package.json                     # Dependencias del proyecto
├── tsconfig.json                    # Configuración de TypeScript
└── tailwind.config.js               # Configuración de Tailwind
```

---

## 🎯 Características Técnicas

### Arquitectura
- **Arquitectura Modular**: Separación clara de responsabilidades
- **Feature-Based Structure**: Organización por características funcionales
- **Core/Shared Pattern**: Separación entre código core y compartido

### Rendimiento
- **Lazy Loading**: Todas las rutas cargan bajo demanda
- **Computed Signals**: Cálculos optimizados y reactivos
- **OnPush Change Detection**: Estrategia optimizada de detección de cambios
- **Code Splitting**: División automática del código

### Reactividad
- **Angular Signals**: Sistema moderno de reactividad
- **Computed Values**: Valores derivados calculados automáticamente
- **Effect System**: Efectos reactivos para side effects

### Accesibilidad y UX
- **Semantic HTML**: Uso correcto de elementos semánticos
- **Keyboard Navigation**: Navegación completa por teclado
- **Loading States**: Estados de carga claros y visibles
- **Error Handling**: Manejo robusto de errores

---

## 📖 Uso de la Aplicación

### Navegación
- **Home**: Página principal con información general
- **Users**: Lista completa de usuarios con búsqueda y paginación
- **User Detail**: Vista detallada de un usuario específico
- **About**: Información sobre el proyecto y tecnologías

### Funcionalidades de Búsqueda
1. Ingresa texto en el campo de búsqueda
2. La búsqueda se realiza en tiempo real
3. Los resultados se filtran automáticamente
4. La paginación se reinicia automáticamente

### Exportación de Datos
1. Aplica filtros si deseas exportar un subconjunto
2. Haz clic en el botón "Export to Excel"
3. El archivo se descargará automáticamente con los datos filtrados

### Cambio de Tema
- El tema se detecta automáticamente según las preferencias del sistema
- Puedes cambiar el tema manualmente (si está implementado)
- La preferencia se guarda en localStorage

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia el servidor de desarrollo
ng serve               # Alternativa con Angular CLI

# Construcción
npm run build          # Construye para producción
ng build               # Alternativa con Angular CLI

# Testing
npm test               # Ejecuta las pruebas unitarias
ng test                # Alternativa con Angular CLI

# SSR
npm run serve:ssr:userly  # Inicia el servidor SSR
```

---

## 🌟 Mejoras y Características Destacadas

### Funcionalidades Avanzadas
- ✅ Búsqueda en tiempo real con debounce implícito
- ✅ Filtrado por múltiples campos simultáneamente
- ✅ Paginación con navegación intuitiva
- ✅ Exportación a Excel con formato personalizado
- ✅ Skeleton loaders para mejor UX
- ✅ Manejo de errores con mensajes claros
- ✅ Estados de carga bien definidos

### Diseño y Estilo
- ✅ Diseño moderno con Tailwind CSS
- ✅ Sistema de temas claro/oscuro
- ✅ Animaciones y transiciones suaves
- ✅ Diseño completamente responsive
- ✅ Iconos SVG integrados
- ✅ Gradientes y sombras modernas

### Optimizaciones
- ✅ Lazy loading de rutas
- ✅ Computed signals para cálculos eficientes
- ✅ Eliminación de duplicados automática
- ✅ Optimización de imágenes
- ✅ Code splitting automático

---

## 📝 Notas de Desarrollo

### Convenciones de Código
- Componentes standalone
- Signals para estado reactivo
- Servicios inyectables con `providedIn: 'root'`
- Nombres descriptivos y consistentes
- Comentarios en español

### Mejores Prácticas Implementadas
- Separación de responsabilidades
- Reutilización de componentes
- Manejo de errores robusto
- Type safety con TypeScript
- Accesibilidad básica

---

## 👨‍💻 Desarrollador

**Sergio Camilo Ochoa Rodriguez**  
Frontend Software Engineer  
📧 sochoadev@gmail.com

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y de demostración.

---

## 🙏 Agradecimientos

- [Random User API](https://randomuser.me/) por proporcionar datos de usuarios de prueba
- [Angular Team](https://angular.io/) por el excelente framework
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño utilitario

---

<div align="center">
  <p>Hecho con ❤️ usando Angular 21</p>
</div>
