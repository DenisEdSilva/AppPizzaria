import React, { createContext, useState , useEffect } from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [userType, setUserType] = useState(null);

	const [loadingAuth, setLoadingAuth] = useState(false); 

	useEffect( () => {
		async function loadStorage() {
			const storageUser = await AsyncStorage.getItem('@userProfile');

			if(storageUser) {
				setUser(JSON.parse(storageUser))
				setLoading(false);
			}
			setLoading(false);
		}
		loadStorage();
	}, [])

	async function signUp(name, email, password, unMaskedPhone) {
		setLoadingAuth(true);

		await auth().createUserWithEmailAndPassword(email, password)
		.then( async (value) => {
			let uid = value.user.uid;
			await firestore().collection('usuarios')
			.doc(uid).set({
				nome: name,
				phone: unMaskedPhone,
				createdAt: new Date(),
			})
			.then(() => {
				let data = {
					uid: uid,
					nome: name,
					email: value.user.email,
					phone: unMaskedPhone
				}

				setUser(data);
				storageUser(data);
				setLoadingAuth(false);
			})
		})
		.catch((err) => {
			console.log(err);
			setLoadingAuth(false);
		})
	}

	async function signIn(email, password) {
		setLoadingAuth(true);

		await auth().signInWithEmailAndPassword(email, password)
		.then( async (value) => {
			let uid = value.user.uid;

			const userProfile = await firestore().collection('usuarios')
			.doc(uid).get();
			
			let data ={
				uid: uid,
				nome: userProfile.data().nome,
				phone: userProfile.data().phone,
				email: value.user.email
			};

			setUser(data);
			storageUser(data);
			setLoadingAuth(false);
		})
		.catch((err) => {
			console.log(err);
			setLoadingAuth(false);
		})
	}

	async function signOut() {
		await auth().signOut();
		await AsyncStorage.clear()
		.then(() => {
			setUser(null);
		})
	}

	async function storageUser( data ) {
		await AsyncStorage.setItem('@userProfile', JSON.stringify(data))
	}

	async function handleUserType( userType ) {
		await firestore().collection('userTypes')
		.doc(uid).set({
			userType: userType,
		})
		.then(() => {
			let type = {
				userType: userType
			}
			setUserType(type);
			console.log(type);
		})
	}
	
  return (
		<AuthContext.Provider value={{ signed: !!user, signUp, signIn, signOut, loading, loadingAuth, handleUserType }}>
			{children}
		</AuthContext.Provider>
	);
};