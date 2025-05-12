import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./Pricing.css";
import five from "../../assets/five.png"

const Pricing = () => {
  return (
    <section id='five5'>
        <Container>
            <Row>
                <Col lg={{span:10}}>
                <div className="five">
                    <h2>PostPilot makes it a <span><img src={five} alt="" /></span> to send personalized, profit-generating postcards.</h2>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Pricing