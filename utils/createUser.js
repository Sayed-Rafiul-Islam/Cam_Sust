"use server"

export default async function createUser(data) {

    const {name,role,email} = data

    const res = await fetch(`http://localhost:3000/api/users`, {
        method : "PUT",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({name,role,email})
    })
    
}