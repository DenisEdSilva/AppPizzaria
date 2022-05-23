import React, { useState, useContext, useRef } from 'react';
import { View, ActivityIndicator } from 'react-native';

import Picker from '../../components/Picker';

import { TextInputMask } from 'react-native-masked-text';

import { 
	Container,
	HeaderArea,
	HeaderText,
	AuthArea,
	InputText,
	Input,
	Button,
	ButtonText,
	RegistryBtn,
	RegistryText
} from './style'

import { AuthContext } from '../../context/auth';
import { setSelectedLog } from 'react-native/Libraries/LogBox/Data/LogBoxData';

export default function SignIn(){
	const [login, setLogin] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nome, setNome] = useState('');
	const [phone, setPhone] = useState('');
	const [userTypes, setUserTypes] = useState(null);

	const phoneRef = useRef(null);
	
	const { signUp, signIn, loadingAuth } = useContext(AuthContext);

	function toggleLogin() {
		setLogin(!login);
		setNome('');
		setEmail('');
		setPassword('');
		setPhone('');
	}

	async function handleSignIn() {
		if (email === '' || password === '' || password.length < 6) {
			alert('Preencha todos os campos corretamente')
			return;
		}

		await signIn(email, password)
	}

	async function handleSignUp() {
		if (nome === '' || email === '' || password === '' || password.length < 6 ) {
			alert('Preencha todos os campos corretamente para concluir o cadastro')
			return;
		}

		let unMaskedPhone = phoneRef?.current.getRawValue();
		await signUp(nome, email, password, unMaskedPhone)
	}

	if ( login ) {
		return (
			<Container>
				<HeaderArea animation="fadeInLeft" delay={500} >
					<HeaderText>Bem Vindo(a)</HeaderText>
				</HeaderArea>

				<AuthArea animation="fadeInUp">

					<InputText>Email</InputText>
					<Input 
						placeholder='email@email.com'
						value={email}
						autoCapitalize='none'
						onChangeText={(text) => setEmail(text)}
					/>

					<InputText>Senha</InputText>
					<Input 
						placeholder='Contenha pelo menos 6 caracteres'
						secureTextEntry={true}
						autoCapitalize='none'
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>

					<Button
						onPress={handleSignIn}
					>
						{loadingAuth ? (
							<ActivityIndicator size={27} color='#fff' />
						) : (
						<ButtonText>Acessar</ButtonText> 
						)}						
					</Button>

					<RegistryBtn
						onPress={toggleLogin}
					>
						<RegistryText>Não possui uma conta? clique aqui</RegistryText>
					</RegistryBtn>

				</AuthArea>
			</Container>
		)
	}

	return (
		<Container>
			<HeaderArea animation="fadeInLeft" delay={500}>
				<HeaderText>Bem Vindo(a)</HeaderText>
			</HeaderArea>

			<AuthArea animation="fadeInUp">

				<InputText>Nome</InputText>
				<Input 
					placeholder='Seu nome completo'
					value={nome}
					onChangeText={(text) => setNome(text)}
				/>

				<InputText>Email</InputText>
				<Input 
					placeholder='email@email.com'
					autoCapitalize='none'
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>

				<InputText>Senha</InputText>
				<Input 
					placeholder='Contenha pelo menos 6 caracteres'
					secureTextEntry={true}
					autoCapitalize='none'
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>

				<InputText>Telefone</InputText>
				<TextInputMask
					style={{
						marginLeft: '4%',
						marginRight: '4%',
						borderBottomWidth: 1,
						height: 40,
						marginBottom: 12,
						fontSize: 16,
						color: '#222',
					}}
					type={'cel-phone'}
					options={{
						maskType: 'BRL',
						withDDD: true,
						dddMask: '(99) '
					}}
					value={phone}
					onChangeText={text => setPhone(text)}
					ref={phoneRef}
				/>

				<Picker />

				<Button
					onPress={() => handleSignUp()}	
				>
					{loadingAuth ? (
							<ActivityIndicator size={27} color='#fff' />
						) : (
						<ButtonText>Cadastrar</ButtonText> 
					)}
				</Button>

				<RegistryBtn
					onPress={toggleLogin}
				>
					<RegistryText>Ja possui uma conta? clique aqui</RegistryText>
				</RegistryBtn>

			</AuthArea>
		</Container>
	)
}