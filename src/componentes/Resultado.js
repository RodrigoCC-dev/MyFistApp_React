import React, {Component} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component{

// Método para mostrar las imágenes.
// Recibe el arreglo de las imagenes transferidas por el props de Resultado, con
// el tag "respuesta".
    mostrarImagenes = () => {
      const respImagenes = this.props.respuesta;
      if(respImagenes.length === 0) return null;
      // console.log(respImagenes)

      // Retorno del método.
      return(
        <React.Fragment>
          <div className="col-12 p-5 row">
              {respImagenes.map(imagen =>(
                  // Uso del componente Imagen.
                  <Imagen
                      key={imagen.id}
                      foto={imagen}
                  />
              ))}
          </div>
          <div>
              {/* Uso del componente Paginación. */}
              <Paginacion
                  pagAnterior={this.props.anterior}
                  pagSiguiente={this.props.siguiente}
              />
          </div>
        </React.Fragment>
      )
    }

// Renderizado del componente.
    render() {
        return(
          <React.Fragment>
              {/* Aplicación del método mostrarImagenes. */}
              {this.mostrarImagenes()}
          </React.Fragment>
        );
    }

}

export default Resultado;
