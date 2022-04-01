import React from "react";
import { AddComment } from '../AddComment';
import {Comment}  from '../Comment'
import {MyModal} from '../MyModal'
import {Context} from "../Context";
import {MostrarRespuesta} from '../Respuesta'
import { Container } from "react-bootstrap";


function AppUI(){
    const {
        comentario,
        setComentario,
        setKey,
        setRespuesta
    } = React.useContext(Context)

    function ColorCambio (key){
        const comentarioAux =  [...comentario]
        comentarioAux[key].countLikes++
        comentarioAux[key].like = true
        setComentario(comentarioAux)
    }

    const [openModal,setOpenModal] = React.useState(false)

    const handleClose = () =>{
        setRespuesta("")
        setOpenModal(false);
        
    } 
    const handleShow = (key) =>{
        setKey(key)
        setOpenModal(true);
    }

    return (
        <React.Fragment>
            <AddComment/>
            {comentario.map((comentaios, key) =>(
                <React.Fragment>
                <Comment
                comentario={comentaios}
                ColorCambio={() => ColorCambio(key)}
                responder={() => handleShow(key)}
                />
                <Container>
                {comentaios?.responder.map((res) => (
                    <MostrarRespuesta res={res}
                    />
                ))}  
                </Container>
                </React.Fragment>
            ))}

                <MyModal
                    show={openModal}
                    handleClose={handleClose}
                />
        </React.Fragment>
    )
}
export{AppUI}



