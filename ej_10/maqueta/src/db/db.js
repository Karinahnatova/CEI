import { v4 as uuidv4 } from 'uuid'; //libreria que crea un id con numeros unicos, hay que poner esta funcion a cada id: uuidv4()

export const pixar = {
    header: {
        h1: {
            src: "logo.png",
            href: "/",
            title: "Disney Pixar"
        },
        nav: [
            {
                id: uuidv4(),
                href: "/feature-films-launch.html",
                text: "Feature Films"
            },
            {
                id: uuidv4(),
                href: "/feature-films-launch.html",
                text: "Short Films",
                submenu: [
                    {id:uuidv4(), text: "item1"},
                    {id:uuidv4(), text: "item2"},
                    {id:uuidv4(), text: "item3"}
                ]
            },
            {
                id: uuidv4(),
                href: "/feature-films-launch.html",
                text: "Technogogy"
            }

        ]
    },
    hero: {},
    columns: {},
    footer: {}
}