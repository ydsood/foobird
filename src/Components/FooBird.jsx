import React, { Component } from "react";
import FooBirdDoo from "./FoodBirdDoo";
import foo from "../images/foo.jpg";
import Emoji from "./Emoji";

export default class FooBird extends Component {
  constructor(props) {
    super(props);
    this.state = { shitCount: 0, cleanUpTriggered: false };
    this.shit = this.shit.bind(this);
    this.cleanOne = this.cleanOne.bind(this);
    this.clean = this.clean.bind(this);
  }

  render() {
    return (
      <div id="foo">
        <img src={foo} alt="The might foo bird" />
        <br />
        <b>Here sits the Foo Bird</b>
        <br />
        <button id="shit" onClick={this.shit}>
          Do Foo Bird Stuff
        </button>
        {this.renderDoo()}
        {this.renderCleaner()}
      </div>
    );
  }

  renderCleaner() {
    if (this.state.shitCount > 0){
      const divStyle = {
          cursor:'pointer'
      };
      return (
        <div onClick={this.clean} style={divStyle}>
          <Emoji symbol="👾" label="alienPoopEater" />
        </div>
      );
    }
  }
  renderDoo() {
    return <div>{Array(this.state.shitCount).fill(<FooBirdDoo />)}</div>;
  }

  shit(params) {
    this.setState({ shitCount: this.state.shitCount + 1 });
  }

  componentDidUpdate() {
    if (this.state.cleanUpTriggered && this.state.shitCount > 0) {
      this.cleanOne();
    } else if (this.state.cleanUpTriggered) {
      this.setState({ cleanUpTriggered: false });
    }
  }

  clean() {
    this.setState({ cleanUpTriggered: true });
  }

  cleanOne() {
    const delayInMilliseconds = 200;
    const scope = this;
    setTimeout(function() {
      scope.setState({ shitCount: scope.state.shitCount - 1 });
    }, delayInMilliseconds);
  }
}
