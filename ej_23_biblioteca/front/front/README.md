# ej_22
-aquí estamos haciendo un loggin de ususarios y las variables de entorno
-incluimos la libreria dotenv para incluir variables de entono
-utilizamos bcript para encriptar claves

# utilizar alias @ en vez de ../../../components
editar en vita.config.js

```js
//uso de path para el alias
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //alias para los imports
  resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
  }
})

```