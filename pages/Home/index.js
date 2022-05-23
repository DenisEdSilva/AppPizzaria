import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import {
	Container,
	SliderContainer,
	Slider
} from './style';

import firestore from '@react-native-firebase/firestore'

import Header from '../../components/Header';
import SliderList from '../../components/SliderList';

const { width, height } = Dimensions.get('screen');

const data = [
	{
		id: 1,
		title: 'Quatro Queijos',
		image: require('../../assets/pizzaDoDia.jpg'),
		description: "lorem lorem lorem"
	},
	{
		id: 2,
		title: 'Peperoni',
		image: require('../../assets/peperoni.jpg'),
		description: "lorem lorem lorem"
	},
	{
		id: 3,
		title: 'Quatro Queijos',
		image: require('../../assets/pizzaDoDia.jpg'),
		description: "lorem lorem lorem"
	},
	{
		id: 4,
		title: 'Peperoni',
		image: require('../../assets/peperoni.jpg'),
		description: "lorem lorem lorem"
	},
	{
		id: 5,
		title: 'Quatro Queijos',
		image: require('../../assets/pizzaDoDia.jpg'),
		description: "lorem lorem lorem"
	},
	{
		id: 6,
		title: 'Peperoni',
		image: require('../../assets/peperoni.jpg'),
		description: "lorem lorem lorem"
	},
];

export default function Home() {
	return (
		<Container>
			<Header />
			<SliderContainer>
				<Slider 
					showsHorizontalScrollIndicator={false}
					horizontal
					data={data}
					renderItem={({ item }) => (
						<SliderList 
							data={item}
						/>
					)}					
				/>
			</SliderContainer>
		</Container>
	)
}