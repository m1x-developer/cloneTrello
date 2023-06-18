import firebase from 'firebase/compat'
import { firebaseConfig } from '../../config/config'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

firebase.initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getFirestore()
