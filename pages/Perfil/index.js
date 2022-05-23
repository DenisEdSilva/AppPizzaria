import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/auth';
// import { 
// 	Container 
// } from './style'

export default function Perfil(){
	const { signOut} = useContext(AuthContext)

	async function handleSignOut() {
		await signOut();
	}

	return (
		<View>
			<Text>Tela do Perfil</Text>

			<Button 
				title="Sair do usuario"
				onPress={handleSignOut}
			/>
		</View>
	)
}