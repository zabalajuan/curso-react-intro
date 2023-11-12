import React from "react";
import ReactDOM  from "react-dom"; //es necesario para el portal
import './Modal.css'

function Modal({children}){
    return ReactDOM.createPortal (
        //primero le decimos que es lo que queremos teletransportar
        <div className="ModalBackground">
            {children}
        </div>,
        //despues le indicamos a donde lo queremos teletransportar
        document.getElementById('modal')

    );

}

export {Modal};