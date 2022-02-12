import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "./AppPicker";
import ErrorMessage from "./Form/ErrorMessage";

export default function AppFormPicker({
	items,
	name,
	PickerItemComponent,
	placeholder,
	width,
	numberOfColumns,
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				onSelectItem={item => setFieldValue(name, item)}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
				numberOfColumns={numberOfColumns}
			/>
			{errors[name] && (
				<ErrorMessage error={errors[name]} visible={touched[name]} />
			)}
		</>
	);
}
