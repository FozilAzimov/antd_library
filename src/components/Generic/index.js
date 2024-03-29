import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";

function Generic() {
  const location = useLocation();
  return (
    <Container>
      <h1>Generic {location.pathname} coming soon!</h1>
    </Container>
  );
}

export default Generic;
