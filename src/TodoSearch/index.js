import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../App/TodoContext';
// function TodoSearch({
//   searchValuePropiedad,
//   setSearchValuePropiedad,
// }){
function TodoSearch(){
  //usa remos el useContext para pasarle al componente la info necesaria
  const {
    searchValuePropiedad,
    setSearchValue,

  } = React.useContext(TodoContext)

  return(
    <input
      placeholder="Comprar huevos"
      className="TodoSearch"
      value={searchValuePropiedad}
      onChange={(event)=> {
        console.log('escribiste en el TodoSearch');
        setSearchValue(event.target.value);
      }}

    />

  );
}

export {TodoSearch};