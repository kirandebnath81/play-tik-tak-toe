import React, { useState } from "react";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Col, Row, Card, CardBody, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

const iconsArray = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  const changeIcon = (iconNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (iconsArray[iconNumber] === "empty") {
      iconsArray[iconNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("alreeady filled", { type: "error" });
    }
    checkWinner();
  };

  const reloadGame = () => {
    setIsCross(true);
    setWinMessage("");
    iconsArray.fill("empty");
  };

  const checkWinner = () => {
    if (
      iconsArray[0] !== "empty" &&
      iconsArray[0] === iconsArray[1] &&
      iconsArray[0] === iconsArray[2]
    ) {
      setWinMessage(`${iconsArray[0]} wins`);
    } else if (
      iconsArray[3] !== "empty" &&
      iconsArray[3] === iconsArray[4] &&
      iconsArray[3] === iconsArray[5]
    ) {
      setWinMessage(`${iconsArray[3]} wins`);
    } else if (
      iconsArray[6] !== "empty" &&
      iconsArray[6] === iconsArray[7] &&
      iconsArray[6] === iconsArray[8]
    ) {
      setWinMessage(`${iconsArray[6]} wins`);
    } else if (
      iconsArray[0] !== "empty" &&
      iconsArray[0] === iconsArray[3] &&
      iconsArray[0] === iconsArray[6]
    ) {
      setWinMessage(`${iconsArray[0]} wins`);
    } else if (
      iconsArray[1] !== "empty" &&
      iconsArray[1] === iconsArray[4] &&
      iconsArray[1] === iconsArray[7]
    ) {
      setWinMessage(`${iconsArray[1]} wins`);
    } else if (
      iconsArray[2] !== "empty" &&
      iconsArray[2] === iconsArray[5] &&
      iconsArray[2] === iconsArray[8]
    ) {
      setWinMessage(`${iconsArray[2]} wins`);
    } else if (
      iconsArray[0] !== "empty" &&
      iconsArray[0] === iconsArray[4] &&
      iconsArray[0] === iconsArray[8]
    ) {
      setWinMessage(`${iconsArray[0]} wins`);
    } else if (
      iconsArray[2] !== "empty" &&
      iconsArray[2] === iconsArray[4] &&
      iconsArray[2] === iconsArray[6]
    ) {
      setWinMessage(`${iconsArray[2]} wins`);
    }
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={4} className="offset-md-4">
          {winMessage ? (
            <div className="mx-3 my-3 text-center">
              <h1 className="text-center text-uppercase text-secondary">
                {winMessage}
              </h1>
              <Button className="" onClick={reloadGame}>
                Reload the Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-uppercase text-secondary">
              {isCross ? "cross" : "circle"} turns
            </h1>
          )}
          <div className="grid">
            {iconsArray.map((icon, index) => (
              <Card onClick={() => changeIcon(index)}>
                <CardBody  className="box">
                  <Icon  name={icon}  />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
