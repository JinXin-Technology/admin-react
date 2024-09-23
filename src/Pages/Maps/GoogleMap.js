// import React, { useState, useEffect, useRef } from 'react';
// import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
// import { GoogleApiWrapper, Map, Marker, Circle } from "google-maps-react";

// // Define inline styles
// const styles = {
//     pageContent: {
//         height: '100vh', // Full viewport height
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     container: {
//         flex: 1, // Allow the container to grow and fill the available space
//         display: 'flex',
//         flexDirection: 'column',
//         padding: '0', // Remove default padding
//     },
//     row: {
//         flex: 1, // Allow the row to grow and fill the available space
//         display: 'flex',
//         flexDirection: 'column',
//         margin: '0', // Remove default margin
//     },
//     col: {
//         flex: 1, // Allow the column to grow and fill the available space
//         display: 'flex',
//         flexDirection: 'column',
//         padding: '0', // Remove default padding
//     },
//     card: {
//         flex: 1, // Allow the card to grow and fill the available space
//         display: 'flex',
//         flexDirection: 'column',
//         margin: '0', // Remove default margin
//         border: 'none', // Optional: remove border
//         boxShadow: 'none', // Optional: remove shadow
//     },
//     cardBody: {
//         flex: 1, // Allow the card body to grow and fill the available space
//         display: 'flex',
//         flexDirection: 'column',
//         padding: '0', // Remove default padding
//     },
//     cardTitle: {
//         padding: '20px', // Add padding to the title
//         margin: '0',
//         borderBottom: '1px solid #eaeaea', // Optional: add a bottom border
//     },
//     mapContainer: {
//         flex: 1, // Allow the map container to grow and fill the available space
//         position: 'relative',
//     },
//     mapStyles: {
//         width: '100%',
//         height: '100%',
//     },
//     loadingContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100%',
//     },
//     radarPulse: {
//         position: 'absolute',
//         width: '200px',
//         height: '200px',
//         borderRadius: '50%',
//         backgroundColor: 'rgba(0, 255, 0, 0.4)',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         animation: 'pulse 2s infinite ease-out',
//     }
// };

// // Radar pulse animation keyframes (CSS-in-JS style)
// const pulseKeyframes = `
// @keyframes pulse {
//     0% {
//         transform: scale(0.3);
//         opacity: 0.6;
//     }
//     50% {
//         transform: scale(1.5);
//         opacity: 0.3;
//     }
//     100% {
//         transform: scale(2);
//         opacity: 0;
//     }
// }
// `;

// // Inject keyframes into the document's style element
// const injectPulseKeyframes = () => {
//     const styleSheet = document.styleSheets[0];
//     styleSheet.insertRule(pulseKeyframes, styleSheet.cssRules.length);
// };

// const GoogleMap = (props) => {
//     const [currentLocation, setCurrentLocation] = useState({ lat: 1.3521, lng: 103.8198 });  // Default to Singapore center
//     const mapRef = useRef(null);
//     const radarRef = useRef(null);

//     // Fetch user's current location
//     useEffect(() => {
//         document.title = "Live Map | Glamco - Admin Dashboard";

//         // Inject keyframes for radar pulse animation
//         injectPulseKeyframes();

//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const userLocation = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     };
//                     setCurrentLocation(userLocation); // Update to user's current location
//                 },
//                 (error) => {
//                     console.error("Error fetching location: ", error);
//                 }
//             );
//         } else {
//             console.error("Geolocation not supported by this browser.");
//         }
//     }, []);

//     // Set the bounds for Singapore
//     const singaporeBounds = new props.google.maps.LatLngBounds(
//         { lat: 1.15, lng: 103.594 },  // Southwest of Singapore
//         { lat: 1.4772, lng: 104.114 }  // Northeast of Singapore
//     );

//     // Recenter the map if dragged outside bounds
//     const handleDragEnd = () => {
//         if (mapRef.current) {
//             const map = mapRef.current.map;
//             const currentBounds = map.getBounds();

//             if (!singaporeBounds.intersects(currentBounds)) {
//                 map.fitBounds(singaporeBounds); // Reset map back to Singapore bounds
//             }
//         }
//     };

//     // Recenter the map if zoomed outside allowed area
//     const handleZoomChanged = () => {
//         if (mapRef.current) {
//             const map = mapRef.current.map;

//             if (!singaporeBounds.contains(map.getCenter())) {
//                 map.fitBounds(singaporeBounds); // Reset map back to Singapore bounds
//             }
//         }
//     };

//     return (
//         <React.Fragment>
//             <div className="page-content" style={styles.pageContent}>
//                 <Container fluid={true} style={styles.container}>
//                     <Row style={styles.row}>
//                         <Col lg={12} style={styles.col}>
//                             <Card style={styles.card}>
//                                 <CardBody style={styles.cardBody}>
//                                     <CardTitle style={styles.cardTitle}>Live Map</CardTitle>

//                                     <div
//                                         id="gmaps-markers"
//                                         className="gmaps"
//                                         style={styles.mapContainer}
//                                         role="application"
//                                         aria-label="Google Map showing marker with radar pulse"
//                                     >
//                                         <Map
//                                             google={props.google}
//                                             zoom={12} 
//                                             style={styles.mapStyles}
//                                             initialCenter={currentLocation}  
//                                             bounds={singaporeBounds}
//                                             onDragend={handleDragEnd}  // Handle map dragging
//                                             onZoom_changed={handleZoomChanged}  // Handle zoom changes
//                                             ref={mapRef}  // Map reference for controlling bounds
//                                         >
//                                             {/* Marker at user's current location */}
//                                             <Marker position={currentLocation} />

//                                             {/* Radar Circle on the map */}
//                                             <Circle
//                                                 center={currentLocation}
//                                                 radius={5000} // Radar radius in meters
//                                                 strokeColor="transparent"
//                                                 fillColor="rgba(0, 255, 0, 0.2)"  // Light green radar fill
//                                                 fillOpacity={0.3}
//                                             />

//                                             {/* Radar Pulse Animation */}
//                                             <div className="radar-pulse" ref={radarRef}></div>
//                                         </Map>
//                                     </div>
//                                 </CardBody>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </React.Fragment>
//     );
// }


// export default (
//     GoogleApiWrapper({
//         apiKey: "AIzaSyDP9ii7DlTCOixP3WnuMPqojJm3irQoMp8", // Securely load API key from environment variables
//         LoadingContainer: () => (
//             <div style={styles.loadingContainer}>
//                 <div className="spinner-border text-primary" role="status">
//                     <span className="sr-only">Loading...</span>
//                 </div>
//             </div>
//         ),
//         v: "3",
//     })(GoogleMap)
// );





import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import { GoogleApiWrapper, Map, Marker, Circle } from "google-maps-react";
import styled, { keyframes } from 'styled-components';

// Define the pulse animation using styled-components' keyframes
const pulseAnimation = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(0.3);
        opacity: 1;
    }
    50% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0.5;
    }
    100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
    }
