import React from "react";

export default class Recordatorio extends React.Component{

    render(){
        return(
            <div className="recordatorio">
                <h3> Seleccion anterior: {this.props.opcionAnterior}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>
                    {this.props.opcionesSeleccionadas === [] ? <></> : this.props.opcionesSeleccionadas.map((elemento, index) =>
                        <li key={index+elemento}> {elemento} </li>)} 
                </ul>
          </div>
        )
    } 
    
}
