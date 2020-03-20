import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
