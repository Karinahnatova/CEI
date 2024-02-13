import { v4 as uuidv4 } from 'uuid'; //libreria que crea un id con numeros unicos, hay que poner esta funcion a cada id: uuidv4()

export const pixar = {
    header: {
        h1: {
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/0755a48b-bbaf-4dff-8e78-9b489106eec6/logo022.jpg?format=1500w",
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
                    {id:uuidv4(), text: "Theatrical Shorts"},
                    {id:uuidv4(), text: "Disney+"},
                    {id:uuidv4(), text: "Scrap"}
                ]
            },
            {
                id: uuidv4(),
                href: "/feature-films-launch.html",
                text: "Technogogy"
            }

        ]
    },

    hero: {
        backgroundsrc: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1699472929056-R6KDN8SAAXSJBT45V866/io2bg.jpg?format=2500w",
        src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/11db2edf-cfab-45f3-b825-6eb0933f16f9/io2_logo.png?format=2500w",
        text: "Disney PIXAR Inside Out 2",
        href: "https://www.youtube.com/watch?v=VWavstJydZU"
    },

    columns: [

        {
            id: uuidv4(),
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489515186655-LQ8Q6L0MFGETKRSTD0UW/image-asset.jpeg?format=750w",
            h3: "Careers At Pixar"
        },
        {
            id: uuidv4(),
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/14d587cf-008b-403e-aa2d-78a0d91c98cf/Home_Lower-elio.jpg?format=750w",
            h3: "Elio"
        },
        {
            id: uuidv4(),
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/9c25e4d4-ad11-421d-ab84-afda6157e3a5/wl_lower.jpg?format=750w",
            sh3: "Win Or Lose"
        }
    ],

    footer: {

        div: [
            {id: uuidv4(), src: "logo_facebook.png", href: "/"},
            {id: uuidv4(), src: "logo_twitter.png", href: "/"},
            {id: uuidv4(), src: "logo_youtube.png", href: "/"},
            {id: uuidv4(), src: "logo_instagram.png", href: "/"}
        ],

        p: [
            {id: uuidv4(), text: "Privacy Policy", href: "https://www.pixar.com/#:~:text=WIN%20OR%20LOSE-,PRIVACY%20POLICY,-%7C%20TERMS%20OF" },
            {id: uuidv4(), text: "Terms of Use", href: "https://www.pixar.com/#:~:text=PRIVACY%20POLICY%20%7C-,TERMS%20OF%20USE,-YOUR%20US%20STATE" },
            {id: uuidv4(), text: "Your Us State Privacy Rigths", href: "https://www.pixar.com/#:~:text=YOUR%20US%20STATE%20PRIVACY%20RIGHTS" },
            {id: uuidv4(), text: "Childrens Online Privacy Policy", href: "https://www.pixar.com/#:~:text=CHILDREN%E2%80%99S%20ONLINE%20PRIVACY%20POLICY" },
            {id: uuidv4(), text: "Interest-Based Ads", href: "https://www.pixar.com/#:~:text=ONLINE%20PRIVACY%20POLICY-,INTEREST%2DBASED%20ADS,-%C2%A9%201986%2D2023%20DISNEY" }
        ],

        p: {
            id: uuidv4(),
            text: "© 1986-2023 DISNEY / PIXAR"
        },

        button: {
            id: uuidv4(),
            text: "Do No Sell or Share My Personal Infromation",
            href: "https://www.pixar.com/#:~:text=Share%20My%20Personal-,Information"
        }

    }
}