import { User } from '@firebase/auth'

export type ItemProps = {
	id: string
	name: string
	description: string
	image?: string
	isLastItem?: boolean
}

export type ColumnsCard = {
	description: string
	id: string
	labels: string[]
	name: string
}

export type Column = {
	id: string
	name: string
	columnCards: ColumnsCard[]
}

export type BoardType = {
	id: string
	columns: Column[]
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

export type AddNewCardAPIPayload = {
	currentUser: User
	boardId: string
}
