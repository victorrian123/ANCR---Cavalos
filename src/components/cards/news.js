import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import image_4 from '../../assets/img/image_4.webp'
const News = () => {
    return <Card as={Col} md={5} xs={12} className="mb-4" style={{ boxShadow: '0px 19px 50px 10px rgba(0, 0, 0, 0.25)' }}>
        <Row className="align-items-center">
            <Card.Body as={Col} md={8} xs={12} className="p-4">
                <Card.Title className="text-left text-secondary" style={{ fontFamily: 'Century Schoolbook' }}>
                    Novos critérios de mobilidade de ranking ANCR
                </Card.Title>
                <Card.Text className="text-warning font-italic" style={{ fontFamily: 'Century Schoolbook' }}>
                    {new Date().toLocaleDateString('pt-br')}
                </Card.Text>
            </Card.Body>
            <Col md={4} xs={12}>
                <Card.Img src={image_4} style={{ width: '100%', maxHeight: 400 }} />
            </Col>
        </Row>
    </Card>
}
export default News