import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

export default function AppPicker({
	icon,
	placeholder,
	items,
	onSelectItem,
	selectedItem,
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons
						name='chevron-down'
						size={20}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType='slide'>
				<Button title='Close' onPress={() => setModalVisible(false)} />
				<FlatList
					data={items}
					keyExtractor={item => item.value.toString()}
					renderItem={({ item }) => (
						<PickerItem
							label={item.label}
							onPress={() => {
								setModalVisible(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},
	placeholder: {
		color: colors.medium,
		flex: 1,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});
