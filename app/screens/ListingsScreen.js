import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import listings from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";

export default function ListingsScreen({ navigation }) {
	const {
		data,
		error,
		loading,
		request: loadListings,
	} = useApi(listings.getListings);

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
				data={data}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={item.price}
						imageUrl={item.images[0].url}
						thumbnail={item.images[0].thumbnailUrl}
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
