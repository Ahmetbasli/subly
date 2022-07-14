import React from "react";
import "src/view/global-styles/global.css";
import "src/view/global-styles/customizeBoostrap.scss";
import api from "src/infrastructure/services/api";
import { MediaItems } from "src/infrastructure/services/api/MediaItems/types";
import useFetch from "src/view/hooks/useFetch";
import Card from "src/view/components/Card";
import Col from "react-bootstrap/Col";
import GridContainer from "src/view/components/GridContainer";
import styles from "src/view/index.module.css";

function App() {
  const { data: mediaItems } = useFetch<MediaItems | null>(
    api.MediaItems.getAll
  );

  const renderCards = () => {
    if (mediaItems === null) return;

    return mediaItems.map((item) => (
      <Col key={item.id}>
        <Card item={item} />
      </Col>
    ));
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
      <GridContainer xs={1} md={2} lg={3}>
        {renderCards()}
      </GridContainer>
    </>
  );
}

export default App;
