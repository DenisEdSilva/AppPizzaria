import React, { useContext } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import * as Animatable from 'react-native-animatable'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { AuthContext } from '../context/auth';

export default function Routes() {
	const { signed, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<View 
				style={{
					flex: 1,
					backgroundColor: '#43130A',
				}}
			>
				<View style={{ flex: 2, backgroundColor: '#42130A', justifyContent: 'center', alignItems: 'center' }}>
					<Animatable.Image
						animation="flipInY" 
						style={{ width: '95%', height: '75%', borderRadius: 25 }}
						source={require('../assets/logo.jpg')}
						resizeMode='contain'
					/>
				</View>

				<Animatable.View 
				animation="fadeInUp"
				style ={{
					flex: 1,
					backgroundColor: '#fff',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					paddingLeft: '5%',
					paddingRight: '5%',
					alignItems: 'center',
					justifyContent: 'center',
					marginLeft: 6,
					marginRight: 6

				}}>
					<Text style={{
						color: '#000',
						fontSize: 20,
						fontWeight: 'bold'
					}}>
						Estamos buscandos seus dados
					</Text>
					<Text style={{
						color: '#000',
						fontSize: 20,
						fontWeight: 'bold'
					}}>
						aguende um momento...
					</Text>
					<ActivityIndicator 
						style={{ marginTop: 25 }}
						size={50}
						color="#c92f2a"
					/>
				</Animatable.View>
			</View>
		)
	}

	return (
		signed ? <AppRoutes /> : <AuthRoutes />
	)
} 
