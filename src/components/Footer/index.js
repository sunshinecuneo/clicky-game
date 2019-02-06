import React from 'react';
import Container from 'react-bootstrap/Container';

const styles = {
    foot: {
        textAlign: "center",
        // backgroundColor: "yellow",
        color: "red",
        textSize: 25,
        textAlign: "center",
    }
}

function Footer() {
    return (
        <footer>
            <Container style= {styles.foot}>
                Made By Tiffany
            </Container>
        </footer>
    

    )
}
export default Footer