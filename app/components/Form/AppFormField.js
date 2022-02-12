import { useFormikContext } from "formik";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, width, ...otherProps }) {
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

	return (
		<>
			<AppTextInput
				{...otherProps}
				onChangeText={handleChange(name)}
				width={width}
				onBlur={() => setFieldTouched(name)}
			/>
			{errors[name] && touched[name] && <ErrorMessage error={errors[name]} />}
		</>
	);
}
