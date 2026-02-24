export interface Project {
	_id: string;
	title: string;
	slug: string;
	thumbnail: SanityImage;
	images: SanityImage[];
	description: string;
	year: string;
	tags: string[];
}

export interface SanityImage {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
	alt?: string;
}

export interface About {
	_id: string;
	bio: string;
	skills: string[];
	process: string;
}
