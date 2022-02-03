import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import image_5 from '../../assets/img/image_5.webp'
const Magazines = () => {
    return <Card as={Col} md={6} xs={12} className="border-0">
        <Card.Body className="text-center">
            <Card.Img src={image_5} style={{ maxHeight: 392, maxWidth: 300 }} />
            <Card.Footer className="border-0 text-left text-secondary p-0 mt-3" style={{ background: 'none' }}>
                <Button variant="primary" className="rounded-pill w-50" >
                    Ler
                </Button>
            </Card.Footer>
        </Card.Body>
    </Card>
}
export default Magazines