import React from 'react';
import {Button,Modal} from 'react-bootstrap'
import { FormControl , CloseButton} from 'react-bootstrap';
import {Context} from '../Context'


function MyModal(props){
    const {
        respuesta,
        setRespuesta,
        comentario,
        key,
        setComentario

    } = React.useContext(Context)

    function onChangeValue(event){
        setRespuesta(event.target.value)
    }

    
    const saveRespuesta = () =>{
        if(!respuesta == ""){
            const stateAux = [...comentario]
            stateAux[key].responder = [...stateAux[key].responder,  respuesta]
            setComentario(stateAux)
            setRespuesta("")
            props.handleClose()
        }
    }

    return (
            
            
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                    <Button variant="white" onClick={props.handleClose}>X</Button>
                </Modal.Header>
                <Modal.Body>
                    Ingrese su comentario
                <FormControl as="textarea" 
                value={respuesta}
                onChange={onChangeValue}
                placeholder="......" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={saveRespuesta}>
                    Responder
                </Button>
                </Modal.Footer>
            </Modal>
            
        );
}
export{MyModal}
