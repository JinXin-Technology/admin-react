import React from "react";
import UsePanel from "./UserPanel";
// import OrderStatus from "./OrderStatus";
// import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
// import RevenueByLocation from "./RevenueByLocation";
// import LatestTransation from "./LatestTransation";

import { Row, Container } from "reactstrap";

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumbs title="Upzet" breadcrumbItem="Dashboard" /> */}
          <UsePanel />

          <Row>
            <OverView />
            <SocialSource />
          </Row>

          <Row>
            {/* Other components */}
          </Row>

          {/* Latest Transaction Table */}
        </Container>
      </div>
    </React.Fragment>
  );
};


export default Dashboard;
