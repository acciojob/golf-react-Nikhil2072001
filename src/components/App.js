import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: 0 },
        };
    }

    buttonClickHandler = () => {
        this.setState({ renderBall: true });
    };

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.key === "ArrowRight" || event.keyCode === 39) {
            this.setState(prevState => ({
                ballPosition: {
                    left: prevState.ballPosition.left + 5
                }
            }));
        }
    };

    render() {
        return (
            <div className="playground">
                {this.state.renderBall ? (
                    <div
                        className="ball"
                        style={{
                            position: 'absolute',
                            left: this.state.ballPosition.left,
                            top: '100px' // You can adjust the top position as needed
                        }}
                    />
                ) : (
                    <button className="start" onClick={this.buttonClickHandler}>
                        Start
                    </button>
                )}
            </div>
        );
    }
}

export default App;
