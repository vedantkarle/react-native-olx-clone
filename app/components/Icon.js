import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function Icon({
	name,
	size,
	iconColor = "#fff",
	backgroundColor = "#000",
}) {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
		</View>
	);
}
