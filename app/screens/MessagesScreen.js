import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDelAction from "../components/ListItemDelAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/profile.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/profile.jpg"),
	},
];

export default function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = message => {
		setMessages(messages.filter(m => m.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						renderRightActions={() => (
							<ListItemDelAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: "T2",
							description: "D2",
							image: require("../assets/profile.jpg"),
						},
					]);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
