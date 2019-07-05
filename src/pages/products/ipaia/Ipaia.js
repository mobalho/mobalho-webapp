import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-materialize';
import { withRouter } from 'react-router-dom'

class Ipaia extends Component {

  render() {
    return (
      <div className="center-align">
        <Row>
          <Col s={12}>
            <img src="/images/ipaia-logo.png" alt="ipaia-logo"></img>
          </Col>
        </Row>
        <Row>
          iPaia é isso ai
        </Row>
        <Row>
          <Button onClick={e => window.location.href = "http://ipaia.github.io"}>Ir para iPaia</Button>
        </Row>
      </div>
    );
  }
}

export default withRouter(Ipaia);
