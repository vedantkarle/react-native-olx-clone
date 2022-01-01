import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

export default function AppText({ children, style }) {
	return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		...Platform.select({
			ios: {
				fontSize: 20,
				fontFamily: "Avenir",
			},
			android: {
				fontSize: 16,
				fontFamily: "Roboto",
			},
		}),
	},
});
