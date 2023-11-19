import { createClient } from "next-sanity";
const client = createClient({
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset : "production",
    apiVersion : "2023-11-05",
    useCdn : true
}) 

export const getBlogs = async ()  => {

     

    const blogs = await client.fetch(`*[_type == "blogs"]{
        _id,
        _createdAt,
        title,
        "slug" : slug.current,
        author,
        category,
        poster,
        content,
        serial
    }`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return blogs 
}

// --------------------------------------------------------------------------------------------

export const getBlog = async (slug)  => {

     

    const blogs = await client.fetch(`*[_type == "blogs" && slug.current == "${slug}" ][0]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return blogs 
}
// --------------------------------------------------------------------------------------------

export const getBooks = async ()  => {

     

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

export const getProduct = async (slug)  => {

     

    const product = await client.fetch(`*[_type == "products" && slug.current == "${slug}" ][0]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return product 
}

// --------------------------------------------------------------------------------------------

export const getAboutUs = async ()  => {

     

    const aboutUs = await client.fetch(`*[_type == "about"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return aboutUs 
}

// --------------------------------------------------------------------------------------------

export const getAdviers = async ()  => {

     

    const advisers = await client.fetch(`*[_type == "advisers"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return advisers 
}
// --------------------------------------------------------------------------------------------

export const getConstitution = async ()  => {

     

    const constitution = await client.fetch(`*[_type == "constitution"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return constitution 
}
// --------------------------------------------------------------------------------------------

export const getFaq = async ()  => {

     

    const faq = await client.fetch(`*[_type == "faq"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return faq 
}
// --------------------------------------------------------------------------------------------

export const getCamTalks = async ()  => {

     

    const camTalks = await client.fetch(`*[_type == "camTalks"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return camTalks 
}
// --------------------------------------------------------------------------------------------

export const getCounter = async ()  => {

     

    const counter = await client.fetch(`*[_type == "counter"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return counter 
}
// --------------------------------------------------------------------------------------------

export const getPeopleTalks = async ()  => {

     

    const peopleTalks = await client.fetch(`*[_type == "peopleTalks"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return peopleTalks 
}
// --------------------------------------------------------------------------------------------

export const getRegularActivities = async ()  => {

     

    const regularActivities = await client.fetch(`*[_type == "regularActivities"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return regularActivities 
}
// --------------------------------------------------------------------------------------------

export const getSchoolPrograms = async ()  => {

     

    const schoolPrograms = await client.fetch(`*[_type == "schoolPrograms"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return schoolPrograms 
}
// --------------------------------------------------------------------------------------------

export const getStudyCircles = async ()  => {

     

    const studyCircles = await client.fetch(`*[_type == "studyCircles"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return studyCircles 
}
// --------------------------------------------------------------------------------------------

export const getCommittees = async ()  => {

     

    const committees = await client.fetch(`*[_type == "committees"]`,{cache : "no-store"} ,{next : {revalidate : 2}})

    return committees 
}