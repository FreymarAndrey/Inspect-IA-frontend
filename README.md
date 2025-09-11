# Inspectia Web Frontend

Este proyecto es el frontend de la aplicación Inspectia Web, desarrollado con React y TypeScript.

## 🛠️ Herramientas Utilizadas

### Tecnologías Principales
- **React 19.1.1**: Biblioteca principal para la construcción de la interfaz de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Vite**: Herramienta de construcción rápida y servidor de desarrollo

### Librerías y Dependencias
- **React Router DOM**: Enrutamiento para aplicaciones React
- **Axios**: Cliente HTTP para realizar peticiones a la API
- **Formik**: Gestión de formularios en React
- **Yup**: Validación de esquemas para formularios
- **CSS Modules**: Estilos modulares para componentes

### Herramientas de Desarrollo
- **ESLint**: Linting y formateo de código
- **TypeScript ESLint**: Reglas específicas para TypeScript
- **Vite Plugin React**: Integración de React con Vite

## 🚀 Despliegue

### Opción 1: Despliegue Local (Sin Docker)

Para ejecutar el proyecto localmente sin Docker:

#### Prerrequisitos
- Node.js versión 20 o superior instalado
- npm o yarn instalado

#### Pasos para ejecutar localmente
```bash
# Acceder al directorio del proyecto frontend
cd src

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite en `http://localhost:3000` (puerto por defecto de Vite).

### Opción 2: Despliegue con Docker

#### Prerrequisitos
- Docker instalado en el sistema
- Docker Compose instalado

#### Opciones de Despliegue con Docker

##### Usando Makefile (Recomendado)
El proyecto incluye un Makefile con comandos simplificados para el despliegue:

```bash
# Despliegue en desarrollo
make dev

# Detener todos los contenedores
make down

# Limpiar imágenes no utilizadas
make clean
```

##### Usando Docker Compose directamente

##### 1. Despliegue en Desarrollo con Docker
Para desarrollo local con hot-reload usando Docker:

```bash
# Ejecutar el contenedor de desarrollo
docker-compose -f docker-compose.local.yml up --build
```

Esto utilizará:
- **Dockerfile.dev**: Configuración para desarrollo con Vite dev server
- Puerto 3000 mapeado al puerto 3000 del contenedor
- Volúmenes montados para desarrollo en tiempo real
### Comandos Útiles

```bash
# Detener todos los contenedores
docker-compose down

# Ver logs del contenedor
docker-compose logs -f

# Reconstruir sin cache
docker-compose build --no-cache

# Ejecutar comandos dentro del contenedor
docker-compose exec client sh
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── header/         # Componente de encabezado
│   └── footer/         # Componente de pie de página
├── pages/              # Páginas principales
│   ├── Auth/          # Páginas de autenticación
│   ├── Home/          # Página principal
│   └── ScheduleAudit/ # Programación de auditorías
├── context/            # Contextos de React
├── interface/          # Definiciones de tipos TypeScript
├── routes/             # Configuración de rutas
├── services/           # Servicios para API
├── validators/         # Validadores de formularios
└── assets/             # Recursos estáticos
```

## 🔧 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar linter
npm run lint

# Vista previa de la build
npm run preview
```

## 🌐 Acceso a la Aplicación

- **Desarrollo**: http://localhost:3000
- **Producción**: http://localhost:3000 (o el puerto configurado)

## 📝 Notas Adicionales

- El proyecto utiliza CSS Modules para el estilado de componentes
- La configuración de ESLint está optimizada para React y TypeScript
- Los contenedores Docker están configurados para reiniciarse automáticamente a menos que sean detenidos manualmente
