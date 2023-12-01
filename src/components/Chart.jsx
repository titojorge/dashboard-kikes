import React, {Component} from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [    
]


class Chart extends Component {

    constructor(){
        super()
        this.state = {
            tableRowsData : [] 
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/products')
            .then( respuesta =>  {
                return respuesta.json()
            })
            .then( data => { 
                this.setState({
                    tableRowsData : data.products
                })
                console.log(this.state.tableRowsData);

            })
            .catch( error => console.log(error))
    }

    render (){
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Precio</th>
                                    <th>Categoria</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Precio</th>
                                    <th>Categoria</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                this.state.tableRowsData.map( ( row , i) => {
                                    return <ChartRow { ...row} key={i}/>
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chart;