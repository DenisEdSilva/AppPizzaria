import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { 
	Container ,
	ContainerLogo,
	Logo,
	LogoTitle,
	ContainerForm,
	Title,
	SubTitle,
	Button,
	ButtonText
} from './style'

export default function Welcome(){
	const navigation = useNavigation();

	return (
		<Container>

			<ContainerLogo>
				<Logo 
					animation="flipInY"
					source={require('../../assets/logo.jpg')}
					resizeMode='contain'
				/>

				<LogoTitle>
					RN
					<Text 
						style={{ color: '#000', fontWeight: 'bold', fontStyle: 'italic'}}
					>
							Pizzas
					</Text>
					</LogoTitle>
			</ContainerLogo>

			<ContainerForm delay={600} animation='fadeInUp'>

				<Title>
					VENHA ENCONTRAR AS MELHORES PIZZAS COM OS MELHORES PREÇOS!
				</Title>
				<SubTitle>Acesse agora e aproveite</SubTitle>

				<Button
					onPress={() => navigation.navigate('Login')}
				>
					<ButtonText>Acessar</ButtonText>
				</Button>
				
			</ContainerForm>

		</Container>
	)
}