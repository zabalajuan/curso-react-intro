import './CreateTodoButton.css';

// function CreateTodoButton (){
function CreateTodoButton ({setOpenModal}){
    return(
        <button
            className='CreateTodoButton'
            onClick={
                // (event)=> {
                //     console.log('Le diste Click al button')
                //     console.log(event)
                //     console.log(event.target)
                // }
                () => {
                    //tenemos una funcion que recibe un aprametro, state en este caso
                    //La función devuelve la negación del mismo estado

                        setOpenModal(state => !state);
                }
            }
        >+</button>
    );
};
export {CreateTodoButton};