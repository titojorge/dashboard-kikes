import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.nombre}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td>{props.categories}</td>
                </tr>
            )
    }
    
        

export default ChartRow;