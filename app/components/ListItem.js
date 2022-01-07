import { MaterialCommunityIcons } from "@expo/vector-icons";
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
							<AppText style={styles.title} numberOfLines={1}>
								{title}
							</AppText>
							{subTitle && (
								<AppText style={styles.subTitle} numberOfLines={2}>
									{subTitle}
								</AppText>
							)}
						</View>
						<MaterialCommunityIcons
							color={colors.medium}
							name='chevron-right'
							size={25}
						/>
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
		width: 64,
		height: 64,
		borderRadius: 35,
	},
	detailContainer: {
		marginLeft: 10,
		justifyContent: "center",
		flex: 1,
	},
	title: {
		fontWeight: "500",
		fontSize: 18,
	},
	subTitle: {
		color: colors.medium,
		fontSize: 16,
	},
});
