import React from "react";
import {Col, Container, Row} from 'react-bootstrap' 

function MostrarRespuesta(props){
    return(
       
            <Row>
                <Col>
                    {props.res}
                </Col>
            </Row>
        
    )
}

export{MostrarRespuesta}
