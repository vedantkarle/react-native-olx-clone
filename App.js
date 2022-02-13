import { useState } from "react";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";

export default function App() {
	const [imageUri, setImageUri] = useState(null);

	return (
		<Screen>
			<ImageInput imageUri={imageUri} onChangeImage={uri => setImageUri(uri)} />
		</Screen>
	);
}
