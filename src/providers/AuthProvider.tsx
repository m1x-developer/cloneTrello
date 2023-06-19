import { signInWithEmailAndPassword, User } from '@firebase/auth'
import React, { createContext } from 'react'
import { auth, db } from '../helpers/firebase'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { PAGES } from '../helpers/pages'
import { useNavigate } from 'react-router-dom'
import { collection, doc, setDoc } from 'firebase/firestore'

export type AuthContextType = {
	currentUser: User | null | undefined
	userLoading: boolean
	createUser: (email: string, password: string) => Promise<void>
	signIn: (email: string, password: string) => Promise<void>
	signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const navigate = useNavigate()
	const [currentUser, userLoading] = useAuthState(getAuth())

	const createUser = async (email: string, password: string) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			)
			const { user } = userCredential

			const newUser = {
				userId: user.uid,
				name: null,
				age: null,
				boards: [],
			}
			await setDoc(doc(collection(db, 'users'), user.uid), newUser)
			navigate(PAGES.ROOT)
		} catch (error) {
			console.error(error)
		}
	}

	const signIn = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password)
			navigate(PAGES.ROOT)
		} catch (error) {
			console.error(error)
		}
	}

	const signOut = async () => {
		try {
			await auth.signOut()
			navigate(PAGES.AUTH)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				userLoading,
				createUser,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
