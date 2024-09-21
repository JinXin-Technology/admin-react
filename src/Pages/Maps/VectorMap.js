// import React from 'react';
// import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
// // Import Vector Map
// import Vector from './MapVector';

// //Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

// const VectorMaps = () => {
//     document.title = "Vector Maps | Upzet - React Admin & Dashboard Template";

//     return (
//         <React.Fragment>

//                 <div className="page-content">
//                     <Container fluid={true}>
//                         <Breadcrumbs title="Maps" breadcrumbItem="Vector Maps" />

//                         <Row>
//                             <div className="col-12">
//                                 <Card>
//                                     <CardBody>
//                                         <CardTitle>World Vector Map</CardTitle>
//                                         <p className="card-title-dsec">Example of world vector maps.</p>
//                                         <div id="world-map-markers" className="vector-map-height" style={{ height: "420px" }}>
//                                             <Vector
//                                                 value="world_mill"
//                                                 width="500"
//                                                 color="rgb(212, 218, 221)"
//                                             />
//                                         </div>
//                                     </CardBody>
//                                 </Card>
//                             </div>
//                         </Row>

//                         <Row>
//                             <Col lg={6}>
//                                 <Card>
//                                     <CardBody>
//                                         <CardTitle>USA Vector Map</CardTitle>
//                                         <p className="card-title-dsec">Example of united states of ameria vector maps.</p>
//                                         <div id="usa-vectormap" style={{ height: "420px" }}>
//                                             <Vector
//                                                 value="us_aea"
//                                                 width="500"
//                                                 color="#0bb197"
//                                             />
//                                         </div>
//                                     </CardBody>
//                                 </Card>
//                             </Col>

//                             <Col lg={6}>
//                                 <Card>
//                                     <CardBody>
//                                         <CardTitle>India Vector Map</CardTitle>
//                                         <p className="card-title-dsec">Example of india vector maps.</p>
//                                         <div id="india-vectormap" style={{ height: "420px" }}>
//                                             <Vector
//                                                 value="in_mill"
//                                                 width="500"
//                                                 color="#0bb197"
//                                             />
//                                         </div>
//                                     </CardBody>
//                                 </Card>
//                             </Col>
//                         </Row>


//                         <Row>
//                             <Col lg={6}>
//                                 <Card>
//                                     <CardBody>
//                                         <CardTitle>Australia Vector Map</CardTitle>
//                                         <p className="card-title-dsec">Example of australia vector maps.</p>
//                                         <div id="australia-vectormap" style={{ height: "420px" }}>
//                                             <Vector
//                                                 value="au_mill"
//                                                 width="500"
//                                                 color="#0bb197"
//                                             />
//                                         </div>
//                                     </CardBody>
//                                 </Card>
//                             </Col>


//                             <Col lg={6}>

//                                 <Card>
//                                     <CardBody>
//                                         <CardTitle>Canada Vector Map</CardTitle>
//                                         <p className="card-title-dsec">Example canada of vector maps.</p>
//                                         <div id="canada-vectormap" style={{ height: "420px" }}>
//                                             <Vector
//                                                 value="ca_lcc"
//                                                 width="500"
//                                                 color="#0bb197"
//                                             />
//                                         </div>
//                                     </CardBody>
//                                 </Card>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>

//         </React.Fragment>
//     );
// }

// export default VectorMaps;

import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import { GoogleApiWrapper } from "google-maps-react"; // If Vector doesn't require Google API, you can remove this import

// Import Vector Map Component
import Vector from './MapVector';

// Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

