import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
	Alert,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import colors from "../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
	const selectImage = async () => {
		try {
			const res = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});

			if (!res.cancelled) onChangeImage(res.uri);
		} catch (error) {
			alert("something went wrong");
		}
	};

	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{
					text: "Yes",
					onPress: () => onChangeImage(null),
				},
				{
					text: "No",
				},
			]);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						name='camera'
						size={40}
						color={colors.medium}
					/>
				)}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		height: 100,
		width: 100,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ImageInput;
