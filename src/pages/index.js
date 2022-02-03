import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Magazines from "../components/cards/magazine";
import Presentation from "../components/cards/presentation";
import News from '../components/cards/news'
import TopContainer from "../components/container/topContainer";
import Awards from "../components/cards/awards";
import Join from "../components/cards/join";
import Sponsors from "../components/Image/sponsors";
import Retangle from "../components/cards/button";
import image1 from '../assets/img/0 (1).jpg'
import image2 from '../assets/img/0 (2).png'
import image3 from '../assets/img/0 (3).jpg'
import image4 from '../assets/img/0 (1).png'
import vetor1 from '../assets/img/vetor_1.webp'
import vetor2 from '../assets/img/vetor_2.webp'
import vetor3 from '../assets/img/vetor_3.webp'
import vetor4 from '../assets/img/vetor_4.webp'

const HomeIndex = () => {
    const titles = [
        [
            'Apresentação',
            'Revistas',
        ],
        [
            'Noticias',
            'Premiações'
        ]
    ]
    const itensCard = [
        { text: 'Tratramento Profissional', sub_text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.', },
        { text: 'Acesso a Competições', sub_text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.', },
        { text: 'Cuidados de Equinos', sub_text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.', },
        { text: 'Revista Rédeas', sub_text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.', },

    ]
    const imageSponsors = [
        image1, image2, image3, image4
    ]
    const itemsRetangle = [
        { text: '+75 ', sub_text: 'Montadores Profissionais', icon: vetor1 },
        { text: '+45 ', sub_text: 'Cavalos Na Equipe', icon: vetor2 },
        { text: '+375 ', sub_text: 'Premiações Realizadas', icon: vetor3 },
        { text: '+1100', sub_text: 'Afiliados a ANCR', icon: vetor4 },

    ]
    const { push } = useHistory()
    return <Container fluid>
        <TopContainer />
        <Container>
            <Row className="text-center mb-3">
                {titles[0].map(item => (
                    <Col md={6} xs={12}>
                        <Card.Title className="display-6 mb-3 fw-bold text-warning" style={{ fontFamily: 'Century Schoolbook' }}>
                            {item}
                        </Card.Title>
                    </Col>
                ))}
            </Row>
            <Row className="align-items-start mb-3">
                <Presentation />
                <Magazines />
            </Row>
            <Row className="text-center mb-3 fw-bold" style={{ fontFamily: 'Century Schoolbook' }}>
                {titles[1].map(item => (
                    <Col md={6} xs={12}>
                        <Card.Title className="display-6 mb-3 text-warning">
                            {item}
                        </Card.Title>
                    </Col>
                ))}
            </Row>
            <Row className="d-flex justify-content-between align-items-center mb-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <>
                        <News />
                        <Awards />
                    </>
                ))}
            </Row>
            <Row className="align-items-center mb-3">
                <Col md={6} xs={12}>
                    <Button variant="primary" style={{ width: 227, fontFamily: 'Century Schoolbook' }} onClick={() => push('/noticias')}>
                        Ver mais
                    </Button>
                </Col>
                <Col md={6} xs={12}>
                    <Button variant="primary" style={{ width: 227, fontFamily: 'Century Schoolbook' }} onClick={() => push('/primiacoes')}>
                        Ver mais
                    </Button>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={12} xs={12}>
                    <Card.Title className="display-6 text-center fw-bold text-warning"
                    style={{ fontFamily: 'Century Schoolbook' }}
                    >
                        Por que filiar-se?
                    </Card.Title>
                </Col>
            </Row>
            <Row className="d-flex justify-content-around align-items-start mb-3">
                {itensCard.map(({ text, sub_text }, i) => (
                    <Join key={i} i={i + 1} text={text} sub_text={sub_text} />
                ))}
            </Row>
            <Row className="mb-3">
                <Col md={12} xs={12}>
                    <Card.Title className="display-6 text-center fw-bold text-warning">
                        Patrocinadores
                    </Card.Title>
                </Col>
            </Row>
            <Row className="d-flex justify-content-around align-items-center mb-5">
                {/* <i className="fas fa-chevron-left"></i> */}
                {imageSponsors.map(item => (
                    <Sponsors src={item} />
                ))}
                {/* <i className="fas fa-chevron-right"></i> */}
            </Row>
            <Row className="d-flex justify-content-around align-items-start mb-3">
                {itemsRetangle.map(({ text, sub_text, icon }, i) => (
                    <Retangle key={i} text={text} sub_text={sub_text} icon={icon} />
                ))}
            </Row>
        </Container>

        {/* i, text, sub_text */}
    </Container>
}
export default HomeIndex