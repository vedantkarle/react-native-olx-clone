import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiry = 5;

const store = async (key, value) => {
	try {
		const item = {
			value,
			timestamp: Date.now(),
		};

		await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
	} catch (error) {
		console.error(error);
	}
};

const isExpired = item => {
	const now = Date.now();
	const storedTime = moment(item.timestamp);

	return now.diff(storedTime, "minutes") > expiry;
};

const get = async key => {
	try {
		const value = await AsyncStorage.getItem(prefix + key);
		const item = JSON.parse(value);

		if (!item) return null;

		if (isExpired(item)) {
			await AsyncStorage.removeItem(prefix + key);
			return null;
		}

		return item.value;
	} catch (error) {
		console.error(error);
	}
};

export default {
	store,
	get,
};
