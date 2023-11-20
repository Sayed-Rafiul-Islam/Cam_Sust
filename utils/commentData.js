"use server"

export default async function commentData(data) {

    const {name,comment,slug} = data

    const res = await fetch('http://localhost:3000/api/comments', {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({name,comment,slug})
    })
    
}


