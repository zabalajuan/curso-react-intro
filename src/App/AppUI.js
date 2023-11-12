import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from './TodoContext';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm'
import React from 'react';

// function AppUI({
//     //Para trabajar el React Context - no vamos a mandar los props a traves de la interfaz grafica
//     // loading,
//     // error,
//     // completedTodos,
//     // totalTodos,
//     // searchValue,
//     // setSearchValue,
//     // searchedTodos,
//     // functionCompleteTodo,
//     // deleteTodo
// }){
//como ya no estamos recibiendo props, gracias al createContext, seria:
function AppUI(){
    const {
        loading,
        error,
        searchedTodos,
        functionCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (

    // <div className="App">
    // <React.Fragment>
    // no es necesario usar el react.fragment
    <>
        <TodoCounter
            //Para trabajar el React Context - no vamos a mandar los props a traves de la interfaz grafica
            // completed={completedTodos}
            // {/* // total={totalTodos} estamos insertando un componente para que sea renderizado */}
        />
        <TodoSearch
            //Para trabajar el React Context - no vamos a mandar los props a traves de la interfaz grafica
            // searchValuePropiedad = {searchValue}
            // setSearchValuePropiedad = {setSearchValue}

        />
        {/* Al tener el componente TodoList dentro del context, le permitimos acceder a los props */}

            {/* para que el React context consumer funcione, le debemos pasar el componente como una funcion */}

            <TodoList>
            {/* Incluimos un nuevo elemento para indicar si estamos cargando */}
            {/* {loading && <p>Estamos Cargando...</p>} */}
            {loading && (
                <>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </>
                )}
            {/* {error && <p>Hubo un error</p>} */}
            {error && <TodosError/>}

            {/* {(!loading && searchedTodos.length === 0) && <p>Crea Tu Primer ToDo</p>} */}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

            {/*<TodoItem /> //estamos insertando un componente para que sea renderizado */}
            {/* <TodoItem />
            <TodoItem /> */}
            {searchedTodos.map(todo => (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed ={todo.completed}
                onComplete={() => functionCompleteTodo(todo.text)} //se necesita poner la funcion com parametros dentro de otra sin parametros para que react pueda usarla
                onDelete = {() => deleteTodo(todo.text)}
                />
            ))}

            </TodoList>



        <CreateTodoButton
            setOpenModal={setOpenModal}
        />

        {/* vamos a utilizar un estado que nos indicara si el modal esta abierto o cerrado */}
        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}

        </>
    // </React.Fragment>
    // </div>

    );

}


export {AppUI}