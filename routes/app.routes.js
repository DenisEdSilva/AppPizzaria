import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../pages/Home';
import Products from '../pages/Products';
import Infos from '../pages/Infos';
import Perfil from '../pages/Perfil';
import Cart from '../pages/Cart';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes(){
	return(
		<Stack.Navigator>
			<Stack.Screen 
				name="Products"
				component={Products}
			/>
			<Stack.Screen 
				name="Cart"
				component={Cart}
			/>
		</Stack.Navigator>
	)
}

export default function AppRoutes(){
	return (
		<Tab.Navigator screenOptions={{
			headerShown: false,
			tabBarHideOnKeyboard: true,
			tabBarShowLabel: false,
			tabBarActiveTintColor: '#B02311',
			tabBarInactiveTintColor: '#000',

			tabBarStyle: {
				backgroundColor: '#FFF',
				borderTopWidth: 1,
				borderTopColor: 'transparent',
				borderTopStartRadius: 8,
				borderTopEndRadius: 8,
			}
		}}>
			<Tab.Screen 
				name="Home" 
				component={Home} 
				options={{
					tabBarIcon: ({focused, color, size}) => (
						<Ionicons name="home" size={size} color={color} />
					)
				}}	
			/>
			<Tab.Screen 
				name="Requests" 
				component={StackRoutes} 
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name="cart" color={color} size={size} />
					)
				}}	
			/>
			<Tab.Screen 
				name="Infos" 
				component={Infos} 
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name="logo-whatsapp" color={color} size={size} />
					)
				}}	
			/>
			<Tab.Screen 
				name="Perfil" 
				component={Perfil} 
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name="person" color={color} size={size} />
					)
				}}	
			/>
		</Tab.Navigator>
	)
}