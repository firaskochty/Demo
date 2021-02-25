


import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
// index page sections
import Download from "../IndexSections/Download.js";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped">
              <div className="shape shape-style-1 shape-default bg-gradient-warning"> {/*hethi mta3 le background*/} </div>
              <br></br>
              <br></br>
              
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>

          <section className="section section-lg pt-lg-0 mt-200">
            <Container>
              
              <Row className="justify-content-center">
                <h1 className="text-uppercase" > Contact </h1>                
                <br></br>
                <br></br>

                
              </Row>
            </Container>
          </section>
          
        
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
