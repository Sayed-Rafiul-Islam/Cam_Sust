import { createClient } from "next-sanity";

export const getBlogs = async ()  => {

    const client = createClient({
        projectId : "f89xy3cs",
        dataset : "production",
        apiVersion : "2023-11-05",
        useCdn : true
    })  

    const blogs = await client.fetch(`*[_type == "blogs"]{
        _id,
        _createdAt,
        title,
        "slug" : slug.current,
        author,
        category,
        poster,
        content
    }`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return blogs 
}

// --------------------------------------------------------------------------------------------

export const getBlog = async (slug)  => {

    const client = createClient({
        projectId : "f89xy3cs",
        dataset : "production",
        apiVersion : "2023-11-05",
        useCdn : true
    })  

    const blogs = await client.fetch(`*[_type == "blogs" && slug.current == "${slug}" ][0]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return blogs 
}
// --------------------------------------------------------------------------------------------

export const getBooks = async ()  => {

    const client = createClient({
        projectId : "f89xy3cs",
        dataset : "production",
        apiVersion : "2023-11-05",
        useCdn : true
    })  

    const books = await client.fetch(`*[_type == "books"]{
        _id,
        serial,
        title,
        author,
        publisher,
        _createdAt
    }`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return books 
}

// --------------------------------------------------------------------------------------------

export const getProducts = async ()  => {

    const client = createClient({
        projectId : "f89xy3cs",
        dataset : "production",
        apiVersion : "2023-11-05",
        useCdn : true
    })  

    const products = await client.fetch(`*[_type == "products"]{
        _id,
        name,
        "slug" : slug.current,
        images[0],
        currency,
        price
    }`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return products 
}

// --------------------------------------------------------------------------------------------

export const getAboutUs = async ()  => {

    const client = createClient({
        projectId : "f89xy3cs",
        dataset : "production",
        apiVersion : "2023-11-05",
        useCdn : true
    })  

    const aboutUs = await client.fetch(`*[_type == "about"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return aboutUs 
}
// --------------------------------------------------------------------------------------------

export const getProduct = async (slug)  => {

    const client = createClient({
        projectId : "f89xy3cs",
        dataset : "production",
        apiVersion : "2023-11-05",
        useCdn : true
    })  

    const product = await client.fetch(`*[_type == "products" && slug.current == "${slug}" ][0]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return product 
}