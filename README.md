# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Pruebas unitarias

Se usan Vitest y React Testing Library. Hay 3 pruebas por cada componente de `src/components` (24 componentes, 72 pruebas), en `src/tests/components`, con la misma división atoms / molecules / organisms.

- `npm test`: ejecuta todas las pruebas una vez.
- `npm run test:watch`: las vuelve a ejecutar al guardar cambios.
- `npm run test:coverage`: ejecuta las pruebas y muestra el porcentaje de código cubierto.


## Subir tus archivos a git


git clone https://github.com/CapiCuy498/Prueba-2F.git

para copiar el repositorio y traer lo que contiene 

despues hacer un 

git pull origin main

para asegurarsede traer todo

despues envias los archivos nuevos a la carpeta  y los pegas 

para guardar se hace primero un

git add .

despues

git commit -m "mensaje que quieras ponerle al cambio"
y por ultimo 

git push origin main
