# SpaceMovie

React + Vite + Bootstrap, organizado con Atomic Design.

## Cómo ejecutarlo en VS Code

1. Abre la carpeta del proyecto en VS Code.
2. Abre la terminal (Ctrl + ñ) e instala las dependencias:

   npm install

3. Inicia el servidor de desarrollo:

   npm run dev

4. Abre el enlace que aparece (normalmente http://localhost:5173).
   Para cambiar de película usa `/?id=1` o `/?id=2`.

## Estructura

- `src/components/atoms`: piezas mínimas (Text, Image, Button, Input, TextArea, Icon)
- `src/components/molecules`: combinaciones de átomos (FormField, ApprovalBadge, ReviewCard, NavLinks, InfoItem, FooterColumn)
- `src/components/organisms`: secciones completas (Header, MovieDetails, ApprovalSection, ReviewList, ReviewForm, Footer)
- `src/pages`: páginas que juntan los organismos
- `src/data`: datos de las películas y del sitio
- `src/utils`: lógica reutilizable (película según la URL, filtro de reseñas)
- `src/styles`: CSS por componente, más `global.css` con la paleta y ajustes de Bootstrap