`;

// Styled component for Radar Pulse
const RadarPulse = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(0, 255, 0, 0.4);
    pointer-events: none;
    z-index: 2;
    animation: ${pulseAnimation} 2s infinite ease-out;
`;

const GoogleMapComponent = (props) => {
    const [currentLocation, setCurrentLocation] = useState({ lat: 1.3521, lng: 103.8198 });  // Default to Singapore center
    const [error, setError] = useState(null);
    const pulseRef = useRef(null);
    const mapRef = useRef(null);

    // Define the bounds for Singapore
    const singaporeBounds = new props.google.maps.LatLngBounds(
        { lat: 1.15, lng: 103.594 },  // Southwest of Singapore
        { lat: 1.4772, lng: 104.114 }  // Northeast of Singapore
    );

    useEffect(() => {
        document.title = "Live Map | Glamco - Admin Dashboard";

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setCurrentLocation(userLocation); // Update to user's current location
                },
                (error) => {
                    console.error("Error fetching location: ", error);
                    setError("Unable to retrieve your location.");
                }
            );
        } else {
            console.error("Geolocation not supported by this browser.");
            setError("Geolocation is not supported by your browser.");
        }
    }, []);

    useEffect(() => {
        if (mapRef.current && props.google) {
            const map = mapRef.current.map;

            const updatePulsePosition = () => {
                const projection = map.getProjection();
                if (projection) {  // Check if projection is available
                    const point = projection.fromLatLngToPoint(new props.google.maps.LatLng(currentLocation));
                    const scale = Math.pow(2, map.getZoom());
                    const pixelPosition = {
                        x: point.x * scale,
                        y: point.y * scale
                    };

                    // Update the pulse position to match the marker's pixel position
                    if (pulseRef.current) {
                        pulseRef.current.style.top = `${pixelPosition.y}px`;
                        pulseRef.current.style.left = `${pixelPosition.x}px`;
                    }
                }
            };

            // Make sure map is loaded and projection is available before updating position
            props.google.maps.event.addListenerOnce(map, 'idle', updatePulsePosition);

            // Update pulse position when map is dragged or zoomed
            map.addListener('zoom_changed', updatePulsePosition);
            map.addListener('dragend', updatePulsePosition);
        }
    }, [currentLocation, props.google]);

    // Recenter the map if dragged outside bounds
    const handleDragEnd = () => {
        if (mapRef.current) {
            const map = mapRef.current.map;
            const currentBounds = map.getBounds();

            if (!singaporeBounds.intersects(currentBounds)) {
                map.fitBounds(singaporeBounds); // Reset map back to Singapore bounds
            }
        }
    };

    return (
        <React.Fragment>
            <div className="page-content" style={styles.pageContent}>
                <Container fluid={true} style={styles.container}>
                    <Row style={styles.row}>
                        <Col lg={12} style={styles.col}>
                            <Card style={styles.card}>
                                <CardBody style={styles.cardBody}>
                                    <CardTitle style={styles.cardTitle}>Live Map</CardTitle>

                                    <div
                                        id="gmaps-markers"
                                        className="gmaps"
                                        style={styles.mapContainer}
                                        role="application"
                                        aria-label="Google Map showing marker with radar pulse"
                                    >
                                        <Map
                                            google={props.google}
                                            zoom={12}
                                            style={styles.mapStyles}
                                            initialCenter={currentLocation}
                                            bounds={singaporeBounds}
                                            onDragend={handleDragEnd}
                                            ref={mapRef}
                                        >
                                            {/* Marker at user's current location */}
                                            <Marker
                                                position={currentLocation}
                                                icon={{
                                                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                                                }}
                                            />

                                            {/* Radar Circle on the map */}
                                            <Circle
                                                center={currentLocation}
                                                radius={5000}
                                                strokeColor="transparent"
                                                fillColor="rgba(0, 255, 0, 0.4)"  // Increase radar circle opacity
                                                fillOpacity={0.4}
                                            />
                                        </Map>

                                        {/* Radar Pulse Animation */}
                                        <RadarPulse ref={pulseRef} />
                                        {/* Display error message if any */}
                                        {error && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    backgroundColor: 'rgba(255, 0, 0, 0.8)',
                                                    color: '#fff',
                                                    padding: '10px 20px',
                                                    borderRadius: '5px',
                                                    zIndex: '3',
                                                }}
                                            >
                                                {error}
                                            </div>
                                        )}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

// Define inline styles (you can keep these or transition to styled-components for more scalability)
const styles = {
    pageContent: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
    },
    row: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
    },
    col: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
    },
    card: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        border: 'none',
        boxShadow: 'none',
    },
    cardBody: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
    },
    cardTitle: {
        padding: '20px',
        margin: '0',
        borderBottom: '1px solid #eaeaea',
    },
    mapContainer: {
        flex: 1,
        position: 'relative',
    },
    mapStyles: {
        width: '100%',
        height: '100%',
    },
};

// Export the component wrapped with GoogleApiWrapper
export default GoogleApiWrapper({
    apiKey: "AIzaSyDP9ii7DlTCOixP3WnuMPqojJm3irQoMp8",
    LoadingContainer: () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ),
    v: "3",
})(GoogleMapComponent);

