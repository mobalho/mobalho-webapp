import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { withRouter } from 'react-router-dom'

import './Mobalho.css'

class Mobalho extends Component {

  render() {
    return (
      <div className="center-align">
        <Row>
          <Col s={12}>
            <img src="/images/mobalho-logo.png" alt="mobalho-logo"></img>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h4>Softwares do caralho</h4>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Mobalho);
