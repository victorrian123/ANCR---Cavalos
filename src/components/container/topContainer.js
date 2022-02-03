import React from "react";
import { Col,} from "react-bootstrap";
import topContainerBackground from '../../assets/img/topContainer.webp'
import CardWellCome from "../cards/cardWellcome";
const TopContainer = () => {
    return <Col md={12} xs={12} lg={12} className="d-flex justify-content-center align-items-end mb-5" style={
        {
            backgroundImage: `url(${topContainerBackground})`, backgroundSize: 'cover',
            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh'
        }}>
            <CardWellCome />
    </Col>
}
export default TopContainer