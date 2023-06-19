import { UserCollectionType } from '../types'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../helpers/firebase'

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
