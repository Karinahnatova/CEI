import "./Animales.css";

const ButtonFilter = ({ setFiltro }) => {
  return (
    <div className="ButtonFilter-div">
      <button
        onClick={() => setFiltro(null)}
        className="ButtonFilter-btn-todos"
      >
        TODOS
      </button>
      <button
        onClick={() => setFiltro("perdidos")}
        className="ButtonFilter-btn-perdidos"
      >
        PERDIDOS
      </button>
      <button
        onClick={() => setFiltro("encontrados")}
        className="ButtonFilter-btn-encontrados"
      >
        ENCONTRADOS
      </button>
      <button className="ButtonFilter-btn-add">
        <span class="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default ButtonFilter;
