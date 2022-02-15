import { useFormikContext } from "formik";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	const handleAdd = uri => {
		setFieldValue(name, [...values[name], uri]);
	};

	const handleRemove = uri => {
		setFieldValue(
			name,
			values[name].filter(imgUri => imgUri !== uri),
		);
	};

	return (
		<>
			<ImageInputList
				imageUris={values[name]}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			{errors[name] && (
				<ErrorMessage error={errors[name]} visible={touched[name]} />
			)}
		</>
	);
};

export default FormImagePicker;
