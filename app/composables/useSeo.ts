const DEFAULT_SITE_NAME = 'Liam Hjalmarsson'

const DEFAULT_DESCRIPTION = 'Liam Hjalmarsson fullstackutvecklare med fokus på moderna webblösningar, UX och prestanda.'

const DEFAULT_IMAGE = '/images/me.png'

export function useSeo(input: Seo = {}): void {
    const route = useRoute()

    const { siteUrl } = useRuntimeConfig().public

    const title = input.title ?? DEFAULT_SITE_NAME

    const description = input.description ?? DEFAULT_DESCRIPTION

    const ogImage = new URL(input.ogImage ?? DEFAULT_IMAGE, siteUrl).href

    const canonicalUrl = new URL(route.path, siteUrl).href

    useSeoMeta({
        title,
        description,
        robots: input.noIndex ? 'noindex, nofollow' : undefined,

        ogTitle: title,
        ogDescription: description,
        ogType: 'website',
        ogUrl: canonicalUrl,
        ogImage,

        twitterCard: 'summary_large_image',
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: ogImage,
    })

    useHead({
        htmlAttrs: {
            lang: 'sv',
        },
        link: [
            {
                rel: 'canonical',
                href: canonicalUrl,
            },
        ],
    })
}
