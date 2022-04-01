import React from "react";
import { Container, } from "react-bootstrap";
import {Button, InputGroup, FormControl} from "react-bootstrap"
import {Context} from "../Context";

function AddComment(){
    const {
        individual,
        setIndividual,
        setComentario,
        comentario,
    } = React.useContext(Context)


    const individualT = {...individual}
    function onChangeInput(event){
        individualT.text = event.target.value
        setIndividual(individualT)
    }

    function AddComentario(){
        if(!individual.text == ""){
            const aux = [...comentario]
            aux.push({...individual})
            setComentario(aux)
            individual.text = ""
            setIndividual(individual)
        }
    }

    return(
        <Container>
            <InputGroup className="mt-3">
            <FormControl
                value={individual.text}
                onChange={onChangeInput}
                placeholder="Ingrese un comentario"

            />
            </InputGroup>
            <InputGroup className="mt-3 justify-content-center">
            <Button 
            variant="primary"
            onClick={AddComentario}
            >Agregar</Button>
            </InputGroup>
        </Container>
    )
}

export { AddComment}