import { useFormikContext } from "formik";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, width, ...otherProps }) {
	const { setFieldTouched, errors, touched, setFieldValue, values } =
		useFormikContext();

	return (
		<>
			<AppTextInput
				{...otherProps}
				onChangeText={text => setFieldValue(name, text)}
				value={values[name]}
				width={width}
				onBlur={() => setFieldTouched(name)}
			/>
			{errors[name] && touched[name] && <ErrorMessage error={errors[name]} />}
		</>
	);
}
