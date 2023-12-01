import React, {Component} from "react";
import CardCategories from "./CardCategories";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      listCategories: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/categories")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({
          listCategories: data.categoriesData,
        });
      })
      .catch((error) => console.log(error));
  }
  render(){
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categoria de Productos
            </h5>
          </div>
          {this.state.listCategories.map((categorie, i) => {
              <CardCategories {...categorie} key={i} />
            })}
        </div>
      </div>
    );
  }
}

export default GenresInDb;
