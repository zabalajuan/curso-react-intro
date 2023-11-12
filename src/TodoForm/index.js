import React from "react";
import './TodoForm.css';
import { TodoContext } from "../App/TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);
    //vamos a crear un estado local en este caso
    //lo creamos como local porque la aplicación no requiere en todo momento saber que se escribio en el formulario
    //solo se necesita saber en el momento en que se da click en añadir
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false); //cerrar el formulario cuando se de click en los botones
    }

    const onCancel = () => {
        setOpenModal(false); //cerrar el formulario cuando se de click en los botones
    }

    const onChange = (event) => {
        //guardamos el texto que haya escrito el usuario
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                value = {newTodoValue}
                onChange={onChange}
            >

            </textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>

            </div>
        </form>
    )
}

export {TodoForm}