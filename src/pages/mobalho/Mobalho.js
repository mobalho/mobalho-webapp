import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-materialize';
import { withRouter } from 'react-router-dom'

import './Mobalho.css'

class Mobalho extends Component {

  render() {
    return (
      <div className="center-align">
        <Row>
          <Col s={12} className="logo-container">
            <img src="/images/mobalho-logo.jpg" alt="mobalho-logo"></img>
          </Col>
        </Row>

        {/* <Row>
          <Col s={12}>
            <h5>Produtos</h5>
          </Col>
        </Row>

        <Row>
          <Col s={4} offset="s4">
            <Card
              actions={[<Button flat onClick={() => this.props.history.push("/products/ipaia")}>Ver mais</Button>]}>
              <img src="/images/ipaia-logo.png"></img>
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default withRouter(Mobalho);
