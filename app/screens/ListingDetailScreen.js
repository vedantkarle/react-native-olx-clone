import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailScreen() {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<View style={styles.detailContainer}>
				<AppText style={styles.title}>Red jacket for sale</AppText>
				<AppText style={styles.subTitle}>₹3999</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/profile.jpg")}
						title='Vedant Karle'
						subTitle='5 Listings'
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	detailContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	userContainer: {
		marginVertical: 40,
	},
});
