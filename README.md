# User Admin Project

Aplicación Angular básica para gestión y visualización de usuarios utilizando la API pública de Random User.

## Descripción

Esta aplicación permite visualizar una lista de usuarios con búsqueda, filtrado y paginación, además de acceder al detalle de cada usuario. Está desarrollada con Angular 21, TypeScript y Tailwind CSS.

## Características

- **Home**: Página de bienvenida con navegación y diseño moderno
- **Users**: Lista de usuarios en formato tabla con:
  - Búsqueda y filtrado en tiempo real
  - Paginación de resultados
  - Skeleton loaders durante la carga
  - Datos de Random User API
- **User Detail**: Vista detallada de cada usuario seleccionado
- **About**: Información sobre el desarrollador y tecnologías utilizadas

## Tecnologías

- Angular 21
- TypeScript
- Tailwind CSS
- RxJS
- Random User API (https://randomuser.me/)

## Mejoras Implementadas

### ✨ Funcionalidades Adicionales

1. **Buscador/Filtro**: Búsqueda en tiempo real por nombre, email o país
2. **Paginación**: Sistema de paginación completo con navegación entre páginas
3. **Skeleton Loaders**: Indicadores de carga elegantes durante la obtención de datos
4. **Menú Global Mejorado**: 
   - Navegación sticky en la parte superior
   - Menú responsive para móviles
   - Indicadores visuales de página activa
   - Diseño moderno con gradientes
5. **Mejoras de UX**:
   - Diseño con gradientes y sombras
   - Transiciones suaves
   - Hover effects en elementos interactivos
   - Diseño responsive completo
   - Colores y temas consistentes

## Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   │   └── user.model.ts
│   │   └── services/
│   │       └── user.service.ts
│   ├── shared/
│   │   └── components/
│   │       ├── navbar/
│   │       ├── search-input/
│   │       └── skeleton-loader/
│   ├── features/
│   │   ├── home/
│   │   ├── users/
│   │   ├── user-detail/
│   │   └── about/
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
└── environments/
    ├── environment.ts
    └── environment.prod.ts
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
# o
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`

## Construcción

Para construir el proyecto para producción:

```bash
ng build
```

## Uso de IA

Esta aplicación fue desarrollada con asistencia de IA para:
- Arquitectura y estructura del proyecto
- Implementación de servicios y componentes
- Estilos con Tailwind CSS
- Integración con Random User API
- Implementación de búsqueda, paginación y skeleton loaders
- Mejoras de UX y diseño

## Características Técnicas

- **Lazy Loading**: Todas las rutas utilizan lazy loading para optimizar el rendimiento
- **Signals**: Uso de Angular Signals para reactividad
- **Standalone Components**: Todos los componentes son standalone
- **Computed Signals**: Para cálculos derivados (filtrado, paginación)
- **Responsive Design**: Diseño adaptativo para todos los dispositivos
