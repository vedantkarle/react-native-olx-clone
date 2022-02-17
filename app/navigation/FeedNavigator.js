import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListingsScreen from "../screens/ListingsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.LISTINGS}
				component={ListingsScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={routes.LISTING_DETAILS}
				component={ListingDetailScreen}
			/>
		</Stack.Navigator>
	);
};

export default FeedNavigator;
