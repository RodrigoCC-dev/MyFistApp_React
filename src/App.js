import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

// declaración del state
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

// Método que permite consultar la API de pixabay con los parámetros del state
  consultarApi = () => {
    const busqueda = this.state.termino;
    const hoja = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13119123-71c035b33f77efe6f842330ec&q=${busqueda}&per_page=30&page=${hoja}`;

    console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }

// Método que permite traspasar el valor de la búsqueda al state y realizar la
// consulta a la API
  datosBusqueda = (string) => {
    this.setState({
      termino: string,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

// Método que permite cambiar a la página anterior
  paginaAnterior = () => {
    //console.log('anterior...');

    let paginaActual = this.state.pagina;

    // leer si la página es 1, ya no ir hacia atrás
    if(paginaActual === 1) return null;

    paginaActual--;
    this.setState({
      pagina: paginaActual,

    }, () => {
      this.consultarApi();
      this.scroll();
    });
    // console.log(paginaActual);
  }

// Método que permite cambiar a la página siguiente.
  paginaSiguiente = () => {
    //console.log('siguiente...');

    // leer el state de la página actual
    let valorPagina = this.state.pagina;

    // Sumar uno a la página actual
    valorPagina++;

    // agregar el cambio al state
    this.setState({
      pagina: valorPagina,
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    // imprimo por consola nueva página
    // console.log(valorPagina);
  }

// Método que permite fijar la ventana al inicio de la búsqueda tras cambiar a
// otra página de consulta.
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'end');
  }

// Método principal para la renderización de la página.
  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
            // Uso del componente Buscador.
            <Buscador
              valorBuscado={this.datosBusqueda}
            />

        </div>
        <div className="row justify-content-center">
            // Uso del componente Resultado.
            <Resultado
              respuesta={this.state.imagenes}
              anterior={this.paginaAnterior}
              siguiente={this.paginaSiguiente}
            />
        </div>
      </div>
    );
  }
}

export default App;
