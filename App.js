import { useState } from "react";
import ListingEditScreen from "./app/components/ListingEditScreen";

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

	return <ListingEditScreen />;
}
