import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { red } from 'ansi-colors';
import styled from 'styled-components';

const styles = {
  jumbo: {
      background: "red",
      color: "white"
  },
  h1: {
    textSize: 50,
  }
}

function JumboTron() {

    return (
        <Jumbotron style= {styles.jumbo}>

        <Container>
          <h1> Snoopys Clickety Game</h1>
          <p>
            Click on a Snoopy to earn points, but don't click on the same Snoopy more than once or your score resets to zero!
          </p>
        </Container>
      </Jumbotron>

    )
}
export default JumboTron
