import React, { Component } from "react";
import Spinner from "./Spinner";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  //   //the very fist function to be called before anything else.
  //   constructor(props) {
  //     //class component is extending or borrowing functinality from react components base class,
  //     //  this base class react.component has a constructor of its own that goes through
  //     //some amount of setup react component for us. when we define a construtor function
  //     //inside of app class, we are overwriting or replacing the constructor function that
  //     //is inside the base class.  we want to make sure the parents construtor function gets called.
  //     //we can super.
  //     super(props);
  //     this.state = { lat: null, errMessage: "" };
  //   }
  //you don't have to use constructor functin, you can do the follwoing

  state = { lat: null, errMessage: "" };

  componentDidMount() {
    console.log("my compoent was rendered ");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),

      (err) => this.setState({ errMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("just updated, re-rendered");
  }

  //render method, return jsx. React says we have to define render

  render() {
    return (
      <div>
        {!this.state.errMessage && !this.state.lat && <Spinner />}
        {this.state.errMessage && <p>{this.state.errMessage}</p>}

        {this.state.lat && <SeasonDisplay lat={this.state.lat} />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
