import React from "react";
import data from "./components/data.json";
import Botones from "./components/botones";
import Recordatorio from "./components/recordatorio";

let i = 1;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      arrayData: [],
      historia: data[0].historia,
      opcionA: data[0].opciones.a,
      opcionB: data[0].opciones.b,
      opcionAnterior: "",
      opcionesSeleccionadas: []
    };
  }

  componentDidMount() {
    this.setState({ arrayData: data });
  }

  handleChange = (opcion) => {
    i++;
    let caminoElegido = this.state.arrayData.filter(
      (data) => data.id === i + opcion
    )[0];
    if (i === 6) {
      alert("FIN!");
    } else {
      this.setState((prevState) => ({
        historia: caminoElegido.historia,
        opcionA: caminoElegido.opciones.a,
        opcionB: caminoElegido.opciones.b,
        opcionAnterior: opcion.toUpperCase(),
        opcionesSeleccionadas: [
          ...prevState.opcionesSeleccionadas,
          opcion.toUpperCase()
        ]
      }));
    }
  };

  handleRestart = () => {
    this.setState = {
      arrayData: [],
      historia: data[0].historia,
      opcionA: data[0].opciones.a,
      opcionB: data[0].opciones.b,
      opcionAnterior: "",
      opcionesSeleccionadas: []
    };
  };

  render() {
    return (
      <div className="App">
        <div className="layout">
          <h1 className="historia">{this.state.historia}</h1>
          <Botones
            recibirSeleccion={this.handleChange}
            opcionA={this.state.opcionA}
            opcionB={this.state.opcionB}
          />
          <Recordatorio
            opcionAnterior={this.state.opcionAnterior}
            opcionesSeleccionadas={this.state.opcionesSeleccionadas}
          />
          <br />
          <form type="submit" onClick={this.handleRestart}>
            <button className="botones"> Reiniciar historia </button>
          </form>
        </div>
      </div>
    );
  }
}
