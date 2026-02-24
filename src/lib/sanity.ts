import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Project, About, SanityImage } from './types';

export const client = createClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
	dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
	apiVersion: '2024-01-01',
	useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
	return builder.image(source);
}

// GROQ queries
export const queries = {
	allProjects: `*[_type == "project"] | order(order asc) {
		_id,
		title,
		"slug": slug.current,
		thumbnail,
		images,
		description,
		year,
		tags
	}`,

	projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
		_id,
		title,
		"slug": slug.current,
		thumbnail,
		images,
		description,
		year,
		tags
	}`,

	about: `*[_type == "about"][0] {
		_id,
		bio,
		skills,
		process
	}`
};

// Placeholder data until Sanity is configured
export const placeholderProjects: Project[] = [
	{
		_id: '1',
		title: 'Titles',
		slug: 'titles',
		thumbnail: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
		images: [],
		description: 'Brand identity and digital experience',
		year: '2025',
		tags: ['Branding', 'Web']
	},
	{
		_id: '2',
		title: 'See You Later',
		slug: 'see-you-later',
		thumbnail: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
		images: [],
		description: 'Editorial design and art direction',
		year: '2025',
		tags: ['Editorial', 'Art Direction']
	},
	{
		_id: '3',
		title: 'No Fear',
		slug: 'no-fear',
		thumbnail: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
		images: [],
		description: 'Campaign and visual identity',
		year: '2024',
		tags: ['Campaign', 'Identity']
	},
	{
		_id: '4',
		title: 'Arturistic',
		slug: 'arturistic',
		thumbnail: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
		images: [],
		description: 'Digital product design',
		year: '2024',
		tags: ['Product', 'UI/UX']
	},
	{
		_id: '5',
		title: 'i-D Magazine',
		slug: 'id-magazine',
		thumbnail: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
		images: [],
		description: 'Digital editorial experience',
		year: '2024',
		tags: ['Editorial', 'Web']
	},
	{
		_id: '6',
		title: 'Micaiah Carter',
		slug: 'micaiah-carter',
		thumbnail: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
		images: [],
		description: 'Portfolio and creative direction',
		year: '2023',
		tags: ['Portfolio', 'Creative Direction']
	}
];
