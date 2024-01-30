const cuadros = document.querySelectorAll(".cuadro"); //una constante que selecciona la clase de cuadro, todos los cuadrados
const controles = document.querySelectorAll("input"); //una constante que selecciona el input, que controlará los colores
const codigoColor = document.querySelector("p"); //una constante que selecciona lel texto del cuadrado que cambia de color

function hexadecimal(r,g,b){ //una función con los parámetros r, g, b (reed, green, blue)
    let codigo = []; //una variable que selecciona un array
    for(let i = 0; i < arguments.length; i++){ //un for con un bucle dentro que contiene la longitud de los argumentos (r, g, b)
        codigo.push((Number(arguments[i]) < 16 ? "0" : "") + Number(arguments[i]).toString(16)); //una funcion que añade (con push) al array de la variable codigo, un numero (del 0 al 16) a cada argumento (r, g, b) que cuando sea menor que 16, añdirá un 0 y los convertirá en un string.
    }
    return `#${codigo.join("")}`; //se creará y devolevrá el código rgb del color indicado en una concatenación de un array.
}


controles.forEach(function(control,indice){ //con el forEach, cada uno de los tres controles (los tres cuadrados con los inputs) tendrán una función que coje como parametros un control y un indice
    control.addEventListener("input",function(){ //se le añdae un evento con addEventListener a cada input que se llamará contol, mediante una función que contiene lo siguiente: 
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value); //se selecciona el primer cuadrado (de los 4), el que va a desempeñar la función de cambio de color de fondo, aplicandole la función hexadecimal que se creó antes y se le añade a cada control (input) un valor que devuelve  el valor que se indicará en el input del control.
        
        codigoColor.innerHTML = hexadecimal(controles[0].value,controles[1].value,controles[2].value); //se selecciona el texto que inica el codigo del color rgb, que cambiará dependiendo del vlaor que se indique en los controles, mediante la función hexadecimal que se creó antes.

        cuadros[indice + 1].style.backgroundColor = hexadecimal(indice == 0 ? control.value : 0,indice == 1 ? control.value : 0,indice == 2 ? control.value : 0); // cambiará el color del texto

    });
});




//Comentar cada una de las líneas JS, las tags <section> del html, y la hoja de estilos CSS


//Agregar un botón general de "Guardar Color" para que cada vez que lo presione, se almacene en un array el color seleccionado.


let coloresGuardados = [] //array para guardar colores

document.querySelector(".boton_guardar").addEventListener("click", function() { //seleccionamos el botón y le añadimos un evento de clcik y una función

    let colorIndicado = document.querySelector(".cuadro p").innerText //seleccionamos el texto del cuadro

    if (coloresGuardados.length >= 10) { //si en la lista habrán más de 10 elementos:
        coloresGuardados.shift(); // Elimina el primer elemento del array (el más antiguo) CON SHIFT
    }
    
    coloresGuardados.push(colorIndicado) //guardar el color en el array
    
    console.log(`Has guardado este color: `, coloresGuardados) //en la consola se mostrán los colores indicados que guardamos

    mostrarListaColores();
    
})

//Agregar una lista que vaya mostrando cada uno de los colores guardados mostrando su código RGB y un circulo relleno con ese color.

function mostrarListaColores() {
    let listaColores = document.getElementById('listaColores');
    listaColores.innerHTML = ''; // Limpiar la lista

    // Agregar dinámicamente los colores guardados a la lista
    coloresGuardados.forEach(function(color) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
        <h4>Codigo: ${color}</h4>
        <h4>Color: <div id="circulo_color" class="circulo_color" style="background-color: ${color};"></div></h4>
        `;

        //botón para borrar el elemento de la lista
        let botonBorrar = document.createElement('button')
        botonBorrar.textContent = 'Eliminar'
        botonBorrar.classList.add('boton_borrar_item')
        botonBorrar.setAttribute("style", "background-color: pink;")


    

        // Agregar EventListener de clic al botón de borrar
        botonBorrar.addEventListener("click", function() {
            coloresGuardados.pop() //con .pop eliminamos el ultimo elemento
            mostrarListaColores();
            
        });

        listItem.appendChild(botonBorrar);
        

        listaColores.appendChild(listItem);
    });
}





//Agregar un EventListener de Click a cada item de la lista para que los sliders y cuadros se carguen con el color seleccionado.


//Agregar un botón general de "Borrar Lista" para quitar todos los colores guardados

document.querySelector(".boton_borrar").addEventListener("click", function() {
    coloresGuardados = [] //eliminar

    mostrarListaColores() //mostrar lista vacía
})


//Permitir almacenar un máximo de 10 colores borrando los colores mas viejos
//lo he añadido a la ejercico 2
// si en la lista los colores guardados son mayores que 10, entonces se eliminará el primer array más antiguo
// if (coloresGuardados.length >= 10) {
//     coloresGuardados.shift(); // Elimina el primer elemento del array (el más antiguo)
// }



//Agregar un botón de "Borrar" a cada item de la lista para eliminar dicho item del array.

// let botonBorrar = document.createElement('button')
// botonBorrar.textContent = "Eliminar"
// botonBorrar.classList.add(boton_borrar_item)

//    //añadimos el eventListener de click, para borrar

//    botonBorrar.addEventListener('click', function() {
//     borrarColor(index);
//    });

//    listItem.appendChild(botonBorrar);

//    listaColores.appendChild(listItem);

   



//Está bien poner todas las variables o constantes al principio de la actividD