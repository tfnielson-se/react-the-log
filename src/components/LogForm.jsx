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
		image: "https://cdn.britannica.com/06/234806-050-49A67E27/SPAM-can.jpg",
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
		<div className="flex justify-center max-w-sm shadow-2xl bg-gray-400 mx-20 my-5">
			<form onSubmit={handleSubmitLog} className="card-body gap-0">
			<h3 className="pt-2"> New Log 🪵</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text text-black">Activity</span>
					</label>
					<select
						name="activity"
						id="activity"
						className="input input-bordered"
						onChange={(e) =>
							setFormData({
								...formData,
								activity: e.target.value,
							})
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
				</div>
                <div className="form-control">
					<label className="label">
						<span className="label-text text-black">Date</span>
					</label>
                </div>
				<input
					type="text"
					id="date"
					name="date"
					className="input input-bordered"
					placeholder="MM/DD/YYYY"
					value={date}
					onChange={(e) =>
						setFormData({ ...formData, date: e.target.value })
					}
				></input>
                <div className="form-control">
					<label className="label">
						<span className="label-text text-black">Location</span>
					</label>
				</div>
				<input
					type="text"
					id="location"
					name="location"
					className="input input-bordered"
					placeholder="activity's location here..."
					value={location}
					onChange={(e) =>
						setFormData({ ...formData, location: e.target.value })
					}
				></input>
                <div className="form-control">
					<label className="label">
						<span className="label-text text-black">State</span>
					</label>
				</div>
				<select name="state" className="input input-bordered">
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
                <div className="form-control">
					<label className="label">
						<span className="label-text text-black">Description</span>
					</label>
				</div>
				<textarea
					type="text"
					id="description"
					name="description"
					className="input input-bordered"
					placeholder="activity's description here..."
					value={description}
					onChange={(e) =>
						setFormData({
							...formData,
							description: e.target.value,
						})
					}
				></textarea>
                <div className="form-control">
					<label className="label">
						<span className="label-text text-black">Notes</span>
					</label>
				</div>
				<textarea
					type="text"
					id="notes"
					name="notes"
					className="input input-bordered"
					placeholder="activity's notes here..."
					value={notes}
					onChange={(e) =>
						setFormData({ ...formData, notes: e.target.value })
					}
				></textarea>
                <div className="form-control">
					<label className="label">
						<span className="label-text text-black">Name</span>
					</label>
				</div>
				<input
					type="text"
					id="name"
					name="name"
					className="input input-bordered"
					placeholder="type your name here..."
					value={name}
					onChange={(e) =>
						setFormData({ ...formData, name: e.target.value })
					}
				/>
                <div className="form-control">
					<label className="label">
						<span className="label-text text-black">Username</span>
					</label>
				<input
					type="text"
					id="image"
					name="image"
					className="input input-bordered"
					placeholder="img url..."
					value={image}
					onChange={(e) =>
						setFormData({ ...formData, image: e.target.value })
					}
				/>
                </div>
                <br />
                <div className="form-control">
				<input
					className="btn btn-success"
					type="submit"
					name="submit"
					id="submit"
				></input>
                </div>
			</form>
		</div>
	);
};

export default LogForm;
