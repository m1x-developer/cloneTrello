import {
	AddNewBoardAPIPayload,
	DeleteBoardAPIPayload,
	UserCollectionType,
} from '../types'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../helpers/firebase'
import { v4 } from 'uuid'

export const fetchUserById = async (
	userId: string,
): Promise<UserCollectionType> => {
	const userDocRef = doc(db, 'users', userId)
	const userDocSnap = await getDoc(userDocRef)

	if (userDocSnap.exists()) {
		return userDocSnap.data() as UserCollectionType
	}

	throw new Error('User not found')
}

export const addNewBoardAPI = async ({
	currentUser,
	boardValue,
}: AddNewBoardAPIPayload): Promise<void> => {
	try {
		const userDoc = doc(db, 'users', currentUser ? currentUser.uid : '')
		const userSnapshot = await getDoc(userDoc)
		const currentBoards = userSnapshot.data()?.boards || []
		const newBoards = [
			...currentBoards,
			{
				id: v4(),
				name: boardValue,
				lists: [],
			},
		]
		await updateDoc(doc(db, 'users', currentUser.uid), {
			boards: newBoards,
		})
	} catch (error) {
		throw new Error('Не удалось добавить доску')
	}
}

export const deleteBoardAPI = async ({
	currentUser,
	index: id,
}: DeleteBoardAPIPayload): Promise<void> => {
	try {
		const userDoc = doc(db, 'users', currentUser ? currentUser.uid : '')
		const userSnapshot = await getDoc(userDoc)
		const currentData = userSnapshot.data()?.boards || []
		const newData = currentData.filter(
			(_: never, index: number) => index !== id,
		)
		await updateDoc(doc(db, 'users', currentUser.uid), {
			boards: newData,
		})
	} catch (error) {
		throw new Error('Не удалось добавить доску')
	}
}
