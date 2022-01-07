import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDelAction from "../components/ListItemDelAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
	{
		id: 1,
		title: "Vedant Karle",
		description: "Hey is this avaliable?",
		image: require("../assets/profile.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium lacinia risus. Donec id nisl id diam commodo imperdiet et eget metus. Vivamus velit metus, feugiat at suscipit facilisis, mattis ut tellus. Sed vel facilisis ligula, at luctus mi. Aliquam erat volutpat. Sed ac felis ut nulla porta elementum quis sed nibh. Integer hendrerit tellus ac elit feugiat, ut mollis urna finibus. Nulla mauris lacus, ultricies tincidunt facilisis sed, fringilla efficitur dui. Proin tempus vehicula rhoncus. Suspendisse convallis non lectus et tempus. Donec nibh ex, consequat in risus non, varius varius mauris. Nullam varius enim diam, at molestie felis lacinia vitae. Fusce lacus erat, finibus at placerat a, cursus ut mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
