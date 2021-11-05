import React, { useState } from "react";
import App from "./screens/App";
import * as Font from "expo-font";

class MainApp extends React.Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      Inder: require("./assets/fonts/Inder-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null; 
    }
    return <App />;
  }
}

export default MainApp;
