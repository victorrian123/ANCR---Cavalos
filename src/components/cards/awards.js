import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import image_4_1 from '../../assets/img/image_4_1.webp'
const Awar = () => {
    return <Card as={Col} md={5} xs={12} className="mb-4" style={{ boxShadow: '0px 19px 50px 10px rgba(0, 0, 0, 0.25)' }}>
        <Row className="align-items-center">
            <Card.Body as={Col} md={8} xs={12} className="p-4">
                <Card.Title className="text-left text-secondary">
                    <i className="fas fa-trophy"></i> 7404
                </Card.Title>
                <Card.Title className="text-left text-secondary">
                    Star Gold Chain
                </Card.Title>
                <Card.Text className="text-warning font-italic">
                    Gotta Gold Chain X Mel Shoot
                </Card.Text>
            </Card.Body>
            <Col md={4} xs={12}>
                <Card.Img src={image_4_1} style={{ width: '100%', maxHeight: 400 }} />
            </Col>
        </Row>
    </Card>
}
export default Awar