import React from "react";
import { useLocalStorage } from './useLocalStorage';
//tenemos un provider y un consumer
const TodoContext = React.createContext();

/* <TodoContext.Provider></TodoContext.Provider> */
//Para no utilizar este, creamos nuestro propio Provider
function TodoProvider ({children}){

    //nos traemos la lógica de la aplicación
    const {
        //con los dos puntos le asignamos un nuevo nombre a la propiedad
        item: todos,
        saveItemLocal: saveTodosLocal,
        loading,
        error,
    } = useLocalStorage('TODOS_V1',[])
    // const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false); //el estado por defecto es que no se muestre

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos=todos.length;

    // console.log('Log 1');
    // React.useEffect(() => {
    //   console.log('Log 2');

    // });
    //esta vez solo se ejecuta la primera vez, al actualizar un estado no se ejecuta
    // React.useEffect(() => {
    //   console.log('Log 2');

    // }, []);

     //esta vez solo se ejecuta la primera vez, al actualizar un estado no se ejecuta
     // si se actualita el totalTodos si se actualizaría
    // React.useEffect(() => {
    //   console.log('Looooog 2');

    // }, [totalTodos]);

    console.log('Log 3');

    const searchedTodos = todos.filter(
        (todo)=>{
            const todoText = todo.text.toLowerCase();
            const searchedText = searchValue.toLowerCase();
            return todoText.includes(searchedText);
        }
    );
        //en esta función recibimos el texto que ingresaron los usuarios
    const addTodo =  (text) => {
        const newTodos = [...todos];//se crea una copia del arreglo
        newTodos.push({
            text,
            completed: false,
        })
            saveTodosLocal(newTodos);

    }

    const functionCompleteTodo = (text) => {
        const newTodos = [...todos];//se crea una copia del arreglo
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodosLocal(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];//se crea una copia del arreglo
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex,1)
        saveTodosLocal(newTodos);
    };



    return (
        //Esta forma nos trae los siguientes beneficios:
        //nombre comodo y personalizado
        //se debe exportar tambien
        //Podemos encapsular la lógica de nuestra aplicacion en la misma funcion
        <TodoContext.Provider value ={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            functionCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            }}>
                {/* Cualquier componente children va a poder acceder a las propiedades que estan aqui arriba */}
                {children}
        </TodoContext.Provider>
    )
}

/* <TodoContext.Consumer></TodoContext.Consumer> */

export {TodoContext, TodoProvider};