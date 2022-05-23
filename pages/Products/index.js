import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
// import { 
// 	Container 
// } from './style'

export default function Requests(){
	const navigation = useNavigation();
	return (
		<View>
			<Text>Tela dos Produtos</Text>
			<Button 
				title="Carrinho"
				onPress={() => navigation.navigate('Cart')}
			/>
		</View>
	)
}