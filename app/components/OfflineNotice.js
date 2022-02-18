import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const OfflineNotice = () => {
	return (
		<View style={styles.container}>
			<Text>Left</Text>
		</View>
	);
};

export default OfflineNotice;

const styles = StyleSheet.create({
	container: {
		height: 52,
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
		// position: "absolute",
		width: "100%",
		top: Constants.statusBarHeight,
		zIndex: 1,
	},
});
