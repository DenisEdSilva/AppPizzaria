import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

import { TextInputMask } from 'react-native-masked-text'
 
export const Container = styled.SafeAreaView`
	flex: 1;
  background-color: #53130A;
`;

export const HeaderArea = styled(Animatable.View)`
	margin-top: 14%;
	margin-bottom: 8%;
	margin-left: 4%;
	margin-right: 4%;
`;

export const HeaderText = styled.Text`
	font-size: 28px;
  font-weight: bold;
  color: #FFF;
`;
export const AuthArea = styled(Animatable.View)`
	flex: 1;
	background-color: #FFF;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	margin-right: 1%;
	margin-left: 1%;
`;
export const InputText = styled.Text`
	font-size: 20px;
	margin-top: 28px; 
	color: #222;
	margin-left: 4%;
	margin-right: 4%;	
`;
export const Input = styled.TextInput.attrs({
	placeholderTextColor: "#BBB"
})`
	margin-left: 4%;
	margin-right: 4%;
	border-bottom-width: 1px;
	height: 40px;
	margin-bottom: 12px;
	font-size: 16px;
	color: #222;
`;

export const Button = styled.TouchableOpacity`
	background-color: #B02311;
	width: 92%;
	border-radius: 4px;
	padding: 8px;
	margin-top: 14px;
	justify-content: center;
	align-items: center;
	margin-left: 4%;
`;
export const ButtonText = styled.Text`
	color: #FFF;
	font-size: 18px;
	font-weight: bold;
`;
export const RegistryBtn = styled.TouchableOpacity`
	margin-top: 6px;
	align-self: center;
`;
export const RegistryText = styled.Text`
	color: #A1A1A1;
`;

