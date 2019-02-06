import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
    nav: {
        background: "yellow",
        color: "black", 
        fontSize: 30
    },

}

function NavBar(props) {
    return (
        <Navbar style = {styles.nav}>
            <Navbar.Brand>Snoopys Clickety Game</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <p>Score: {props.score}</p>
                    <p>Top Score: {props.topScore}</p>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar

