import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import image_4 from '../../assets/img/image_4.webp'
const CardWellCome = () => {
    return <Card as={Col} md={8} xs={12} style={{ boxShadow: '0px 19px 50px 10px rgba(0, 0, 0, 0.25)' }}>
        <Row className="text-center align-items-start">
            <Card.Body as={Col} md={8} className="p-4">
                <Card.Title className="display-4 text-secondary fw-bold" style={{ fontFamily: 'Century Schoolbook' }}>
                    Bem Vindos
                </Card.Title>
                <Card.Title className="display-6 text-warning"style={{ fontFamily: 'Century Schoolbook' }}>
                    a nossa associação para amantes de equinos
                </Card.Title>
                <Card.Text className="text-secondary">
                    Pratique, veja, sinta o melhor da Equitação Western próximo de você. Se você realmente gosta de cavalos e gente boa está no lugar certo.
                </Card.Text>
            </Card.Body>
            <Col md={4} xs={12}>
                <Card.Img src={image_4} style={{ maxWidth: 400, maxHeight: 400 }} />
            </Col>
        </Row>
    </Card>
}
export default CardWellCome