// Define inline styles
const styles = {
    pageContent: {
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        flex: 1, // Allow the container to grow and fill the available space
        display: 'flex',
        flexDirection: 'column',
        padding: '0', // Remove default padding
    },
    row: {
        flex: 1, // Allow the row to grow and fill the available space
        display: 'flex',
        flexDirection: 'column',
        margin: '0', // Remove default margin
    },
    col: {
        flex: 1, // Allow the column to grow and fill the available space
        display: 'flex',
        flexDirection: 'column',
        padding: '0', // Remove default padding
    },
    card: {
        flex: 1, // Allow the card to grow and fill the available space
        display: 'flex',
        flexDirection: 'column',
        margin: '0', // Remove default margin
        border: 'none', // Optional: remove border
        boxShadow: 'none', // Optional: remove shadow
    },
    cardBody: {
        flex: 1, // Allow the card body to grow and fill the available space
        display: 'flex',
        flexDirection: 'column',
        padding: '0', // Remove default padding
    },
    cardTitle: {
        padding: '20px', // Add padding to the title
        margin: '0',
        borderBottom: '1px solid #eaeaea', // Optional: add a bottom border
    },
    cardDesc: {
        padding: '0 20px 20px 20px', // Add padding to the description
        margin: '0',
        color: '#6c757d', // Optional: set text color
    },
    mapContainer: {
        flex: 1, // Allow the map container to grow and fill the available space
        position: 'relative',
    },
    mapStyles: {
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
};

// Loading indicator component
const LoadingContainer = () => (
    <div style={styles.loadingContainer}>
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const VectorMaps = (props) => {
    // Set the document title
    React.useEffect(() => {
        document.title = "Vector Maps | Upzet - React Admin & Dashboard Template";
    }, []);

    return (
        <React.Fragment>
            <div className="page-content" style={styles.pageContent}>
                <Container fluid={true} style={styles.container}>
                    {/* Breadcrumb Navigation */}
                    {/* <Breadcrumbs title="Maps" breadcrumbItem="Vector Maps" /> */}

                    {/* Single Row and Column for World Vector Map */}
                    <Row style={styles.row}>
                        <Col lg={12} style={styles.col}>
                            <Card style={styles.card}>
                                <CardBody style={styles.cardBody}>
                                    <CardTitle tag="h5" style={styles.cardTitle}>World Vector Map</CardTitle>
                                    <p className="card-title-dsec" style={styles.cardDesc}>
                                        Example of world vector maps.
                                    </p>

                                    {/* Vector Map Container */}
                                    <div
                                        id="world-map-markers"
                                        className="vector-map-height"
                                        style={styles.mapContainer}
                                        role="application"
                                        aria-label="World Vector Map"
                                    >
                                        <Vector
                                            value="world_mill"
                                            width="500"
                                            color="rgb(212, 218, 221)"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    {/* Single Row and Column for USA Vector Map */}
                    <Row style={styles.row}>
                        <Col lg={12} style={styles.col}>
                            <Card style={styles.card}>
                                <CardBody style={styles.cardBody}>
                                    <CardTitle tag="h5" style={styles.cardTitle}>USA Vector Map</CardTitle>
                                    <p className="card-title-dsec" style={styles.cardDesc}>
                                        Example of United States of America vector maps.
                                    </p>

                                    {/* Vector Map Container */}
                                    <div
                                        id="usa-vectormap"
                                        style={styles.mapContainer}
                                        role="application"
                                        aria-label="USA Vector Map"
                                    >
                                        <Vector
                                            value="us_aea"
                                            width="500"
                                            color="#0bb197"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    {/* Single Row and Column for India Vector Map */}
                    <Row style={styles.row}>
                        <Col lg={12} style={styles.col}>
                            <Card style={styles.card}>
                                <CardBody style={styles.cardBody}>
                                    <CardTitle tag="h5" style={styles.cardTitle}>India Vector Map</CardTitle>
                                    <p className="card-title-dsec" style={styles.cardDesc}>
                                        Example of India vector maps.
                                    </p>

                                    {/* Vector Map Container */}
                                    <div
                                        id="india-vectormap"
                                        style={styles.mapContainer}
                                        role="application"
                                        aria-label="India Vector Map"
                                    >
                                        <Vector
                                            value="in_mill"
                                            width="500"
                                            color="#0bb197"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    {/* Single Row and Column for Australia Vector Map */}
                    <Row style={styles.row}>
                        <Col lg={12} style={styles.col}>
                            <Card style={styles.card}>
                                <CardBody style={styles.cardBody}>
                                    <CardTitle tag="h5" style={styles.cardTitle}>Australia Vector Map</CardTitle>
                                    <p className="card-title-dsec" style={styles.cardDesc}>
                                        Example of Australia vector maps.
                                    </p>

                                    {/* Vector Map Container */}
                                    <div
                                        id="australia-vectormap"
                                        style={styles.mapContainer}
                                        role="application"
                                        aria-label="Australia Vector Map"
                                    >
                                        <Vector
                                            value="au_mill"
                                            width="500"
                                            color="#0bb197"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    {/* Single Row and Column for Canada Vector Map */}
                    <Row style={styles.row}>
                        <Col lg={12} style={styles.col}>
                            <Card style={styles.card}>
                                <CardBody style={styles.cardBody}>
                                    <CardTitle tag="h5" style={styles.cardTitle}>Canada Vector Map</CardTitle>
                                    <p className="card-title-dsec" style={styles.cardDesc}>
                                        Example of Canada vector maps.
                                    </p>

                                    {/* Vector Map Container */}
                                    <div
                                        id="canada-vectormap"
                                        style={styles.mapContainer}
                                        role="application"
                                        aria-label="Canada Vector Map"
                                    >
                                        <Vector
                                            value="ca_lcc"
                                            width="500"
                                            color="#0bb197"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

// Wrap the component with GoogleApiWrapper if needed
// If Vector Maps do not require Google API, you can remove GoogleApiWrapper
export default (
    GoogleApiWrapper({
        apiKey: "YOUR_GOOGLE_MAPS_API_KEY", // **Warning:** Exposing API keys in frontend is insecure.
        LoadingContainer: LoadingContainer,
        v: "3",
    })(VectorMaps)
);
