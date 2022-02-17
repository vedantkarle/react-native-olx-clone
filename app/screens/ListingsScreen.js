import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function ListingsScreen({ navigation }) {
	const [listings, setListings] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const loadListings = async () => {
		setLoading(true);
		const response = await listingsApi.getListings();
		if (!response || !response.ok) {
			setLoading(false);
			return setError(true);
		}

		setError(false);
		setListings(response.data);
		setLoading(false);
	};

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<>
					<AppText>Couldn't fetch listings</AppText>
					<AppButton title='Retry' onPress={loadListings} color='primary' />
				</>
			)}
			<ActivityIndicator visible={loading} />
			<FlatList
				data={listings}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={item.price}
						imageUrl={item.images[0].url}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 8,
		backgroundColor: colors.light,
	},
});
