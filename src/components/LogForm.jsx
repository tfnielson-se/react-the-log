// [<0>]
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./buttons-inputs/Button";

const LogForm = ({ onAddNewLog }) => {
	let formInput = {
		name: "",
		activity: "",
		date: "",
		location: "",
		state: "",
		description: "",
		notes: "",
		likes: 0,
		image: "",
	};

	const history = useHistory();

	const [formData, setFormData] = useState(formInput);
	// console.log("log", formData);
	const { name, activity, date, location, state, description, notes, image } =
		formData;

	// POST
	const handleSubmitLog = (e) => {
		e.preventDefault();
		onAddNewLog(formData);
		// fetch() POST
		fetch("http://localhost:3000/data", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((newLog) => {
				onAddNewLog(newLog);
				history.push("/logs");
			});
	};

	// JSX
	return (
		<div className="formcard">
			<h3> Share your experience with us:</h3>
			<form onSubmit={handleSubmitLog} className="experience-form">
				<label for="pet-select">Choose an activity:</label>
				<br />
				<select
					name="activity"
					id="activity-select"
					onChange={(e) =>
						setFormData({ ...formData, activity: e.target.value })
					}
				>
					<option value="">--Please choose an option--</option>
					<option value="Rafting">Rafting</option>
					<option value="Mountain-Biking">Mountain-Biking</option>
					<option value="Climbing">Climbing</option>
					<option value="Fishing">Fishing</option>
					<option value="Surfing">Surfing</option>
					<option value="Kayaking">Kayaking</option>
				</select>
				<br />
				<label>Date:</label>
				<input
					type="text"
					id="date"
					name="date"
					placeholder="MM/DD/YYYY"
					value={date}
					onChange={(e) =>
						setFormData({ ...formData, date: e.target.value })
					}
				></input>
				<br />
				<label>Location:</label>
				<input
					type="text"
					id="location"
					name="location"
					placeholder="activity's location here..."
					value={location}
					onChange={(e) =>
						setFormData({ ...formData, location: e.target.value })
					}
				></input>
				<br />
				<label>State:</label>
				<select name="state">
					<option value="default">--</option>
					<option value="AL">AL</option>
					<option value="AK">AK</option>
					<option value="AZ">AZ</option>
					<option value="AR">AR</option>
					<option value="CA">CA</option>
					<option value="CO">CO</option>
					<option value="CT">CT</option>
					<option value="DE">DE</option>
					<option value="DC">DC</option>
					<option value="FL">FL</option>
					<option value="GA">GA</option>
					<option value="HI">HI</option>
					<option value="ID">ID</option>
					<option value="IL">IL</option>
					<option value="IN">IN</option>
					<option value="IA">IA</option>
					<option value="KS">KS</option>
					<option value="KY">KY</option>
					<option value="LA">LA</option>
					<option value="ME">ME</option>
					<option value="MD">MD</option>
					<option value="MA">MA</option>
					<option value="MI">MI</option>
					<option value="MN">MN</option>
					<option value="MS">MS</option>
					<option value="MO">MO</option>
					<option value="MT">MT</option>
					<option value="NE">NE</option>
					<option value="NV">NV</option>
					<option value="NH">NH</option>
					<option value="NJ">NJ</option>
					<option value="NM">NM</option>
					<option value="NY">NY</option>
					<option value="NC">NC</option>
					<option value="ND">ND</option>
					<option value="OH">OH</option>
					<option value="OK">OK</option>
					<option value="OR">OR</option>
					<option value="PA">PA</option>
					<option value="RI">RI</option>
					<option value="SC">SC</option>
					<option value="SD">SD</option>
					<option value="TN">TN</option>
					<option value="TX">TX</option>
					<option value="UT">UT</option>
					<option value="VT">VT</option>
					<option value="VA">VA</option>
					<option value="WA">WA</option>
					<option value="WV">WV</option>
					<option value="WI">WI</option>
					<option value="WY">WY</option>
				</select>
				<br />
				<label>Description:</label>
				<textarea
					type="text"
					id="description"
					name="description"
					placeholder="activity's description here..."
					value={description}
					onChange={(e) =>
						setFormData({
							...formData,
							description: e.target.value,
						})
					}
				></textarea>
				<br />
				<label>Notes:</label>
				<textarea
					type="text"
					id="notes"
					name="notes"
					placeholder="activity's notes here..."
					value={notes}
					onChange={(e) =>
						setFormData({ ...formData, notes: e.target.value })
					}
				></textarea>
				<br /> <br />
				<label>Your Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="type your name here..."
					value={name}
					onChange={(e) =>
						setFormData({ ...formData, name: e.target.value })
					}
				/>
				<br />
				<label>Image:</label>
				<input
					type="text"
					id="image"
					name="image"
					placeholder="img url..."
					value={image}
					onChange={(e) =>
						setFormData({ ...formData, image: e.target.value })
					}
				/>
				<br />
				<input
					className="btn btn-success"
					type="submit"
					name="submit"
					id="submit"
				></input>
				<br />
				<br />
			</form>
		</div>
	);
};

export default LogForm;
