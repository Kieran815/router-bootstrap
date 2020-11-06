import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import banner from "../Assets/inner_page_bnr.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${banner});
    background-size: cover;
    background-position: center;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => {
  return(
    <React.Fragment>
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Learning React-Router-Dom and Styled Components</h1>
          <p>I'm In It, Now...npm</p>
        </Container>
      </Jumbo>
    </Styles>
  </React.Fragment>
  );
};

export default Jumbotron;
