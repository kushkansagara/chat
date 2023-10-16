import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
    return (
        <Row md={6} className="home__bg" >
        <Col style={{backgroundImage: "../assets/mainim.jpg" , backgroundColor: "rgba(0, 0, 0, 0.5)"}} md={12} className="d-flex flex-direction-column mt-10 align-items-flex-start justify-content-center">
            <div>
                <h1 style={{color:"black", textAlign:"center", marginTop:"250px"}}>Share the world with your friends</h1>
                <p style={{color:"rgb(46, 46, 46)", textAlign:"center"}}>Chat App lets you connect with the world</p>
                <div className="text-center">
                <LinkContainer to="/chat">
                    <Button className="bt">
                        Get Started <i className="fas fa-comments home-message-icon"></i>
                    </Button>
                </LinkContainer>
</div>
            </div>
        </Col>
        
    </Row>
    );
}

export default Home;
