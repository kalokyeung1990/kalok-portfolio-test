export default {
	name: 'about',
	title: 'About',
	type: 'document',
	fields: [
		{
			name: 'bio',
			title: 'Bio',
			type: 'text',
			rows: 6
		},
		{
			name: 'skills',
			title: 'Skills / Services',
			type: 'array',
			of: [{ type: 'string' }]
		},
		{
			name: 'process',
			title: 'Process Description',
			type: 'text',
			rows: 4
		}
	]
};
