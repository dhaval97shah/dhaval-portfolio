import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="12">
      <Fade left duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h3>{data.name}</h3>
                    {/* <img src={data.logo} style={data.logoStyle} /> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    {data.android && (
                      <Button
                        href={data.android}
                        target="_blank"
                        rel="noopener"
                        style={{ padding: 0, marginRight: data.iOS ? 12 : 0 }}
                      >
                        <img
                          src="/img/playstorelink.png"
                          style={{ height: 38 }}
                          alt=""
                        />
                      </Button>
                    )}
                    {data.iOS && (
                      <Button
                        href={data.iOS}
                        target="_blank"
                        rel="noopener"
                        style={{ padding: 0 }}
                      >
                        <img
                          src="/img/appstorelink.png"
                          style={{ height: 38 }}
                          alt=""
                        />
                      </Button>
                    )}
                    {!data.android && !data.iOS && (
                      <p>
                        Coming soon on{" "}
                        <span style={{ color: "#1397ef", fontSize: 20, fontWeight: '500', marginLeft: 8, borderBottom: '2px solid #1397ef' }}>
                          {data.platforms}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                {/* <p className="description mt-3">{data.platforms}</p> */}
                {/* <p className="description mt-3">Available on </p> */}
                {/* <img src="/img/playstorelink.png" style={{ height: 50 }} /> */}
                <img src={data.logo} style={data.logoStyle} alt="" />

                <p className="description mt-4">{data.desc}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {data.images.map((item, index) => {
                    return <img src={item.img} key={index} style={item.style} alt="" />;
                  })}
                </div>
                {data.github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
