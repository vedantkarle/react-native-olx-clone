import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";
import AppText from "../components/AppText";
import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import ErrorMessage from "../components/Form/ErrorMessage";
import SubmitButton from "../components/Form/SubmitButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

const validationSchema = Yup.object({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(6).label("Password"),
});

export default function LoginScreen() {
	const [error, setError] = useState(false);
	const { login } = useAuth();

	const handleSubmit = async ({ email, password }) => {
		const result = await auth.login(email, password);
		if (!result.ok) {
			setError(true);
			return;
		}
		setError(false);
		login(result.data);
	};

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<AppText style={styles.loginText}>LOGIN</AppText>
			<AppForm
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{error && <ErrorMessage error='Invalid email or password' />}
				<AppFormField
					autoCapitalize='none'
					icon='email'
					placeholder='Email'
					autoCorrect={false}
					name='email'
				/>
				<AppFormField
					autoCapitalize='none'
					icon='lock'
					placeholder='Password'
					autoCorrect={false}
					secureTextEntry
					textContentType='password'
					name='password'
				/>
				<SubmitButton title='Login' />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
	loginText: {
		alignSelf: "center",
		color: colors.primary,
		fontSize: 30,
		marginTop: 10,
	},
});
