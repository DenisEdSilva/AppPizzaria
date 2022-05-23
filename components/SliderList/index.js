import React from 'react';
import { View } from 'react-native';

import { 
	Container,
	ImgButton,
	Image,
	Title
} from './style';

export default function SliderList({ data }) {
	return (
		<Container>
			<ImgButton>
				<Image 
					source={data?.image}
				/>
				<Title>{data?.title}</Title>
			</ImgButton>
		</Container>
	);
}