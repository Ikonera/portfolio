import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { Provider } from "jotai";

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")!,
);
