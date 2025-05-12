import React from 'react'
import "./banner.css";
import { Container,Row,Col } from 'react-bootstrap';
import div from "../../../assets/div.png"
import row from "../../../assets/row.png"
import one from "../../../assets/one.png"


const Banner = () => {
  return (
    <>
    <section id='rakib'>
      <Container>
        <Row>
          <Col lg={7}>
          <div className="one">
            <h2>Meet your <br /> <span><img src={row} alt="" /></span> new (old) marketing channel. </h2>
            <p>Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce</p>
            <div className="one2">
              <a href="#">Try it Risk-free</a>
              <div className="one3">
                <img src={one} alt="" />
              </div>
            </div>
          </div>
          </Col>
          <Col lg={5}>
          <img src={div} className='w-100' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Banner