import React, {Component} from "react";

function GenresInDb(props) {
    return (
      <div className="card-body" >
        <div className="row" >
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{props.nombre}</div>
              </div>
            </div>
        </div>
      </div>
    );
}

export default GenresInDb;
