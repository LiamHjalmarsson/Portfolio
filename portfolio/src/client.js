import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "bqbhhten",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};
