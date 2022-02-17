import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TabBarButton = ({ icon, color, text, size }) => {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons name={icon} color={color} size={size} />
			<Text style={{ color }}>{text}</Text>
		</View>
	);
};

export default TabBarButton;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});
