import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabBarButton from "../components/TabBarButton";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name={routes.FEED}
				component={FeedNavigator}
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => (
						<TabBarButton color={color} size={size} text='Feed' icon='home' />
					),
				}}
			/>
			<Tab.Screen
				name={routes.LISTING_EDIT}
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarShowLabel: false,
					tabBarButton: () => (
						<NewListingButton
							onPress={() => navigation.navigate("ListingEdit")}
						/>
					),
					headerShown: false,
				})}
			/>
			<Tab.Screen
				name={routes.ACCOUNT}
				component={AccountNavigator}
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => (
						<TabBarButton
							color={color}
							size={size}
							text='Account'
							icon='account'
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
