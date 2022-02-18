import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useAuth from "../auth/useAuth";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
		targetScreen: "Messages",
	},
];

export default function AccountScreen({ navigation }) {
	const { user, setUser, logout } = useAuth();

	return (
		<View style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user?.name}
					subTitle={user?.email}
					image={require("../assets/profile.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={item => item.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							ImageComponent={
								<Icon
									name={item.icon.name}
									size={40}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<ListItem
				title='Log Out'
				ImageComponent={
					<Icon name='logout' backgroundColor='#ffe66d' size={40} />
				}
				onPress={() => logout()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
		flex: 1,
	},
	container: {
		marginVertical: 20,
	},
});
