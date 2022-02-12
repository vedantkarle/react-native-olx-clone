import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import AppFormPicker from "./AppFormPicker";
import CategoryPickerItem from "./CategoryPickerItem";
import AppForm from "./Form/AppForm";
import AppFormField from "./Form/AppFormField";
import SubmitButton from "./Form/SubmitButton";
import Screen from "./Screen";

const validationSchema = Yup.object({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
});

const categories = [
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "Furniture",
		value: 1,
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "Cars",
		value: 2,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "Cameras",
		value: 3,
	},
	{
		backgroundColor: "#26de81",
		icon: "cards",
		label: "Games",
		value: 4,
	},
	{
		backgroundColor: "#2bcbba",
		icon: "shoe-heel",
		label: "Clothing",
		value: 5,
	},
	{
		backgroundColor: "#45aaf2",
		icon: "basketball",
		label: "Sports",
		value: 6,
	},
	{
		backgroundColor: "#4b7bec",
		icon: "headphones",
		label: "Movies & Music",
		value: 7,
	},
	{
		backgroundColor: "#a55eea",
		icon: "book-open-variant",
		label: "Books",
		value: 8,
	},
	{
		backgroundColor: "#778ca3",
		icon: "application",
		label: "Other",
		value: 9,
	},
];

export default function ListingEditScreen() {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
				}}
				onSubmit={val => console.log(val)}
				validationSchema={validationSchema}>
				<AppFormField maxLength={255} name='title' placeholder='Title' />
				<AppFormField
					keyboardType='numeric'
					maxLength={8}
					name='price'
					placeholder='Price'
					width='30%'
				/>
				<AppFormPicker
					items={categories}
					name='category'
					PickerItemComponent={CategoryPickerItem}
					placeholder='Category'
					width='50%'
					numberOfColumns={3}
				/>
				<AppFormField
					maxLength={255}
					multiline
					name='description'
					numberOfLines={3}
					placeholder='Description'
				/>
				<SubmitButton title='Post' />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
});
