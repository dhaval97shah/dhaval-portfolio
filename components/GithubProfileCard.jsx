import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={"/img/profile.jpeg"}
                style={{ width: "400px" }}
                alt=""
                className="img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                Do you have an idea to discuss?
              </p>
              <p className="lead text-white mt-0">Dm Me.</p>
              <h5 className="text-white">Contact:</h5>
              <div className="text-white">
                <span>
                  <i className="fa" style={{ fontSize: 20, marginRight: 15 }}>
                    &#xf10b;
                  </i>
                </span>
                +91 9724300523
              </div>
              <div className="text-white">
                <span>
                  <i className="fa" style={{ fontSize: 16, marginRight: 8 }}>
                    &#xf0e0;
                  </i>
                </span>
                shahdhaval100@gmail.com
              </div>
              <p className="text-white mt-3"></p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                Ahmedabad, Gujarat, India.
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
