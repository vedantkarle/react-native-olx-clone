import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import AppText from "./AppText";

export default function ListItem({
	image,
	ImageComponent,
	title,
	subTitle,
	onPress,
	renderRightActions,
}) {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
					<View style={styles.container}>
						{ImageComponent}
						{image && <Image style={styles.image} source={image} />}
						<View style={styles.detailContainer}>
							<AppText style={styles.title}>{title}</AppText>
							{subTitle && (
								<AppText style={styles.subTitle}>{subTitle}</AppText>
							)}
						</View>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		alignItems: "center",
		backgroundColor: colors.white,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	detailContainer: {
		marginLeft: 10,
		justifyContent: "center",
	},
	title: {
		fontWeight: "500",
	},
	subTitle: {
		color: colors.medium,
	},
});
