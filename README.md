# Desafío React/MongoDB para Drenvio

## Introducción
Este proyecto es una solución al desafío técnico propuesto por Drenvio, que consiste en crear una aplicación con React, Node.js y MongoDB que permita:
- Mostrar productos con precios normales y especiales
- Agregar nuevos precios especiales para usuarios específicos

## Ejecución local
1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   cd server && npm install
   cd ../client && npm install

   # Start server
   cd ../server
   touch .env
   npm run start

   # Start client
   cd ../client
   npm run dev

   # Por favor, colocar en server > .env las siguientes variables.
   # MONGO_URI=(colocar el enlace suministrado)
   # PORT=5000   
   ```

## Justificación de elecciones técnicas

Para el desarrollo de este proyecto, he optado por **JavaScript** debido a sus ventajas en flexibilidad, compatibilidad y facilidad de integración con navegadores. A diferencia de TypeScript, JavaScript permite un desarrollo ágil sin la necesidad de compilación previa, lo que facilita la iteración rápida y la depuración en el entorno del navegador.

## Descripción de la estructura del proyecto
#### 📂 **client** - Código del frontend
- `.gitignore`: Define qué archivos deben ignorarse en el control de versiones.
- `eslint.config.js`: Configuración de ESLint para mantener un código limpio.
- `index.html`: Archivo base de la aplicación.
- `package.json`: Listado de dependencias y scripts de ejecución.
- `public/`: Contiene assets públicos, como `vite.svg`.
- `README.md`: Documentación del frontend.
- `src/`: Código fuente de la aplicación.
  - `api.js`: Funciones para llamadas a la API.
  - `App.jsx`: Componente principal de la aplicación.
  - `components/`: Contiene subcomponentes (`Articulos.jsx`, `Subida.jsx`).
  - `index.css`: Estilos globales.
  - `main.jsx`: Punto de entrada de React.
- `vite.config.js`: Configuración de Vite para optimizar el frontend.

#### 📂 **server** - Código del backend
- `.env`: Configuración de variables de entorno.
- `.gitignore`: Ignora archivos innecesarios en el repositorio.
- `models/`: Definición de modelos de la base de datos (`PrecioEspecial.js`, `Producto.js`).
- `routes/`: Define las rutas del backend (`preciosEspeciales.js`, `productos.js`).
- `server.js`: Archivo principal del servidor.

#### 📂 **root** - Raíz principal
- `README.md`: Documentación general del proyecto.
