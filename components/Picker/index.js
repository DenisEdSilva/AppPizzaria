import React, { useState, useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { AuthContext } from '../../context/auth';

export default function Picker() {
	const { } = useContext(AuthContext);

	const placeholder = {
		label: 'Pressione para selecionar o tipo de conta',
		value: null,
		color: '#000',
	}

	return (
		<RNPickerSelect
			placeholder={placeholder}
			touchableWrapperProps	
			style={{
				inputIOS: {
					fontSize: 20,
					color: '#000',
					width: '95%',
					alignSelf: 'center',
				},
				inputAndroid: {
					fontSize: 20,
					color: '#000',
					width: '95%',
					alignSelf: 'center',
				}
			}}
			items={[
				{key: '1', label: 'administrador', value: 'administrador'},
				{key: '2', label: 'consumidor', value: 'consumidor'},
			]}
			onValueChange={(value) => setUserType(value)}
		/>
	)
}