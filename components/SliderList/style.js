import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;

`;
export const ImgButton = styled.TouchableOpacity`
	margin-top: 14px;
	margin-right: 14px;
	margin-left: 14px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Image = styled.Image`
	background-color: #000;
	width: 120px;
	height: 80px;
	border-radius: 8px;
`;
export const Title = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #000;
`;