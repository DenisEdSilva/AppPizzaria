import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
	flex: 1;
	background-color: #fff;
`;
export const ContainerLogo = styled.View`
	flex: 2;
	background-color: #fff;
	justify-content: center;
	align-items: center;
`;
export const Logo = styled(Animatable.Image)`
	width: 133px;
	height: 133px;
	border-radius: 75px;
`;
export const LogoTitle = styled(Animatable.Text)`
	font-size: 34px;
	color: #a02311;
	font-weight: bold;

`;
export const ContainerForm = styled(Animatable.View)`
	flex: 2;
	background-color: #64110A;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding-left: 5%;
	padding-right: 5%;
	flex-direction: column;
	align-items: center;
	margin-left: 6px;
	margin-right: 6px;
`;
export const Title = styled.Text`
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	margin-top: 60px;
	margin-bottom: 12px;
	color: #fff;
`;
export const SubTitle = styled.Text`
	margin-top: 15px;
	font-size: 16px;
	color: #ccc;
`;
export const Button = styled.TouchableOpacity`
	position: absolute;
	background-color: #B02311;
	border-radius: 50px;
	width: 60%;
	height: 16%;
	align-self: center;
	bottom: 15%;
	align-items: center;
	justify-content: center;
`;
export const ButtonText = styled.Text`
	color: #FFF;
	font-size: 18px;
	font-weight: bold;
`;
