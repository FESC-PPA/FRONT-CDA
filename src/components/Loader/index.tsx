import "./styles.scss";

const Loader = () => (
  <div className="loader-container">
    <div className="lds-ripple">
      <div></div>
      Cargando...
      <div></div>
    </div>
  </div>
);

export default Loader;
