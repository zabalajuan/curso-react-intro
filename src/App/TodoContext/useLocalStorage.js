import React from "react";

//la palabra use al inicio de la funcion es una convencion para que react la entienda como hook
function useLocalStorage (itemName, initialValue){
    //para conectar el hook lo que hacemos es crear un nuevo estado
    //lo crearemos de forma tal que se pueda manejar cualquier tipo de contenido en el local storage
    // el item puede ser cualquier información, como el array de toDos

    const [item, setItem] = React.useState(initialValue);
    //creamos un nuevo estado para el estado de carga
    const [loading, setLoading] = React.useState(true);
    //creamos un nuevo estado para el estado de error
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);


                let parsedItem;
                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }else{
                    parsedItem = JSON.parse(localStorageItem);
                    //si si habia algo distinto al estado inicial del localStorage
                    setItem(parsedItem)
                }
                setLoading(false);
            } catch(error){
                setLoading(false);
                setError(true);
            }
        },2000)
    },[itemName, initialValue]);


    const saveItemLocal = (newItem) => {
        localStorage.setItem (itemName, JSON.stringify(newItem) )
      //para guardar la nueva información stringifiada cada vez que se llame el metodo en el local storage
      setItem(newItem); //estamos llamando el actualizador del estado
    }
    //los customs hooks siempre deben retornar un objeto, o un array o algo
    // return [item, saveItemLocal]; //de esta forma estamos importando los todos y el estado d elos todos o de cualquier información
    //desde el componente vamos a poder llamar el hook
    //cuando tenemos más de dos objetos a retornar, es mejor usar un objeto y no un array
    return {
        item,
        saveItemLocal,
        loading,
        error
    };

}

export {useLocalStorage}