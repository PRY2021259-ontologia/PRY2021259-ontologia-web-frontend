This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Ontologia project

## Getting Started

Recuerda que instalamos las depencias con:

npm install

Para levantar el entorno de desarrollo usa:

```bash
npm run dev
# or
yarn dev
```

El navegador abrirá por defecto o puedes dirigirte a la ruta [http://localhost:3000](http://localhost:3000) with your browser to see the result. Si tienes otros proyectos corriendo en el 
mismo puerto, ten encuenta que se abrirá en el siguiente.

Las vistas que necesites modificar las encuentras en "pages".

El proyecto hace uso de Tailwind como framework para las hojas de estilo, todo esto se puede modificar en los tags de las vistas. Es como editar en html pero más cool.

La carpeta "components" contiene los componentes que necesitas para el desarrollo.

Para ingresar a las rutas de la API, usa:

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

TO-DO (Importante): 
Refactorizar el diseño responsive de las vistas, añadiendo más modificiones a las diferentes medidas. Para entender mejor que medidas puedes dirigirte a "tailwind.config.js".

Refactorizar el diseño responsive de los componentes, añadiendo más modificiones a las diferentes medidas.

Conectar el backend con el frontend. La URL está puesta en el archivo "next.config.js" solo falta llamarla en las funciones.

El proyecto tiene implementado seguridad con NextAuth.js, para que el usuario pueda ingresar a la aplicación. Tiene configurado Facebook y Google. De momento falta acomodarlo en el navbar. Pero por el momento tenemos puede leer los datos de los usuarios que se atentiquen. 
Para probarlo dirigete a "localhost:3000/login" y logeate con FB o Google.

Para poder levantar la Aplicacion y contar con seguridad, es necesario que tengas estas varibles de entorno, dirigete al archivo "entornovariables.txt".

Ponlas en un ".env.local" y guarda el archivo.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
