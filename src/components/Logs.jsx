// [<0>]
import { useState } from "react";
import LogCard from "./LogCard";

const Logs = ({ logs, logsUpdate }) => {
	const [filteredLogs, setFilteredLogs] = useState(logs);
	const [filter, setFilter] = useState("");
	// console.log(logs)
	console.log(filter);
	console.log(filteredLogs);

	if (filteredLogs === [])
		return (<h1>Loading...</h1>), setFilteredLogs(logs);

	if (filter !== "") {
		const filtered = logs.filter((log) => log.activity === filter);
		setFilteredLogs(filtered);
		setFilter("");
	}

	if (filter === "All") return setFilteredLogs(logs);

	const displayLogs = filteredLogs.map((log) => (
		<LogCard key={log.id} id={log.id} log={log} logsUpdate={logsUpdate} />
	));

	return (
		<>
			<br />
			<p className="text-white">Filter by Activity:</p>
            <div className="pt-2">
			<select
				className="input input-bordered bg-gray-200"
				name="activity"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			>
				<option value="choose-one">Select One</option>
				<option value="Rafting">Rafting</option>
				<option value="Mountain-Biking">Mountain-Biking</option>
				<option value="Climbing">Climbing</option>
				<option value="Fishing">Fishing</option>
				<option value="Surfing">Surfing</option>
				<option value="Kayaking">Kayaking</option>
				<option value="All">All</option>
			</select>
            </div>
			<br />
			<br />
			<div className="logs">{displayLogs}</div>
		</>
	);
};

export default Logs;
