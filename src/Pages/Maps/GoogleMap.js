import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

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

const GoogleMap = (props) => {
    // Set the document title
    React.useEffect(() => {
        document.title = "Google Maps | Upzet - React Admin & Dashboard Template";
    }, []);

    return (
        <React.Fragment>
            <div className="page-content" style={styles.pageContent}>
                <Container fluid={true} style={styles.container}>
                    {/* Breadcrumb Navigation */}
                    {/* <Breadcrumbs title="Maps" breadcrumbItem="Google Maps" /> */}

                    {/* Single Row and Column for Markers Map */}
                    <Row style={styles.row}>
                        <Col lg={12} style={styles.col}>
                            <Card style={styles.card}>
                                <CardBody style={styles.cardBody}>
                                    <CardTitle style={styles.cardTitle}>Markers</CardTitle>
                                    <p className="card-title-dsec" style={styles.cardDesc}>
                                        Example of google maps.
                                    </p>

                                    {/* Map Container */}
                                    <div
                                        id="gmaps-markers"
                                        className="gmaps"
                                        style={styles.mapContainer}
                                        role="application"
                                        aria-label="Google Map showing markers for various locations"
                                    >
                                        <Map
                                            google={props.google}
                                            zoom={8}
                                            style={styles.mapStyles}
                                            initialCenter={{ lat: 34.134117, lng: -118.321495 }}
                                        >
                                            <Marker position={{ lat: 48.00, lng: -122.00 }} />
                                            <Marker position={{ lat: 34.134117, lng: -118.321495 }} />
                                            <Marker position={{ lat: 32.995049, lng: -111.536324 }} />
                                            <Marker position={{ lat: 37.383064, lng: -109.071236 }} />
                                            <Marker position={{ lat: 39.877586, lng: -79.640617 }} />
                                        </Map>
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

export default (
    GoogleApiWrapper({
        apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE", // **Warning:** Exposing API keys in frontend is insecure.
        LoadingContainer: LoadingContainer,
        v: "3",
    })(GoogleMap)
);
