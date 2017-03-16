import React from "react";
import ReactDOM from "react-dom";
import { Provider } from  "react-redux";
import { store } from "./store/createStore";
import Main from "./components/Main";
import Cards from "./components/Cards";
import { Router, Route, browserHistory } from "react-router";


const App  = () => {
	return (
		<Provider store={ store } >
			<main>
				<Router history={ browserHistory }>
                    <Route component={ Main }>
                        <Route path="/"  component={ Cards } >

                        </Route>
                    </Route>
                </Router>
			</main>
		</Provider>
	)
};

ReactDOM.render( <App />, document.getElementById("root") );