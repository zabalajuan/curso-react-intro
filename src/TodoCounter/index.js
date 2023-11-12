
// const estilos = {
//     backgroundColor: 'gray'
// }
import React from 'react';
import'./TodoCounter.css';
import { TodoContext } from '../App/TodoContext';

// function TodoCounter(props){
// function TodoCounter ({total, completed}){
//vamos a usar el React context para recibir las propiedades
function TodoCounter (){
    //usaremos el useContext para pasarle al componente la info necesaria
    const {
            completedTodos:completed,
            totalTodos:total,

    } = React.useContext(TodoContext)
    return(
      //<h1 style={estilos}>
    //   <h1 style={{
    //     fontSize:'24px',
    //     textAlign: 'center',
    //     margin: 0,
    //     padding: '48px'
    //   }}>
        <h1 className='TodoCounter'>
            Has Completado <span>{completed}</span> de <span>{total}</span> ToDos
        </h1>

    );
}

export {TodoCounter};