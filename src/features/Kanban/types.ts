import { User } from '@firebase/auth'

export type ItemProps = {
	id: string
	name: string
	description: string
	image?: string
	isLastItem?: boolean
}

export type Cardtem = {
	description: string
	id: string
	labels: string[]
	name: string
}

export type ListItem = {
	id: string
	name: string
	cards: Cardtem[]
}

export type BoardType = {
	id: string
	lists: ListItem[]
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
