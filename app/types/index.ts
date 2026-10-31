import type { Collections } from '@nuxt/content'

export interface SocialLink {
	name: string;
	href: string;
	icon: string;
};

export interface Link {
	name: string;
	sectionId: string;
};

export type Size = 'large' | 'small';

export type ButtonVariant = 'primary' | 'outline' | 'ghost'

export type ButtonType = 'button' | 'submit' | 'reset'

export interface Seo {
    title?: string
    description?: string
    ogImage?: string
    noIndex?: boolean
}

export interface Button {
    label: string
    variant?: ButtonVariant
    type?: ButtonType
    to?: string
}

export type Category = 'frontend' | 'backend' | 'database' | 'tool'

export type BackgroundType = 'work' | 'education'

export type Project = Collections['projects']

export interface Service {
    title: string
    description: string
}
