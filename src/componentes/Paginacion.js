import React from 'react';

const Paginacion = props => {
    return(
        <div className="py-3">
            <button onClick={props.pagAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button onClick={props.pagSiguiente} type="button" className="btn btn-info">Siguiente &rarr;</button>
        </div>
    )

}

export default Paginacion;
