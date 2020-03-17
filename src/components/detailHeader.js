import React from "react";

const detailHeader = props => (
  <h2
    onClick={() => {
      props.goBack();
    }}
  >
    Componente Detalle
  </h2>
);

export default detailHeader;
