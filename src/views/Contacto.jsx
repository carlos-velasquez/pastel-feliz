import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto"

const contacto  = () => {
    return (
        <Container>
            <h2 className="text-center">Cuentanos, ¿En que podemos ayudar?</h2>
            <Contacto />
        </Container>
    )
}

export default contacto;