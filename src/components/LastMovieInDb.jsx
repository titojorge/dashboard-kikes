import React, {Component} from 'react';
import imagenFondo from '../../public/assets/images/kike-logo.png';

class LastMovieInDb extends Component{
    constructor(props){
        super(props)
        this.state = {
            lastProduct : {}
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/products')
            .then( respuesta =>  {
                return respuesta.json()
            })
            .then( data => { 
                this.setState({
                    lastProduct : data.products[data.total - 1]
                })
            })
            .catch( error => console.log(error))
    }
    render (){
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto Creado</h5>
                    </div>
                    <div className="card-body">
                        <h3>{this.state.lastProduct.nombre}</h3>
                        {/* <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.lastProduct.image} alt="ImagenProducto"/>
                        </div> */}
                        <p>{this.state.lastProduct.description}</p>
                        <p>Precio: {this.state.lastProduct.price}</p>
                        <p>Categoria Producto: {this.state.lastProduct.categories}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LastMovieInDb;
