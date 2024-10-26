# Portafolio Personal

En este proyecto se implementa un portfolio personal desarrollado con React en el frontend y NestJS en el backend. El proyecto permite a los usuarios ver una lista de proyectos, junto con detalles como la tecnología utilizada, descripciones, enlaces a GitHub y demos.

## Tecnologías Utilizadas

- **Frontend**:
  - React
  - JavaScript
  - TailwindCSS
  - Axios

- **Backend**:
  - NestJS
  - TypeScript
  - TypeORM
  - JWT para autenticación

## Instalación

### Requisitos Previos

- Node.js
- npm o yarn

### Clonar el Repositorio

```bash
git clone https://github.com/sergihejo/portfolio.git
cd portfolio
```

### Configuración del Backend

1. Navega al directorio del backend:

```bash
cd backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno en un archivo `.env`:

```env
DB_TYPE=mysql
DB_HOST=your_host
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database
DB_DRIVER=mysql
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_secret
```

4. Ejecuta las migraciones de la base de datos:

```bash
npm run typeorm migration:run
```

5. Inicia el servidor:

```bash
npm run start:dev
```

### Configuración del Frontend

1. Navega al directorio del frontend:

```bash
cd frontend
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno en un archivo `.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:3001
REACT_APP_CONTACT_URL=formspree.io_form_url
```

4. Inicia la aplicación:

```bash
npm start
```

## Uso

Una vez que ambos servidores (frontend y backend) estén en funcionamiento, puedes acceder a la aplicación en `http://localhost:3000`. La página principal mostrará una lista de proyectos con sus detalles.

## Estructura del Proyecto

```plaintext
portfolio/
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── projects/
│   │   ├── users/
│   │   └── main.ts
│   ├── .env
│   ├── nest-cli.json
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── webpack.config.js
└── README.md
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.