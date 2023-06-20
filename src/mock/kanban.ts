export const kanban_mock = [
	{
		id: 'test-desk',
		name: 'Пример доски 1',
		columns: [
			{
				id: '2',
				name: 'Сделать',
				columnCards: [
					{
						id: '3',
						name: 'Написать письмо',
						description: 'Написать письмо с предложением о сотрудничестве',
						labels: ['важно'],
						members: ['4'],
						dueDate: '2021-10-15',
					},
					{
						id: '5',
						name: 'Позвонить клиенту',
						description: 'Позвонить и узнать о их потребностях',
						labels: ['срочно'],
						members: ['6'],
					},
				],
			},
			{
				id: '7',
				name: 'В процессе',
				columnCards: [],
			},
			{
				id: '8',
				name: 'Сделано',
				columnCards: [
					{
						id: '9',
						name: 'Завершить проект',
						description: 'Завершить проект и отправить результат заказчику',
						labels: ['важно'],
						members: ['10'],
						dueDate: '2021-10-31',
					},
				],
			},
		],
	},
]

export const board_mock = [
	{
		id: '2',
		name: 'Первая доска',
		cards: [
			{
				id: '3',
				name: 'Написать письмо',
				description: 'Написать письмо с предложением о сотрудничестве',
				labels: ['важно'],
				members: ['4'],
				dueDate: '2021-10-15',
			},
			{
				id: '5',
				name: 'Позвонить клиенту',
				description: 'Позвонить и узнать о их потребностях',
				labels: ['срочно'],
				members: ['6'],
			},
		],
	},
]
