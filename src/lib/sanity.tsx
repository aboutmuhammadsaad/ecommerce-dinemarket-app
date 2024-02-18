import { createClient } from "next-sanity";
// import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    apiVersion: '2024-02-18',
    dataset: 'products',
    projectId: 'dugavptz',
    useCdn: false,
})


// const builder= imageUrlBuilder(client);

// export function urlFor(source:any){
//     return builder.image(source);
// }