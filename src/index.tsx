import AppRouter from "@routes/index.tsx";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {AppContainer} from "react-hot-loader";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
