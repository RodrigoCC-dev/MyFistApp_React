import React, {Component} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component{
    mostrarImagenes = () => {
      const respImagenes = this.props.respuesta;
      if(respImagenes.length === 0) return null;
      // console.log(respImagenes)

      return(
        <React.Fragment>
          <div className="col-12 p-5 row">
              {respImagenes.map(imagen =>(
                  <Imagen
                      key={imagen.id}
                      foto={imagen}
                  />
              ))}
          </div>
          <div>
              <Paginacion
                  pagAnterior={this.props.anterior}
                  pagSiguiente={this.props.siguiente}
              />
          </div>
        </React.Fragment>
      )
    }

    render() {
        return(
          <React.Fragment>
              {this.mostrarImagenes()}
          </React.Fragment>
        );
    }

}

export default Resultado;
