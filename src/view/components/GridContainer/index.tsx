import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./index.module.css";
import GridContainerProps from "./types";

const GridContainer: FC<GridContainerProps> = ({ xs, md, lg, children }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row xs={1} md={2} lg={3}>
          {children}
        </Row>
      </Container>
    </div>
  );
};

export default GridContainer;
