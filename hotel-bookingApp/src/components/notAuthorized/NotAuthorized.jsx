import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotAuthorized = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
            <Row className="text-center">
                <Col>
                    <div className="mb-4">
                        <h1 className="display-4 text-danger">Access Denied</h1>
                        <p className="lead">You do not have permission to view this page.</p>
                    </div>
                    <Button variant="secondary" size="lg" onClick={goToHome}>
                        Go to Home Page
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotAuthorized;
