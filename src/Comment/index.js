import React from "react";
import { Card , Button } from "react-bootstrap";
import { AiFillLike } from 'react-icons/ai';
import './index.css';

function Comment(props){

    return(
        <React.Fragment>
            <Card className="mt-3"body> {props.comentario.text} 
                <span className="Icon-delete row">
                    <AiFillLike onClick={props.ColorCambio}
                    className={`${props.comentario.like && 'cambio'}`}/>
                    <p>{props.comentario.countLikes}</p>
                    <Button
                            variant="success"
                            onClick={props.responder}
                            >
                                responder
                    </Button>
                </span>
            </Card>
        </React.Fragment>
    )
}

export{Comment}
