export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title', maxLength: 96 },
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alt text', type: 'string' }]
		},
		{
			name: 'images',
			title: 'Gallery Images',
			type: 'array',
			of: [
				{
					type: 'image',
					options: { hotspot: true },
					fields: [{ name: 'alt', title: 'Alt text', type: 'string' }]
				}
			]
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 4
		},
		{
			name: 'year',
			title: 'Year',
			type: 'string'
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }]
		},
		{
			name: 'order',
			title: 'Sort Order',
			type: 'number'
		}
	],
	orderings: [
		{
			title: 'Manual Order',
			name: 'manualOrder',
			by: [{ field: 'order', direction: 'asc' }]
		}
	]
};
