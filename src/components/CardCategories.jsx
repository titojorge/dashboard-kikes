import React from "react";
import PropTypes from 'prop-types';

function CardCategories (props) {

    return (
        <div className="card-body" >
            <div className="row" >
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{props.Nombre}</div>
                  </div>
                </div>
            </div>
        </div>
        )

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

    CardCategories.defaultProps = {
        Nombre: 'No Title',
    }

}

export default CardCategories;
