import type { Collections } from '@nuxt/content'

export type Size = 'lg' | 'sm';

export type ButtonVariant = 'primary' | 'outline' | 'ghost'

export type ButtonType = 'button' | 'submit' | 'reset'

export type HeaderTheme = 'light' | 'dark'

export type Placement = 'right' | 'center' | 'left'

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

export interface SocialLink {
	name: string;
	href: string;
	icon: string;
};

export interface Link {
	name: string;
	sectionId: string;
};

export interface Image {
    src: string
    alt: string
}

export type Project = Collections['projects']

export type Background = Collections['background']

export type Technology = Collections['technologies']
