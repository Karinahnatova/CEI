//con npm run build aparece dist, una carpeta la que tendremos que subri al servidor

function Home() {

  const {VITE_NAME, VITE_MODE} = import.meta.env;
    return (
      <>
      <h1>Nuestra libreria home {VITE_MODE}</h1>
      <p>Mi nombre es: {VITE_NAME}</p>
      </>
    )
}

export default Home