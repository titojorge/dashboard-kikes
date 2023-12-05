import React, { Component } from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

class ContentRowCenter extends Component{
    constructor(){
        super()
        this.state = {
            listCategories: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/api/categories')
            .then( respuesta =>  { return respuesta.json() })
            .then( data => { 
                console.log(data.categoriesData);
                this.setState({
                    listCategories : data.categoriesData
                })
            })
            .catch( error => console.log(error))
    }

    render(){
        return (
            <div className="row">
                {/*<!-- Last Product in DB -->*/}
                <LastProductInDb />
                {/*<!-- End content row last movie in Data Base -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">
                            Categoria de Productos
                            </h5>
                        </div>
                        { this.state.listCategories.map((categorie, i) => {
                            return <CategoriesInDb {...categorie} key={i}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentRowCenter;