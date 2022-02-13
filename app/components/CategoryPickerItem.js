import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPressed }) => {
	return (
		<View style={styles.container} onPress={onPressed}>
			<Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 26,
		paddingVertical: 15,
		alignItems: "center",
		width: "33%",
	},
	label: {
		marginTop: 5,
		textAlign: "center",
	},
});

export default CategoryPickerItem;
