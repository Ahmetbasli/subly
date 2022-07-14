import React from "react";
import "src/view/global-styles/global.css";
import "src/view/global-styles/customizeBoostrap.scss";
import api from "src/infrastructure/services/api";
import { MediaItems } from "src/infrastructure/services/api/MediaItems/types";
import useFetch from "src/view/hooks/useFetch";
import Card from "src/view/components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "src/view/index.module.css";

function App() {
  const { data: mediaItems } = useFetch<MediaItems | null>(
    api.MediaItems.getAll
  );

  const renderCards = () => {
    if (mediaItems === null) return;

    const cards = mediaItems.map((item) => (
      <Col key={item.id}>
        <Card item={item} />
      </Col>
    ));

    return (
      <Container className={styles.container}>
        <Row xs={1} md={2} lg={3}>
          {cards}
        </Row>
      </Container>
    );
  };
  return (
    <>
      <header className={styles.header}>
        <h1>Welcome to </h1>
        <img
          src="https://uploads-ssl.webflow.com/61e81392cdf29f010bb62bdc/61ebf06b9f28244a2c0f9122_logo-light.svg"
          loading="eager"
          width="110"
          height="50"
          alt="logo"
          className={styles.logo}
        ></img>
      </header>
      {renderCards()}
    </>
  );
}

export default App;
