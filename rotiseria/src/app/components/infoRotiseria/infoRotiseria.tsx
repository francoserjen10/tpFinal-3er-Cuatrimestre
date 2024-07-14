import "./infoRotiseria.css";

export const Info = () => {
  return (
    <>
      
        <h2 className="tituloRotiseria">
          ROTISERIA PROGRAMING, CALIDAD ASEGURADA
        </h2>

        <div className="containerInfo">
          <div className="divInfo">
            <p>
              La "Rotisería Programing" es un lugar donde la pasión por la cocina
              se combina con la innovación tecnológica para ofrecer una
              experiencia gastronómica única. Fundada por los chefs Serjen, Torres
              y Rios, el restaurante se destaca por su compromiso con la calidad,
              utilizando solo los ingredientes más frescos y preparando cada plato
              con atención al detalle. Además, la Rotisería Programing incorpora
              tecnología avanzada para mejorar la experiencia del cliente, desde
              un sistema de pedidos en línea hasta una cocina inteligente. Más que
              un simple lugar para comer, es un espacio donde los clientes pueden
              disfrutar de una experiencia culinaria completa.
            </p>
          </div>
          <div className="divImagen">
            <img
              className="imagen"
              src="../imagenes/imagenInfo/imagenInfo2.jpg"
              alt=""
            />
          </div>
        </div>
    </>
  );
};
