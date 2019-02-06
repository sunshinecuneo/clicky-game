import React, { Component } from 'react';
import NavBar from "../NavBar";
import JumboTron from "../JumboTron";
import "./style.css";
import snoopy1 from "./assets/images/snoopy1.jpeg";
import snoopy2 from "./assets/images/snoopy2.jpg";
import snoopy3 from "./assets/images/snoopy3.jpg";
import snoopy4 from "./assets/images/snoopy4.jpg";
import snoopy5 from "./assets/images/snoopy16.jpg";
import snoopy6 from "./assets/images/snoopy6.jpeg";
import snoopy7 from "./assets/images/snoopy7.jpeg";
import snoopy8 from "./assets/images/snoopy8.jpeg";
import snoopy9 from "./assets/images/snoopy9.jpeg";
import snoopy10 from "./assets/images/snoopy10.jpeg";
import snoopy11 from "./assets/images/snoopy11.png";
import snoopy12 from "./assets/images/snoopy12.jpeg";

const styles = {
    imgContainer: {
        background: "blue",
        marginLeft: 19,
    }
}


function ImageCard(props) {
    return (
        <div className="card">
            <div className="img-container" style= {styles.imgContainer}>
                <img className="images" alt={props.id} src={props.image} onClick={() => props.handleClick(props.id)} />
            </div>
            <span onClick={() => props.removeFriend(props.id)} className="remove"></span>
        </div>
    );
}

const imagesArray = [
    {
        "id": 1,
        "image": snoopy1
    },
    {
        "id": 2,
        "image": snoopy2
    },
    {
        "id": 3,
        "image": snoopy3
    },
    {
        "id": 4,
        "image": snoopy4
    },
    {
        "id": 5,
        "image": snoopy5
    },
    {
        "id": 6,
        "image": snoopy6
    },
    {
        "id": 7,
        "image": snoopy7
    },
    {
        "id": 8,
        "image": snoopy8
    },
    {
        "id": 9,
        "image": snoopy9
    },
    {
        "id": 10,
        "image": snoopy10
    },
    {
        "id": 11,
        "image": snoopy11
    },
    {
        "id": 12,
        "image": snoopy12
    },

]

class Game extends Component {
    state = {
        images: imagesArray,
        initialScore: 0,
        clicked: [],
        topScore: 0
    }

    winning = () => {
        this.setState({ topScore: this.state.initialScore });
        if (this.state.initialScore === 12) {
            alert("Woof!")
            this.setState({
                 initialScore: 0, clicked: [], images: this.state.images.sort(function (a, b) {
                    return 0.5 - Math.random();
                })
            })
        }
    }
    picClick = id => {
        console.log(id)
        if (this.state.clicked.includes(id)) {
            this.setState({ initialScore: 0, clicked: [], images: this.state.images.sort(function (a, b) {
                return 0.5 - Math.random() })});
            alert("Wrongo!");
        } else {
            this.state.clicked.push(id)
            console.log(this.state.clicked);
            this.setState({ initialScore: this.state.initialScore + 1, images: this.state.images.sort(function (a, b) {
                return 0.5 - Math.random() }) }, this.winning);
        }
    }

        render() {
            return (
                <>
                    <NavBar score={this.state.initialScore}
                    topScore= {this.state.topScore} />
                    <JumboTron />

                    <div className="contianer" id="imagesGrid" >
                        <div className="row" id="rowOne">
                            {
                                this.state.images.map(image => (
                                    <ImageCard
                                        id={image.id}
                                        key={image.id}
                                        image={image.image}
                                        handleClick={this.picClick}
                                    />
                                ))
                            }
                        </div>
                    </div >
                </>
            )
        }
    }


    export default Game;
