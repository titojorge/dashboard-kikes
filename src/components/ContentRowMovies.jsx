import React, { Component } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */
/* <!-- Products in DB --> */
let totalProducts = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: 0,
    icon: 'fa-clipboard-list'
}
/* <!-- Total users --> */
let totalUsers = {
    title:'Total de usuarios' ,
    color:'success', 
    cuantity: 0,
    icon:'fa-award'
}
/* <!-- Total Categorias de Productos --> */
let totalCategorias = {
    title:'Total de Categorias de Productos' ,
    color:'warning',
    cuantity: 0,
    icon:'fa-user-check'
}

let cartProps = [totalProducts, totalUsers, totalCategorias];

class ContentRowMovies extends Component{
    constructor(props){
        super(props)
        this.state = {
            cartProps: [totalProducts, totalUsers, totalCategorias]
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/products')
            .then( respuesta =>  {
                return respuesta.json()
            })
            .then( data => { 
                cartProps[0].cuantity = data.total ;
                this.setState({
                    cartProps : cartProps
                })
            })
            .catch( error => console.log(error))
        fetch('http://localhost:3000/api/users')
            .then( respuesta =>  { return respuesta.json() })
            .then( data => { 
                cartProps[1].cuantity = data.total ;
                this.setState({
                    cartProps : cartProps
                })
            })
            .catch( error => console.log(error))
        fetch('http://localhost:3000/api/categories')
            .then( respuesta =>  { return respuesta.json() })
            .then( data => { 
                cartProps[2].cuantity = data.total ;
                this.setState({
                    cartProps : cartProps
                })
            })
            .catch( error => console.log(error))
    }

    render (){
        return (
            <div className="row">
                {this.state.cartProps.map( (total, i) => {
                    return <SmallCard {...total} key={i}/>
                })}
            </div>
        )
    }
}

export default ContentRowMovies;