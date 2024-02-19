import "./Animales.css";
import { useState } from "react";

const Lightbox = ({ toggleLightbox, animal }) => {

  const acordeonDatos = [
    {id: 1, title: "Rasgos físicos", property: "rasgos"},
    {id: 2, title: "Información dueño", property: "dueño"},
    {id:3, title: "Información extra", property: "info"}
  ]

    return (
      <div className="Lightbox">
        <div>
          <h2 className="Lightbox-h2">
            <button className="Lightbox-btn-arrow-back" onClick={toggleLightbox}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            {animal.name}
          </h2>
          <Slider item={animal} />
          <Acordeon item={animal} datos={acordeonDatos}/>
        </div>
        <div className="Lightbox-div-btn-loencontre">
          <button className="Lightbox-btn-loencontre">LO ENCONTRÉ</button>
        </div>
      </div>
    );
};

export default Lightbox

const Slider = ({ item }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleNextSlide = () => {
      const nextSlide = item.src.length > currentSlide + 1 ? currentSlide + 1 : 0;
      setCurrentSlide(nextSlide);
    };
  
    const handlePreviousSlide = () => {
      const nextSlide = currentSlide ? currentSlide - 1 : item.src.length - 1;
      setCurrentSlide(nextSlide);
    };
    return (
      <div className="Slider-div">
        <img
          className="Slider-img"
          src={item.src[currentSlide]}
          alt={item.src[currentSlide]}
        />
        {item[currentSlide]}
        <div className="Slider-div-btns">
          <button className="Slider-btn" onClick={handlePreviousSlide}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="Slider-btn" onClick={handleNextSlide}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    );
};

const Acordeon = ({ datos, item, animal }) => {

    const [activeItem, setActiveItem] = useState(0)

    const toggleAccordion = (datoId) => {
      setActiveItem(datoId)
    }
    // const [rasgos, setRasgos] = useState(false);
    // const [infoDueño, setInfoDueño] = useState(false);
    // const [infoExtra, setInfoExtra] = useState(false);
  
    // const toggleAcordeon1 = () => {
    //   setRasgos(!rasgos);
    // };
    // const toggleAcordeon2 = () => {
    //   setInfoDueño(!infoDueño);
    // };
    // const toggleAcordeon3 = () => {
    //   setInfoExtra(!infoExtra);
    // };
  
    return (

      <section className="Accordion">
        {datos.map((dato) => (
          <div key={dato.id} className="Accordion-div">
            <button onClick={() => toggleAccordion(dato.id)} className="Accordion-btn">
              {dato.title}
            </button>
            {activeItem === dato.id && (
              <div>
                {dato.id === 1 && (
                  <div>
                    <ul>
                      {item.rasgos.map((rasgo, index) => (
                        <li key={index}>{rasgo}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {dato.id === 2 && (
                  <div>
                    <ul>
                      {item.dueño.map((dueño, index) => (
                        <li key={index}>{Object.values(dueño)}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {dato.id === 3 && (
                  <div>
                    <p>{item.info}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
  ) 

      
      // <div className="Acordeon">
      //   <div key={item.id} className="Acordeon-div">
      //     <button
      //       onClick={() => toggleAcordeon1(item.id)}
      //       className="Acordeon-btn"
      //     >
      //       Rasgos Físicos
      //     </button>
      //     {rasgos && (
      //       <div className="Acordeon-btn-div">
      //         <ul className="Acordeon-ul">
      //           <li className="Acordeon-li">{item.rasgos[0]}</li>
      //           <li className="Acordeon-li">{item.rasgos[1]}</li>
      //           <li className="Acordeon-li">{item.rasgos[2]}</li>
      //           <li className="Acordeon-li">{item.rasgos[3]}</li>
      //           <li className="Acordeon-li">{item.rasgos[4]}</li>
      //           <li className="Acordeon-li">{item.rasgos[5]}</li>
      //         </ul>
      //       </div>
      //     )}
      //   </div>
  
      //   <div key={item.id} className="Acordeon-div">
      //     <button
      //       onClick={() => toggleAcordeon2(item.id)}
      //       className="Acordeon-btn"
      //     >
      //       Información Dueño
      //     </button>
      //     {infoDueño && (
      //       <div className="Acordeon-btn-div">
      //         <ul className="Acordeon-ul">
      //           <li className="Acordeon-li">
      //             <span>Nombre:</span> {item.dueño[0].nombre}
      //           </li>
      //           <li className="Acordeon-li">
      //             <span>Teléfono:</span> {item.dueño[1].telefono}
      //           </li>
      //           <li className="Acordeon-li">
      //             <span>Correo:</span> {item.dueño[2].correo}
      //           </li>
      //         </ul>
      //       </div>
      //     )}
      //   </div>
  
      //   <div key={item.id} className="Acordeon-div">
      //     <button
      //       onClick={() => toggleAcordeon3(item.id)}
      //       className="Acordeon-btn"
      //     >
      //       Información Extra
      //     </button>
      //     {infoExtra && (
      //       <div className="Acordeon-btn-div">
      //         <p>{item.info}</p>
      //       </div>
      //     )}
      //   </div>
      // </div>
    
  };
