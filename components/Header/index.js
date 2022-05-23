import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title } from './style';

export default function Header() {
	return (
		<Container>
			<Title>
				RN
				<Text style={{
					color: "#4C4C4C",
					fontStyle: 'italic',
					fontWeight: 'bold',
				}}>
					Pizzas
				</Text>
			</Title>
		</Container>
	);
}