import React from 'react'
import { Card, Col } from 'react-bootstrap'
import image_8 from '../../assets/img/image_8.webp'
const Presentation = () => {
    return <Card as={Col} md={6} xs={12} className="border-0">
        <Card.Body>
            <Card.Img src={image_8} style={{ maxHeight: 500 }} />
            <Card.Footer className="border-0 text-left text-secondary p-0 mt-3" style={{ background: 'none' }}>
                O maior evento de Rédeas da América do Sul. Com leilões, premiações de até 500 mil reais, um verdadeiro espetáculo para entusiastas de equinos. Fique por dentro de tudo em nosso portal.
            </Card.Footer>
        </Card.Body>
    </Card>
}
export default Presentation