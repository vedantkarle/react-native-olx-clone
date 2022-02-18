import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async authToken => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.error(error);
	}
};

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.error(error);
	}
};

const removeToken = async () => {
	try {
		return await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.error(error);
	}
};

const getUser = async () => {
	const token = await getToken();
	return token ? jwtDecode(token) : null;
};

export default {
	storeToken,
	getUser,
	removeToken,
	getToken,
};
