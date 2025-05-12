import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./company.css";
import two from "../../../assets/two.png"
import four from "../../../assets/four.png"
import four1 from "../../../assets/four1.png"
import four2 from "../../../assets/four2.png"
import four3 from "../../../assets/four3.png"

const Company = () => {
  return (
    <section id='two'>
        <Container>
            <Row className='two2'>
                <Col log={6}>
                  <div className="two3">
                    <h2>Trusted by thousands <br /> of top DTC <span><img src={two} alt="" /></span></h2>
                  </div>
                </Col>
            </Row>
            <Row className='two5'>
                <Col lg={{span:3}}>
                <img src={four} alt="" />
                </Col>
                <Col lg={{span:3}}>
                <img src={four1} alt="" />
                </Col>
                <Col lg={{span:3}}>
                <img src={four2} alt="" />
                </Col>
                <Col lg={{span:3}}>
                <img src={four3} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Company