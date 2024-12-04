import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './HomePageSection.css';

const HomePageSection = () => {
  const tiles = [
    { title: "Latest Songs", icon: "bi-music-note-beamed" },
    { title: "Arijit Special", icon: "bi-person-lines-fill" },
    { title: "Gym Songs", icon: "bi-bullseye" },
    { title: "Old Songs", icon: "bi-vinyl" },
    { title: "Sad Songs", icon: "bi-emoji-frown" },
    { title: "English Songs", icon: "bi-flag" },
    { title: "Alan Walker Specials", icon: "bi-headset" },
    { title: "Rap Songs", icon: "bi-mic" },
  ];

  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <h1 className="text-center mb-4">Explore Music</h1>
        <Row className="gy-4">
          {tiles.map((tile, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="bg-dark text-white border-0 tile-card d-flex align-items-center justify-content-center cursor-pointer">
                <Card.Body className="text-center cursor-pointer">
                  <i className={`bi ${tile.icon} tile-icon mb-3 cursor-pointer`}                  
                  ></i>
                  <Card.Title className="tile-title">{tile.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePageSection;
