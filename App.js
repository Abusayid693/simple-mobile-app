import React, { useState } from "react";
import App from "./screens/App"
import {AppLoading} from "expo"
import * as Font from "expo-font";




// const getFonts = ()=>
//   Font.loadAsync({
//     'Inder':require('./assets/fonts/Inder-Regular.ttf')
//   })

// const MainApp = ()=>{

//     const [fonts,setFonts] = useState(false)

//     return(
//         <App/>
//     )
// }

class MainApp extends React.Component {
    state = {
      fontLoaded: false,
    };
  
    componentDidMount() {
      this.loadAssetsAsync();
    }
  
    async loadAssetsAsync() {
      await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        'Inder':require('./assets/fonts/Inder-Regular.ttf')
      });
      this.setState({ fontLoaded: true });
    }
  
    render() {
      if (!this.state.fontLoaded) {
        return null; // render some progress indicator
      }
      return  <App/>;
    }
  }

export default MainApp