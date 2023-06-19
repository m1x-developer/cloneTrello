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
