import { useState } from "react";
import "./App.css";

interface Feedback {
	name: string;
	message: string;
}

function App() {
	const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim() || !message.trim()) return;
		const newFeedback: Feedback = { name, message };
		setFeedbacks([...feedbacks, newFeedback]);
		setName("");
		setMessage("");
	};

	return (
		<>
			<h1>Feedback Collector App</h1>
			<div className="container">
				<form onSubmit={handleSubmit} className="feedback-form">
					<label>
						Name:
						<input
							className="w-full p-2 border rounded mt-1"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</label>
					<label>
						Message:
						<textarea
							className="textarea"
							rows={4}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						></textarea>
					</label>
					<button
						type="submit"
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
					>
						Submit Feedback
					</button>
				</form>

				<div className="feedback-list">
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Message</th>
							</tr>
						</thead>
						<tbody>
							{feedbacks.map((fb, index) => (
								<tr key={index}>
									<td>{fb.name}</td>
									<td>{fb.message}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default App;
