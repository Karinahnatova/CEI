import { useEffect, useState } from "react";
import "./Animales.css";
import ButtonFilter from "./ButtonFilter";
import Header from "./Header";
import Lightbox from "./Lightbox";

const Animales = () => {
  const [filtro, setFiltro] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxAnimal, setLightboxAnimal] = useState();

  const theAnimals = [
    {
      id: 1,
      src: [
        "https://dinastiacachorros.com.co/wp-content/uploads/2022/09/Img-Dinastia-del-Cachorro-Home-Razas-GoldenRetriever.jpg",
        "https://www.semana.com/resizer/vBv5elyC3YTP3yOLndBxS-fH4dU=/1920x1080/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/INJTUCZGY5ARXAFKOOTNCI2HIY.jpg",
      ],
      name: "Bobby",
      specie: "Perro",
      gender: "Macho",
      years: 0.5,
      rasgos: [
        "Amarillo",
        "Ojos marrones",
        "Pequeño",
        "Mancha gris en la espalda",
        "Cola corta",
        "Patitas pequeñas",
      ],
      dueño: [
        { nombre: "Luis" },
        { telefono: "683947583" },
        { correo: "luis@gmail.com" },
      ],
      lost: true,
      info: "Es un perrito muy jugueton, se perdió por la zona del parque turia. Responde a nomnbre de Bobby pero también responde a Bubu.",
    },
    {
      id: 2,
      src: [
        "https://images.hola.com/imagenes/mascotas/20210127183078/sintomas-gato-se-hace-mayor/0-912-527/gato-mayor-m.jpg?tx=w_680",
        "https://www.purina.es/sites/default/files/2021-12/Welcoming_teaser.jpg",
      ],
      name: "Boris",
      specie: "Gato",
      gender: "Macho",
      years: 1,
      rasgos: [
        "Marrón con blanco",
        "Ojos verdes",
        "Grande",
        "Bigotes blancos",
        "Rayas grises en la espalda",
        "Orejas grandes",
      ],
      dueño: [
        { nombre: "Lucia" },
        { telefono: "683622043" },
        { correo: "lucia@gmail.com" },
      ],
      lost: false,
      info: "Es un gato muy tranquilo, se escapó por la ventana de un primer piso, en la zona del Botanic. Si se siente hambriento siemrpe maulla, por lo que si está cerca se le puede escuchar maullando.",
    },
    {
      id: 3,
      src: [
        "https://macawrecoverynetwork.org/wp-content/uploads/2023/05/photos_birds_ynap_wild_2021_Jamie-Gilardi_4.jpg",
        "https://media.istockphoto.com/id/1316239927/es/foto/loro-de-harina.jpg?s=612x612&w=0&k=20&c=5oUJmzHZkeCGioFa-YiFtAqVllJVNq3fM1SRbK1C3vY=",
      ],
      name: "Willy",
      specie: "Loro",
      gender: "Macho",
      years: 10,
      rasgos: [
        "Verde",
        "Ojos naranjas",
        "Plumas amarillas en la cabeza",
        "Pequeño",
        "Plumas rojas debajo de las alas",
        "Pico gris",
      ],
      dueño: [
        { nombre: "Sandra" },
        { telefono: "600339278" },
        { correo: "Sandra@gmail.com" },
      ],
      lost: true,
      info: "Es un lorito pequeño que se ha escapado de la jaula del balcón por la zona del Turia. Habla mucho y siempre hace ruidos.",
    },
    {
      id: 4,
      src: [
        "https://i.pinimg.com/736x/aa/1e/8a/aa1e8aa8231da371b468c5284ec6e784.jpg",
        "https://pm1.aminoapps.com/6663/6c3acd8b94b1f941270c59c524a677c2d020b2f2_hq.jpg",
        "https://i.pinimg.com/originals/82/dc/62/82dc6228bba5a660a1e7bbbee06daa0d.jpg",
      ],
      name: "Wilson",
      specie: "Gato",
      gender: "Macho",
      years: 13,
      rasgos: [
        "Naranja",
        "Ojos amarillos",
        "Rayas naranjas en la espalda y cabeza",
        "Gordito",
        "Grande",
        "Cola larga",
      ],
      dueño: [
        { nombre: "Rubén" },
        { telefono: "699886738" },
        { correo: "Rubén@gmail.com" },
      ],
      lost: false,
      info: "Es un gato muy tranqulo y cariñoso. Le gusta que le rasquen la barriga, por lo que siemrpe se acerca a las personas. Se perdió por la calle cuando salió de la valla de la casa, por la zona de Paterna.",
    },
    {
      id: 5,
      src: [
        "https://images.hola.com/imagenes/mascotas/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg?tx=w_680",
        "https://efuneraria.com/wp-content/uploads/2022/02/como-enterrar-a-mi-mascota-o-perro-768x384.jpg",
      ],
      name: "Bolita",
      specie: "Perro",
      gender: "Hembra",
      years: 4,
      rasgos: [
        "Marrón con manchas blancas",
        "Ojos grandes y marrones",
        "Mediano",
        "Patas cortas",
        "Orejas grandes",
        "Naríz grande y negra",
      ],
      dueño: [
        { nombre: "Maria" },
        { telefono: "600337261" },
        { correo: "Maria@gmail.com" },
      ],
      lost: true,
      info: "Es un perro muy juguetón, no le tiene miedo a las personas y siempre se acerca a jugar. Responde a nombre de Bolita. Se perdió por la zona de  Valencia Centro",
    },
    {
      id: 6,
      src: [
        "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/9/11/asset/buzzfeed-prod-web-03/sub-buzz-3468-1533829546-1.jpg?resize=625:469",
        "https://www.terra.com.mx/u/fotografias/m/2023/8/3/f850x638-85684_163173_5050.jpg",
      ],
      name: "Nia",
      specie: "Gato",
      gender: "Hembra",
      years: 6,
      rasgos: [
        "Negro",
        "Ojos amarillos con verde",
        "Mediana",
        "Pelaje gris en el cuello",
        "Cola larga",
        "Orja izquierda mordida",
      ],
      dueño: [
        { nombre: "Alina" },
        { telefono: "677443990" },
        { correo: "Alina@gmail.com" },
      ],
      lost: false,
      info: "Es una gata a la que no le gustan las personas desconocidas. Si ve a alguien acercarse, se escapa. Se perdió por la zona de Patraix.",
    },
    {
      id: 7,
      src: [
        "https://www.tiendanimal.es/articulos/wp-content/uploads/2020/11/mitos-sobre-perros-1200x800.jpg",
        "https://s1.eestatic.com/2020/08/11/curiosidades/mascotas/mascotas-perros-mascotas_512209327_157471851_1706x960.jpg",
      ],
      name: "Mimi",
      specie: "Perro",
      gender: "Hembra",
      years: 1,
      rasgos: [
        "Amarillo con blanco",
        "Ojos marrones",
        "Pequeño",
        "Naríz marrón",
        "Orejas grandes",
        "Cola corta",
      ],
      dueño: [
        { nombre: "Paco" },
        { telefono: "699441111" },
        { correo: "Paco@gmail.com" },
      ],
      lost: true,
      info: "Es una perrita pequeña y muy juguetona. Se perdió por la zona de la Avenida del Cid. Responde a nombre de Mimi.",
    },
    {
      id: 8,
      src: [
        "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/y-si-tu-perro-pudiera-vivir-cien-anos/9656705-1-esl-MX/Y-si-tu-perro-pudiera-vivir-cien-anos.jpg",
        "https://media.istockphoto.com/id/485673645/es/foto/border-collie-cachorro-con-paws-en-blanco-r%C3%BAstico-valla-iii.jpg?s=612x612&w=0&k=20&c=FpAFityo4TaNK35Wc67qrNTNhr5wCqOYftPEm-tfU2g=",
      ],
      name: "Luna",
      specie: "Perro",
      gender: "Hembra",
      years: 1,
      rasgos: [
        "Negro con manchas blancas",
        "Ojos azules",
        "Naríz rosa con negro",
        "Patitas cortas",
        "Orejas pequeñas",
        "Colita corta",
      ],
      dueño: [
        { nombre: "Patricia" },
        { telefono: "691133276" },
        { correo: "Patricia@gmail.com" },
      ],
      lost: false,
      info: "Es una perrita que se asusta mucho si ve a alguien desconocido, pero coge confianza rapido. Se perdió por el parque Central.",
    },
    {
      id: 9,
      src: [
        "https://tierrarapaz.com/wp-content/uploads/2021/11/Yaco-blog.jpg",
        "https://www.diariodevalderrueda.es/images/showid/4921074",
      ],
      name: "Kesha",
      specie: "Loro",
      gender: "Macho",
      years: 26,
      rasgos: [
        "Gris",
        "Ojos amarillos",
        "Pico grande negro",
        "Mediano",
        "Alas gris oscuro",
        "Cola roja",
      ],
      dueño: [
        { nombre: "Oleh" },
        { telefono: "677459382" },
        { correo: "Oleh@gmail.com" },
      ],
      lost: true,
      info: "Sabe hablar mucho y siempre dice frases o ruidos graciosos cuando se aburre o está solo. Salió volando por la ventana por la zona Extramurs.",
    },
    {
      id: 10,
      src: [
        "https://t2.ea.ltmcdn.com/es/posts/6/8/9/como_hacer_galletas_para_gatos_22986_600_square.jpg",
        "https://media.istockphoto.com/id/607259804/es/foto/gato-dom%C3%A9stico-quiere-una-galleta.jpg?s=612x612&w=0&k=20&c=BjyWHeWDGWcH-oKfAVxj7z9Y792SaJSenLMjVjp9N24=",
      ],
      name: "Cookie",
      specie: "Gato",
      gender: "Macho",
      years: 5,
      rasgos: [
        "Blanco con manchas grises",
        "Ojos verdes",
        "Colita corta",
        "Nariz rosa con manchita negra",
        "Rayas grises en la espalda",
        "Bigotes blancos y largos",
      ],
      dueño: [
        { nombre: "Laura" },
        { telefono: "688372660" },
        { correo: "Laura@gmail.com" },
      ],
      lost: false,
      info: "Es una gatita muy mona y tranquila. Le gustan mucho las galletas y dulces para gatos. Se perdió por la zona de Burjassot.",
    },
  ];

  const animalesFiltrados = filtro
    ? theAnimals.filter((animal) => animal.lost === (filtro === "perdidos"))
    : theAnimals;

  const toggleLightbox = (animal) => {
    setLightboxAnimal(animal);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("Filtro actual:", filtro);
  }, [filtro]);

  const getAnimalCards = () => {
    return (
      <div className="Animal-box">
        {animalesFiltrados.map((item) => {
          return (
            <Animal
              key={item.id}
              {...item}
              toggleLightbox={() => toggleLightbox(item)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Header/>
      {isOpen ? (
        <Lightbox
          isOpen={isOpen}
          toggleLightbox={toggleLightbox}
          animal={lightboxAnimal}
        />
      ) : (
        getAnimalCards()
      )}
      <ButtonFilter setFiltro={setFiltro} />
    </>
  );
};
export default Animales;

const Animal = (props) => {
  const {
    src,
    name,
    specie,
    gender,
    years,
    rasgos,
    lost,
    dueño,
    toggleLightbox,
  } = props;

  return (
    <div className="Animal-div" onClick={toggleLightbox}>
      <div className="Animal-div-img-btn">
        <img className="Animal-img" src={src[0]} alt="" />
        <button className={`Animal-button ${lost ? "perdido" : "encontrado"}`}>
          {lost ? "perdido" : "encontrado"}
        </button>
      </div>
      <div className="Animal-div-h2-ul">
        <h2 className="Animal-h2">{name}</h2>
        <ul className="Animal-ul">
          <li className="Animal-li">
            <span>Animal: </span>
            {specie}
          </li>
          <li className="Animal-li">
            <span>Género: </span>
            {gender}
          </li>
          <li className="Animal-li">
            <span>Edad: </span>
            {years} años
          </li>
          <li className="Animal-li">
            <span>Color: </span>
            {rasgos[0]}
          </li>
        </ul>
      </div>
    </div>
  );
};
