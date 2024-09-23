// import React, { useEffect } from "react";
// import { Card, CardBody, Col, Row } from "reactstrap";

// import RadialChart1 from "./userpanelChart1";
// import RadialChart2 from "./userpanelChart2";
// import RadialChart3 from "./userpanelChart3";
// import RadialChart4 from "./userpanelChart4";

// const UserPanel = () => {
//   // Set document title when the component mounts
//   useEffect(() => {
//     document.title = "Dashboard | Glamco - Admin Dashboard";
//   }, []);

//   return (
//     <React.Fragment>
//       <h2>Dashboard</h2> {/* Add a heading for the Dashboard */}
//       <Row>
//         {/* Unknown Drones - Yellow Background */}
//         <Col xl={3} sm={6}>
//           <Card style={{ backgroundColor: "yellow" }}>
//             <CardBody>
//               <h4 className="card-title mb-4">Unknown Drones</h4>
//               <div className="d-flex text-muted">
//                 <div className="flex-shrink-0 me-3 align-self-center">
//                   <div id="radialchart-1" className="apex-charts" dir="ltr">
//                     <RadialChart1 />
//                   </div>
//                 </div>

//                 <div className="flex-grow-1 overflow-hidden">
//                   <h5 className="mb-3">38</h5>
//                   <p className="text-truncate mb-0">
//                     <span className="text-success me-2">
//                       12%{" "}
//                       <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
//                     </span>{" "}
//                     {/* From previous */}
//                   </p>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//         </Col>

//         {/* Known Drones - Grey Background */}
//         <Col xl={3} sm={6}>
//           <Card style={{ backgroundColor: "lightgrey" }}>
//             <CardBody>
//               <h4 className="card-title mb-4">Known Drones</h4>
//               <div className="d-flex">
//                 <div className="flex-shrink-0 me-3 align-self-center">
//                   <RadialChart2
//                     id="radialchart-2"
//                     className="apex-charts"
//                     dir="ltr"
//                   />
//                 </div>

//                 <div className="flex-grow-1 overflow-hidden">
//                   <h5 className="mb-3">5</h5>
//                   <p className="text-truncate mb-0">
//                     <span className="text-success me-2">
//                       1.7%{" "}
//                       <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
//                     </span>{" "}
//                     {/* From previous */}
//                   </p>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//         </Col>

//         {/* Friendly Drones - Light Green Background */}
//         <Col xl={3} sm={6}>
//           <Card style={{ backgroundColor: "lightgreen" }}>
//             <CardBody>
//               <h4 className="card-title mb-4">Friendly Drones</h4>
//               <div className="d-flex text-muted">
//                 <div className="flex-shrink-0 me-3 align-self-center">
//                   <RadialChart3
//                     id="radialchart-3"
//                     className="apex-charts"
//                     dir="ltr"
//                   />
//                 </div>

//                 <div className="flex-grow-1 overflow-hidden">
//                   <h5 className="mb-3">24</h5>
//                   <p className="text-truncate mb-0">
//                     <span className="text-success me-2">
//                       0.01%{" "}
//                       <i className="ri-arrow-right-down-line align-bottom ms-1"></i>
//                     </span>{" "}
//                     {/* From previous */}
//                   </p>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//         </Col>

//         {/* Hostile Drones - Light Red Background */}
//         <Col xl={3} sm={6}>
//           <Card style={{ backgroundColor: "lightcoral" }}>
//             <CardBody>
//               <h4 className="card-title mb-4">Hostile Drones</h4>
//               <div className="d-flex text-muted">
//                 <div className="flex-shrink-0 me-3 align-self-center">
//                   <div id="radialchart-4" className="apex-charts" dir="ltr">
//                     <RadialChart4 />
//                   </div>
//                 </div>
//                 <div className="flex-grow-1 overflow-hidden">
//                   <h5 className="mb-3">10</h5>
//                   <p className="text-truncate mb-0">
//                     <span className="text-primary me-2">
//                       45%{" "}
//                       <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
//                     </span>{" "}
//                     {/* From previous */}
//                   </p>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default UserPanel;


import React, { useEffect } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import RadialChart1 from "./userpanelChart1";
import RadialChart2 from "./userpanelChart2";
import RadialChart3 from "./userpanelChart3";
import RadialChart4 from "./userpanelChart4";

const UserPanel = () => {
  // Set document title when the component mounts
  useEffect(() => {
    document.title = "Dashboard | Glamco - Admin Dashboard";
  }, []);

  return (
    <React.Fragment>
      <h2 style={styles.dashboardHeading}>Dashboard</h2> {/* Smaller heading */}
      <Row>
        {/* Unknown Drones - Yellow Background */}
        <Col xl={3} sm={6}>
          <Card style={styles.cardYellow}>
            <CardBody>
              <h4 className="card-title mb-4">Unknown Drones</h4>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div id="radialchart-1" className="apex-charts" dir="ltr">
                    <RadialChart1 />
                  </div>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="mb-3">38</h5>
                  <p className="text-truncate mb-0">
                    <span className="text-success me-2">
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

        {/* Known Drones - Grey Background */}
        <Col xl={3} sm={6}>
          <Card style={styles.cardGrey}>
            <CardBody>
              <h4 className="card-title mb-4">Known Drones</h4>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart2
                    id="radialchart-2"
                    className="apex-charts"
                    dir="ltr"
                  />
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="mb-3">5</h5>
                  <p className="text-truncate mb-0">
                    <span className="text-success me-2">
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

        {/* Friendly Drones - Light Green Background */}
        <Col xl={3} sm={6}>
          <Card style={styles.cardLightGreen}>
            <CardBody>
              <h4 className="card-title mb-4">Friendly Drones</h4>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart3
                    id="radialchart-3"
                    className="apex-charts"
                    dir="ltr"
                  />
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="mb-3">24</h5>
                  <p className="text-truncate mb-0">
                    <span className="text-success me-2">
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

        {/* Hostile Drones - Light Red Background */}
        <Col xl={3} sm={6}>
          <Card style={styles.cardLightRed}>
            <CardBody>
              <h4 className="card-title mb-4">Hostile Drones</h4>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div id="radialchart-4" className="apex-charts" dir="ltr">
                    <RadialChart4 />
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="mb-3">10</h5>
                  <p className="text-truncate mb-0">
                    <span className="text-primary me-2">
                      45%{" "}
                      <i className="ri-arrow-right-up-line align-bottom ms-1"></i>
                    </span>{" "}
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

// Inline styles for the UserPanel component
const styles = {
  dashboardHeading: {
    fontSize: "1.0rem", // Smaller font size
    fontWeight: 600,
    marginBottom: "1.5rem",
    color: "#333", // Optional: Customize heading color
  },
  cardYellow: {
    backgroundColor: "yellow",
  },
  cardGrey: {
    backgroundColor: "lightgrey",
  },
  cardLightGreen: {
    backgroundColor: "lightgreen",
  },
  cardLightRed: {
    backgroundColor: "lightcoral",
  },
};

export default UserPanel;
