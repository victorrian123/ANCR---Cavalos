import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
const Retangle = ({ icon, text, sub_text }) => {
    return <Card as={Col} md={3} xs={6} className="text-center m-1 mb-4" style={{ boxShadow: '0px 19px 50px 10px rgba(0, 0, 0, 0.25)' }}>
        <Row className="align-items-center" style={{ height: 200 }}>
            <Col md={4} xs={12}className="p-2">
                <Card.Img src={icon} style={{ maxWidht: 150, maxHeight: 100 }} />
            </Col>
            <Card.Body as={Col} md={8} xs={12}>
                <Card.Title className="display-6 text-primary fw-bold" style={{ fontFamily: 'Century Schoolbook' }}>
                    {text}
                </Card.Title>
                <Card.Text className="text-secondary  mb-3">
                    {sub_text}
                </Card.Text>
            </Card.Body>
        </Row>
    </Card>
}
// Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
export default Retangle