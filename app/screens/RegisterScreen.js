import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import auth from "../api/auth";
import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import ErrorMessage from "../components/Form/ErrorMessage";
import SubmitButton from "../components/Form/SubmitButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
	const [error, setError] = useState(false);
	const { login } = useAuth();

	const handleSubmit = async ({ name, email, password }) => {
		const result = await auth.register(name, email, password);
		if (!result.ok) {
			if (result.data) setError(result.data.error);
			else {
				setError("Unexpected error occurred");
				console.log(result);
			}
			return;
		}

		const { data: token } = await auth.login(email, password);
		login(token);
	};

	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{ name: "", email: "", password: "" }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}>
				{error && <ErrorMessage error={error} />}
				<AppFormField
					autoCorrect={false}
					icon='account'
					name='name'
					placeholder='Name'
				/>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='email'
					keyboardType='email-address'
					name='email'
					placeholder='Email'
					textContentType='emailAddress'
				/>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='lock'
					name='password'
					placeholder='Password'
					secureTextEntry
					textContentType='password'
				/>
				<SubmitButton title='Register' />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
