// [<0>]
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./buttons-inputs/Button";

const LogCard = ({ log, logsUpdate }) => {
	const {
		id,
		activity,
		name,
		date,
		state,
		location,
		description,
		notes,
		likes,
		image,
	} = log;

	const [count, setCount] = useState(likes);
	//
	const handleLikeCount = () => {
		setCount((count) => (count += 1));
		console.log(log.id);
		fetch(`http://localhost:3000/data/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ likes: likes + 1 }),
		})
			.then((res) => res.json())
			.then((updatedLog) => logsUpdate(updatedLog));
	};

	const editMode = () => {};

	return (
		<div className="card w-96 shadow-xl mb-5">
			<figure>
				<img src={image} alt="Log Image" />
			</figure>
			<div className="card-body">
				<h3 className="card-title">{activity}</h3>
				<hr />
				<span className="italic">Date: {date}</span>
				<span className="italic">Location: {location}</span>
				<span className="italic">State: {state}</span>
				<h4 className="text-xl">Description:</h4>
				<span className="italic"> {description}</span>
				<span className="italic">NOTES: {notes}</span>
				<h4 className="text-lg italic"> - {name}</h4>
			</div>
			<div className="card-actions justify-end">
				<Button
					className="likebtn btn btn-outline"
					textContent={count}
					emoji={"Like 👍"}
					onClick={handleLikeCount}
				/>
				<span> </span>
				<Link to="/logs/:id/edit">
					<Button
						className="editbtn btn btn-outline"
						textContent={"Edit"}
						emoji={"✍️"}
						onClick={editMode}
					/>
				</Link>
			</div>
			<br />
		</div>
	);
};

export default LogCard;
