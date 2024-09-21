import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

import RadialChart1 from "./userpanelChart1";
import RadialChart2 from "./userpanelChart2";
import RadialChart3 from "./userpanelChart3";
import RadialChart4 from "./userpanelChart4";

const UserPanel = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={3} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div id="radialchart-1" className="apex-charts" dir="ltr">
                    <RadialChart1 />
                  </div>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1">Unknown Drones</p>
                  <h5 className="mb-3">38</h5>
                  <p className="text-truncate mb-0">
                    <span className="text-success me-2">
                      {" "}
                      12%{" "}
                      <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
                    </span>{" "}
                    {/* From previous */}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={3} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart2
                    id="radialchart-2"
                    className="apex-charts"
                    dir="ltr"
                  />
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1">Known Drones</p>
                  <h5 className="mb-3">5</h5>
                  <p className="text-truncate mb-0">
                    <span className="text-success me-2">
                      {" "}
                      1.7%{" "}
                      <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
                    </span>{" "}
                    {/* From previous */}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={3} sm={6}>
          <Card>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart3
                    id="radialchart-3"
                    className="apex-charts"
                    dir="ltr"
                  />
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1">Friendly Drones</p>
                  <h5 className="mb-3">24.03 %</h5>
                  <p className="text-truncate mb-0">
                    <span className="text-success me-2">
                      {" "}
                      0.01%{" "}
                      <i className="ri-arrow-right-down-line align-bottom ms-1"></i>
                    </span>{" "}
                    {/* From previous */}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={3} sm={6}>
        <Card>
    <CardBody>
      <div className="d-flex text-muted">
        <div className="flex-shrink-0 me-3 align-self-center">
          <div id="radialchart-4" className="apex-charts" dir="ltr">
            <RadialChart4 /> {/* RadialChart for Hostile Drones */}
          </div>
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <p className="mb-1">Hostile Drones</p>
          <h5 className="mb-3">10</h5>
          <p className="text-truncate mb-0">
            <span className="text-danger me-2">
              45% <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
            </span>
            {/* From previous */}
          </p>
        </div>
      </div>
    </CardBody>
  </Card>
</Col>

      </Row>
    </React.Fragment>
  );
};

export default UserPanel;
