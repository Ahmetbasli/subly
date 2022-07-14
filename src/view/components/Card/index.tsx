import React, { FC } from "react";
import { useState } from "react";
import ErrorHero from "./ErrorHero";
import Hero from "./Hero";
import Info from "./Info";
import CardProps from "./types";
import styles from "./index.module.css";

const Card: FC<CardProps> = ({ item }) => {
  const { cover, createdAt, languages, name, status, updatedAt } = item;
  const [isHovered, setIsHovered] = useState(false);

  const pickStyle = () => {
    if (status !== "ready" || !isHovered) return;
    return styles.hover;
  };
  const renderHero = () => {
    if (status === "ready") {
      return <Hero isHovered={isHovered} languages={languages} cover={cover} />;
    } else if (status === "error") {
      return <ErrorHero />;
    } else {
      return null;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.container}  ${pickStyle()} `}
    >
      {renderHero()}
      <Info
        updatedAt={updatedAt}
        createdAt={createdAt}
        name={name}
        status={status}
      />
    </div>
  );
};

export default Card;
