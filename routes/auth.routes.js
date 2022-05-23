import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/Login';
import AppRoutes from './app.routes';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="Login" component={SignIn} />
		</Stack.Navigator>
	)
}