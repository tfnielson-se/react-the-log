// [<0>]
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Logs from "./components/Logs";
import LogForm from "./components/LogForm";

import "./App.css";

function App() {
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/data")
			.then((res) => res.json())
			.then((data) => setLogs(data));
	}, []);

	// console.log(logs);

    // updates like count
	const logsUpdate = (updatedLog) => {
		const updatedListAfterEdit = logs.map((log) => {
			if (log.id === updatedLog.id) {
				return updatedLog;
			} else if (log.id !== updatedLog.id) {
				return log;
			}
		});
        setLogs(updatedListAfterEdit)
	};

    // adds new log from form
    const addNewLog = (newLog) => {
        setLogs([...logs, newLog])
    }

	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/aboutus">
					<AboutUs />
				</Route>
				<Route exact path="/logs">
					<Logs logs={logs} logsUpdate={logsUpdate} />
				</Route>
				<Route path="/logs/new">
					<LogForm onAddNewLog={addNewLog} />
				</Route>
				<Route path="/logs/:id/edit">
            </Route>
			</Switch>
		</div>
	);
}

export default App;
