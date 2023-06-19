import { User } from '@firebase/auth'

export type ItemProps = {
	id: string
	name: string
	description: string
	image?: string
	isLastItem?: boolean
}

export type BoardType = {
	id: string
	lists: []
	name: string
}

export type UserCollectionType = {
	age: string | null
	boards: BoardType[]
	name: string | null
	userId: string
}

export type AddNewBoardAPIPayload = {
	currentUser: User
	boardValue: string
}

export type DeleteBoardAPIPayload = {
	currentUser: User
	index: number
}
