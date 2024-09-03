// ./src/components/App.js
import React from "react";
import Box from "./Box";
import Div from "./Div";

import { TextContext } from "../context";

const App = function App() {
  return (
    <section>
      <Box />
      <TextContext.provider value="sibling">
        <Div />
      </TextContext.provider>
    </section>
  );
};

export default App;
