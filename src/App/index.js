
import React from 'react';
import { TodoProvider } from './TodoContext';
import { AppUI } from './AppUI';
// import { useLocalStorage } from './useLocalStorage';


// Renderizar arrays
// const defaultTodos = [
//   {text: 'elemento del componente por array 2', completed: true},
//   {text: 'Una tarea por completar', completed: true},
//   {text: 'hacer compras', completed: false},
//   {text: 'renderizando un array', completed: false},
//   {text: 'Comprando ceBollas', completed: false}
// ];
// const stringifiedTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1',stringifiedTodos);
// localStorage.removeItem ('TODOS_V1')
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));




function App() {


  // // const [todos, setTodos] = React.useState(parsedTodos); // Lo rremplazamos por el hook
  // // const [todos, saveTodosLocal] = useLocalStorage('TODOS_V1',[])
  // const {
  //     //con los dos puntos le asignamos un nuevo nombre a la propiedad
  //     item: todos,
  //     saveItemLocal: saveTodosLocal,
  //     loading,
  //     error,
  //   } = useLocalStorage('TODOS_V1',[])
  // // const [todos, setTodos] = React.useState(defaultTodos);
  // const [searchValue, setSearchValue] = React.useState('');

  // const completedTodos = todos.filter(todo => !!todo.completed).length;
  // const totalTodos=todos.length;

  // // console.log('Log 1');
  // // React.useEffect(() => {
  // //   console.log('Log 2');

  // // });
  // //esta vez solo se ejecuta la primera vez, al actualizar un estado no se ejecuta
  // // React.useEffect(() => {
  // //   console.log('Log 2');

  // // }, []);

  //  //esta vez solo se ejecuta la primera vez, al actualizar un estado no se ejecuta
  //  // si se actualita el totalTodos si se actualizaría
  // // React.useEffect(() => {
  // //   console.log('Looooog 2');

  // // }, [totalTodos]);

  // console.log('Log 3');

  // const searchedTodos = todos.filter(
  //   (todo)=>{
  //     const todoText = todo.text.toLowerCase();
  //     const searchedText = searchValue.toLowerCase();
  //     return todoText.includes(searchedText);
  //   }
  // );


  // const functionCompleteTodo = (text) => {
  //   const newTodos = [...todos];//se crea una copia del arreglo
  //   const todoIndex = newTodos.findIndex(
  //     (todo) => todo.text === text
  //   );
  //   newTodos[todoIndex].completed = true;
  //   saveTodosLocal(newTodos);
  // };

  // const deleteTodo = (text) => {
  //   const newTodos = [...todos];//se crea una copia del arreglo
  //   const todoIndex = newTodos.findIndex(
  //     (todo) => todo.text === text
  //   );
  //   newTodos.splice(todoIndex,1)
  //   saveTodosLocal(newTodos);
  // };

    //necesitamos importar todos los componentes de la interfaz
    return(
      // <AppUI
      //   //Para trabajar el React Context - no vamos a mandar los props a traves de la interfaz grafica
      //   // loading={loading}
      //   // error={error}
      //   // completedTodos={completedTodos}
      //   // totalTodos={totalTodos}
      //   // searchValue={searchValue}
      //   // setSearchValue={setSearchValue}
      //   // searchedTodos={searchedTodos}
      //   // functionCompleteTodo={functionCompleteTodo}
      //   // deleteTodo={deleteTodo}
      // />
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
    )

}


export default App;
