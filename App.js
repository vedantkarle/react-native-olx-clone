import { useState } from "react";
import MessagesScreen from "./app/screens/MessagesScreen";

const categories = [
	{
		label: "Furniture",
		value: 1,
	},
	{
		label: "Clothing",
		value: 2,
	},
	{
		label: "Cameras",
		value: 3,
	},
];

export default function App() {
	const [category, setCategory] = useState("");

	return <MessagesScreen />;
}
