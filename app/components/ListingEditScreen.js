import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import AppFormPicker from "./AppFormPicker";
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
		label: "Furniture",
		value: 1,
	},
	{
		label: "Clothing",
		value: 2,
	},
	{
		label: "Cameras",
		value: 3,
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
				/>
				<AppFormPicker
					item={categories}
					name='category'
					placeholder='Category'
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
