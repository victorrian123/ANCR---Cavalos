import React from 'react'
import { Card, Col } from 'react-bootstrap'
const Join = ({ i, text, sub_text }) => {
    return <Card as={Col} md={3} xs={6} className="text-center m-1 mb-4" style={{ boxShadow: '0px 19px 50px 10px rgba(0, 0, 0, 0.25)' }}>
        <Card.Title className="display-3 text-primary fw-bold mb-3" style={{ fontFamily: 'Century Schoolbook' }}>
            {i}
        </Card.Title>
        <Card.Title className="display-6 text-warning  mb-3" style={{ fontFamily: 'Century Schoolbook' }}>
            {text}
        </Card.Title>
        <Card.Text className="text-secondary  mb-3">
            {sub_text}
        </Card.Text>
    </Card>
}
// Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
export default Join