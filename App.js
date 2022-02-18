import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import AuthContext from "./app/auth/authContext";
import storage from "./app/auth/storage";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
	const [user, setUser] = useState(null);
	const [isReady, setIsReady] = useState(false);

	const restoreUser = async () => {
		const user = await storage.getUser();
		if (user) setUser(user);
	};

	if (!isReady)
		return (
			<AppLoading
				startAsync={restoreUser}
				onFinish={() => setIsReady(true)}
				onError={e => console.log(e)}
			/>
		);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
