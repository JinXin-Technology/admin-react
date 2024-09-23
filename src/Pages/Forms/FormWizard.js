import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  TabContent,
  TabPane,
  Progress,
  NavLink,
  NavItem,
} from "reactstrap";
import Dropzone from "react-dropzone";
import classnames from "classnames";
import { Link } from "react-router-dom";

const FormWizard = () => {
  document.title = "Drones | Glamco - Admin Dashboard";
  const [activeTab, setactiveTab] = useState(1);
  const [activeTabwiz, setoggleTabwiz] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [passedStepswiz, setpassedStepswiz] = useState([1]);
  const [selectedFiles, setSelectedFiles] = useState([]); // To store uploaded files

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  function toggleTabwiz(tab) {
    if (activeTabwiz !== tab) {
      var modifiedSteps = [...passedStepswiz, tab];
      if (tab >= 1 && tab <= 4) {
        setoggleTabwiz(tab);
        setpassedStepswiz(modifiedSteps);
      }
    }
  }

  // Handle accepted files
  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectedFiles(files);
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row>
            {/* Drone Registration Wizard */}
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Drone Registration</h4>
                  <div id="basic-pills-wizard" className="twitter-bs-wizard">
                    <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                      <NavItem className={classnames({ active: activeTab === 1 })}>
                        <NavLink
                          data-toggle="tab"
                          className={classnames({ active: activeTab === 1 })}
                          onClick={() => toggleTab(1)}
                        >
                          <span className="step-number">01</span>
                          <span className="step-title" style={{ paddingLeft: "10px" }}>
                            Drone Details
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ active: activeTab === 2 })}>
                        <NavLink
                          data-toggle="tab"
                          className={classnames({ active: activeTab === 2 })}
                          onClick={() => toggleTab(2)}
                        >
                          <span className="step-number">02</span>
                          <span className="step-title" style={{ paddingLeft: "10px" }}>
                            Company Document
                          </span>
                        </NavLink>
                      </NavItem>

                      <NavItem className={classnames({ active: activeTab === 3 })}>
                        <NavLink
                          data-toggle="tab"
                          className={classnames({ active: activeTab === 3 })}
                          onClick={() => toggleTab(3)}
                        >
                          <span className="step-number">03</span>
                          <span className="step-title" style={{ paddingLeft: "10px" }}>
                            Operator Details
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ active: activeTab === 4 })}>
                        <NavLink
                          data-toggle="tab"
                          className={classnames({ active: activeTab === 4 })}
                          onClick={() => toggleTab(4)}
                        >
                          <span className="step-number">04</span>
                          <span className="step-title" style={{ paddingLeft: "10px" }}>
                            Confirm Detail
                          </span>
                        </NavLink>
                      </NavItem>
                    </ul>

                    {/* Progress Bar for Drone Registration */}
                    <div id="bar" className="mt-4">
                      <div className="mb-4">
                        <Progress value={25 * activeTab} color="success" animated />
                      </div>
                    </div>

                    <TabContent activeTab={activeTab} className="twitter-bs-wizard-tab-content">
                      <TabPane tabId={1}>
                        <Form>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-firstname-input12">Drone name</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input12"
                                  placeholder="Enter the Drone Name"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-lastname-input22">Serial Number</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-lastname-input22"
                                  placeholder="Enter the Serial Number"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-phoneno-input32">Model</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-phoneno-input32"
                                  placeholder="Enter the Model"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </TabPane>

                      {/* Company Document with File Upload */}
                      <TabPane tabId={2}>
                        <div>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-pancard-input52">Company Name</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-pancard-input52"
                                    placeholder="Enter the Company Name"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-vatno-input62">Company Address</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-vatno-input62"
                                    placeholder="Enter the Company Address"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-cstno-input72">Company Contact No.</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-cstno-input72"
                                    placeholder="Enter the Company No."
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-servicetax-input82">LOA Letter No.</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-servicetax-input82"
                                    placeholder="Enter the LOA Letter No."
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            {/* File Upload for Company Documents */}
                            <Row>
                              <Col lg="12">
                                <FormGroup className="mb-3">
                                  <Label>Upload company documents for the AI assistant to review and automatically fill in the relevant details into the text box.</Label>
                                  <Dropzone
                                    onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                      <div className="dropzone">
                                        <div
                                          className="dz-message needsclick"
                                          {...getRootProps()}
                                        >
                                          <input {...getInputProps()} />
                                          <div className="mb-3">
                                            <i className="display-4 text-muted mdi mdi-cloud-upload-outline"></i>
                                          </div>
                                          <h4>Drop files here or click to upload.</h4>
                                        </div>
                                      </div>
                                    )}
                                  </Dropzone>

                                  {/* Display selected file previews */}
                                  <div className="dropzone-previews mt-3">
                                    {selectedFiles.map((f, i) => (
                                      <Card
                                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                        key={i}
                                      >
                                        <div className="p-2">
                                          <Row className="align-items-center">
                                            <Col className="col-auto">
                                              <img
                                                data-dz-thumbnail=""
                                                height="80"
                                                className="avatar-sm rounded bg-light"
                                                alt={f.name}
                                                src={f.preview}
                                              />
                                            </Col>
                                            <Col>
                                              <p className="mb-0">
                                                <strong>{f.name}</strong>
                                              </p>
                                              <p className="text-muted mb-0">
                                                {f.formattedSize}
                                              </p>
                                            </Col>
                                          </Row>
                                        </div>
                                      </Card>
                                    ))}
                                  </div>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane>

                      <TabPane tabId={3}>
                        <div>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-namecard-input112">
                                    Operator Name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input112"
                                    placeholder="Enter the Operator Name"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label>Classification Type</Label>
                                  <select className="form-select">
                                    <option>Known</option>
                                    <option>Friendly</option>
                                  </select>
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                 <FormGroup className="mb-3">
                                   <Label htmlFor="basicpill-expiration-input132">
                                   Registration Date
                                   </Label>
                                   <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-expiration-input132"
                                    placeholder="Enter the Registation Date"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane>

                      <TabPane tabId={4}>
                        <div className="row justify-content-center">
                          <Col lg="12">
                            <div className="text-center">
                              <div className="mb-4">
                                <i className="mdi mdi-check-circle-outline text-success display-4" />
                              </div>
                              <div>
                                <h5>Confirm Detail</h5>
                                <p className="text-muted">
                                  If several languages coalesce, the grammar of the resulting
                                </p>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </TabPane>
                    </TabContent>

                    <ul className="pager wizard twitter-bs-wizard-pager-link">
                      <li
                        className={activeTab === 1 ? "previous disabled me-2" : "previous me-2"}
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTab(activeTab - 1);
                          }}
                        >
                          Previous
                        </Link>
                      </li>
                      <li className={activeTab === 4 ? "next disabled" : "next"}>
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTab(activeTab + 1);
                          }}
                        >
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>

            {/* Schedule Classification Wizard */}
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Schedule Classification</h4>
                  <div id="progrss-wizard" className="twitter-bs-wizard">
                    <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                      <NavItem
                        className={classnames({
                          active: activeTabwiz === 1,
                        })}
                      >
                        <NavLink
                          className={classnames({ active: activeTabwiz === 1 })}
                          onClick={() => toggleTabwiz(1)}
                        >
                          <span className="step-number">01</span>
                          <span className="step-title" style={{ paddingLeft: "10px" }}>
                            Drone Details
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className={classnames({ active: activeTabwiz === 2 })}
                      >
                        <NavLink
                          className={classnames({ active: activeTabwiz === 2 })}
                          onClick={() => toggleTabwiz(2)}
                        >
                          <span className="step-number">02</span>
                          <span className="step-title" style={{ paddingLeft: "10px" }}>
                            Company Document
                          </span>
                        </NavLink>
                      </NavItem>

                      <NavItem
                        className={classnames({ active: activeTabwiz === 3 })}
                      >
                        <NavLink
                          className={classnames({ active: activeTabwiz === 3 })}
                          onClick={() => toggleTabwiz(3)}
                        >
                          <span className="step-number">03</span>
                          <span className="step-title" style={{ paddingLeft: "10px" }}>
                            Operator Details
                          </span>
                        </NavLink>
                      </NavItem>

                      <NavItem
                        className={classnames({ active: activeTabwiz === 4 })}
                      >
                        <NavLink
                          className={classnames({ active: activeTabwiz === 4 })}
                          onClick={() => toggleTabwiz(4)}
                        >
                          <span className="step-number">04</span>
                          <span className="step-title" style={{ paddingLeft: "10px" }}>
                            Confirm Detail
                          </span>
                        </NavLink>
                      </NavItem>
                    </ul>

                    {/* Progress Bar for Schedule Classification */}
                    <div id="bar" className="mt-4">
                      <div className="mb-4">
                        <Progress value={25 * activeTabwiz} color="success" animated />
                      </div>
                    </div>

                    {/* Schedule Classification Tab Content */}
                    <TabContent activeTab={activeTabwiz} className="twitter-bs-wizard-tab-content">
                      <TabPane tabId={1}>
                        <Form>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-firstname-input12">Drone name</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input12"
                                  placeholder="Enter the Drone Name"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-lastname-input22">Serial Number</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-lastname-input22"
                                  placeholder="Enter the Serial Number"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-phoneno-input32">Model</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-phoneno-input32"
                                  placeholder="Enter the Model"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </TabPane>

                      <TabPane tabId={2}>
                        <Form>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-pancard-input52">Company Name</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-pancard-input52"
                                  placeholder="Enter the Company Name"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-vatno-input62">Company Address</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-vatno-input62"
                                  placeholder="Enter the Company Address"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-cstno-input72">Company Contact No.</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-cstno-input72"
                                  placeholder="Enter the Company No."
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-servicetax-input82">LOA Letter No.</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-servicetax-input82"
                                  placeholder="Enter the LOA Letter No."
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </TabPane>

                      <TabPane tabId={3}>
                        <Form>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-namecard-input112">
                                  Operator Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-namecard-input112"
                                  placeholder="Enter the Operator Name"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="6">
                              <FormGroup className="mb-3">
                                <Label>Classification Type</Label>
                                <select className="form-select">
                                  <option>Known</option>
                                  <option>Friendly</option>
                                </select>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Col lg="6">
                                 <FormGroup className="mb-3">
                                   <Label htmlFor="basicpill-expiration-input132">
                                     Classification Start Date
                                   </Label>
                                   <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-expiration-input132"
                                    placeholder="Enter the Classification Start Date"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                 <FormGroup className="mb-3">
                                   <Label htmlFor="basicpill-expiration-input132">
                                   Classification End Date
                                   </Label>
                                   <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-expiration-input132"
                                    placeholder="Enter the Classification End Date"
                                  />
                                </FormGroup>
                              </Col>
                          
                        </Form>
                      </TabPane>

                      <TabPane tabId={4}>
                        <div className="row justify-content-center">
                          <Col lg="12">
                            <div className="text-center">
                              <div className="mb-4">
                                <i className="mdi mdi-check-circle-outline text-success display-4" />
                              </div>
                              <div>
                                <h5>Confirm Detail</h5>
                                <p className="text-muted">
                                  If several languages coalesce, the grammar of the resulting
                                </p>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </TabPane>
                    </TabContent>

                    <ul className="pager wizard twitter-bs-wizard-pager-link">
                      <li
                        className={activeTabwiz === 1 ? "previous disabled me-2" : "previous me-2"}
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTabwiz(activeTabwiz - 1);
                          }}
                        >
                          Previous
                        </Link>
                      </li>
                      <li className={activeTabwiz === 4 ? "next disabled" : "next"}>
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTabwiz(activeTabwiz + 1);
                          }}
                        >
                          Next
                        </Link>
                      </li>
                    </ul>
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

export default FormWizard;
