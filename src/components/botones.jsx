import React from "react";

export default class Botones extends React.Component{
    
    handleClick = (evento) => {
        this.props.recibirSeleccion(evento.target.id);
    }

    render(){
        return(
            <div className="opciones">
                <div className="opcion">
                    <button id="a" className="botones" onClick={this.handleClick}> A </button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button id="b" className="botones" onClick={this.handleClick}> B </button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
        )
    }
}