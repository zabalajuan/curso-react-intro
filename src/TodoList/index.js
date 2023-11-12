import './TodoList.css'

// function TodoList(props){
function TodoList({children}){
    return(
      <ul className="TodoList">
        {/* comunicación entre componentes por medio de props */}
        {/* {props.children} */}
        {children}
      </ul>

    );
}

export {TodoList as TodoList};