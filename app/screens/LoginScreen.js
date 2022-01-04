import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={values => console.log(values)}>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							autoCapitalize='none'
							icon='email'
							placeholder='Email'
							autoCorrect={false}
							keyboardType='email-address'
							textContentType='emailAddress'
							onChangeText={handleChange("email")}
						/>
						<AppTextInput
							autoCapitalize='none'
							icon='lock'
							placeholder='Password'
							autoCorrect={false}
							secureTextEntry
							textContentType='password'
							onChangeText={handleChange("password")}
						/>
						<AppButton title='Login' onPress={handleSubmit} color='primary' />
					</>
				)}
			</Formik>
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
});
