# ADAUPS - Portal Web

Portal web oficial de la **Asociación de Docentes, Administrativos y Servicios de la Universidad Politécnica Salesiana, Sede Quito (ADAUPS)**. Da acceso a información sobre servicios financieros, beneficios, convenios, transparencia y noticias para los socios.

El portal de finanzas en línea (préstamos, ahorros, estado de cuenta) vive por separado en `finanzas.adaups.org` y no forma parte de este repositorio.

## Características Principales

- **Contenido tipado:** servicios, beneficios, eventos y noticias se definen como datos TypeScript con interfaces estrictas, sin CMS.
- **SEO y datos estructurados:** título, descripción y Open Graph propios por página, más JSON-LD (schema.org) para servicios, beneficios, noticias y eventos.
- **Imágenes optimizadas:** assets en WebP dimensionados a su tamaño real de despliegue.
- **Componentes reutilizables:** UI modular (galería con lightbox, animaciones al hacer scroll, cabeceras de página) para mantener la interfaz consistente.
- **Código limpio:** ESLint + Prettier configurados; TypeScript en modo `strict`.

## Stack Tecnológico

- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (`strict: true`)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Enrutamiento:** [React Router 7](https://reactrouter.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **SEO:** [react-helmet-async](https://github.com/staylor/react-helmet-async)

## Ejecutar Localmente

**Requisitos previos:** Node.js 20 o superior.

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera la carpeta `dist/` lista para desplegar en cualquier hosting de archivos estáticos.

4. **Previsualizar el build de producción:**
   ```bash
   npm run preview
   ```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción (`dist/`) |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | Verificación de tipos (`tsc --noEmit`) |
| `npm run clean` | Elimina la carpeta `dist/` |
