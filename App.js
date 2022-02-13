import { useState } from "react";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

export default function App() {
	const [imageUris, setImageUris] = useState([]);

	const handleAdd = uri => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemove = uri => {
		setImageUris(imageUris.filter(imgUri => imgUri !== uri));
	};

	return (
		<Screen>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
		</Screen>
	);
}
