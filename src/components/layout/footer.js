import React from 'react'
import { Container, Nav, } from 'react-bootstrap'
const Footer = () => {
    return <Container fluid className="d-flex justify-content-between align-itens-center"style={{background:'#A85920',overflow:'hidden'}}>
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>INICIO</Nav.Link>
            {[{
                url: '/',
                title: 'Inicial',
            }, {
                url: '/noticias',
                title: 'Notícias',
            }, {
                url: '/campanhas',
                title: 'Animais',
            }, {
                url: '/perfis',
                title: 'Competidores',
            }, {
                url: '/eventos',
                title: 'Eventos',
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>ANIMAIS</Nav.Link>
            {[{
                url: '/campanhas',
                title: 'Campanhas',
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>COMPETIDORES</Nav.Link>
            {[{
                url: '/perfis',
                title: 'Perfis',
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>EVENTOS</Nav.Link>
            {[{
                url: '/eventos',
                title: 'Calendário',
            }, {
                url: '/eventos?resultados=1&order=desc',
                title: 'Resultados',
            }, {
                url: '/fotos',
                title: 'Fotos',
            }, {
                url: '/videos',
                title: 'Vídeos',
            }, {
                url: '/regulamentonacional',
                title: 'Circular Nacional',
                static: true,
                id: "232DDF26-72B7-49B2-9C87-8EDE296F0E9C",
                page: 1,
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>NOMINAÇÃO</Nav.Link>
            {[{
                url: '/normasnominacao',
                title: 'Normas',
                static: true,
                id: "1777405F-BCAB-41D7-8070-7185E616B429",
                page: 1,
            }, {
                url: '/formularionominacao',
                title: 'Formulário'
            }, {
                url: '/nominacoes',
                title: 'Relação',

            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>NÍVEIS</Nav.Link>
            {[{
                url: '/regulamentoniveis',
                title: 'Critérios',
                static: true,
                id: "8E19929D-3515-44C2-AAD0-2BD13F93A99B",
                page: 1,
            }, {
                url: '/niveis?aberta=1',
                title: 'Aberta'
            }, {
                url: '/niveis?aberta=0',
                title: 'Amador'
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>SERVIÇOS</Nav.Link>
            {[{
                url: '/servicos/1',
                title: 'Juízes',
            }, {
                url: '/servicos/2',
                title: 'Treinadores',
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>RAKING</Nav.Link>
            {[{
                url: '/ranking',
                title: 'Temporada Geral',
            }, {
                url: '/ranking/0',
                title: 'Acumulado',
            }, {
                url: '/ranking/2',
                title: '2 anos hípicos',
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>AFILIADOS</Nav.Link>
            {[{
                url: '/nucleos',
                title: 'Núcleos',
            }, {
                url: '/eventos?resultados=1&order=desc',
                title: 'Resultados',
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>INSTITUCIONAIS</Nav.Link>
            {[{
                url: '/cnpj',
                title: 'CNPJ',
                static: true,
                id: "713F55DD-2649-4101-BC7F-E12A914A6F1F",
                page: 1,
            }, {
                url: '/estatuto',
                title: 'Estatuto',
                static: true,
                id: "2682429D-09F4-45A5-B37D-933655772552",
                page: 1,
            }, {
                url: '/historico',
                title: 'Histórico',
                static: true,
                id: "B9647249-D577-42DB-8A04-70E0153417D6",
                page: 1,
            }, {
                url: '/regulamento',
                title: 'Regulamento',
                static: true,
                id: "FD67813B-2F67-42C2-B5B5-5292DF3EAC6E",
                page: 1,
            }, {
                url: '/diretoria',
                title: 'Diretoria',
                static: true,
                id: "816829AB-49E9-4CAD-B317-B37E96100166",
                page: 1,
            }, {
                url: '/afiliar',
                title: 'Associe-se'
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
        <Nav defaultActiveKey="/home" className="flex-column ">
            <Nav.Link href="#" className="fw-bold text-light" style={{ fontFamily: 'Century Schoolbook' }}>CONTATO</Nav.Link>
            {[{
                url: 'contato',
                title: 'Contate-nos'
            }].map(item => (
                <Nav.Link eventKey={`link-${item.url}`} className=" text-light" style={{ fontFamily: 'Century Schoolbook' }}>{item.title}</Nav.Link>
            ))}
        </Nav>
    </Container>
}
export default Footer