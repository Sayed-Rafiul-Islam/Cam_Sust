"use server"

export default async function createUser(data) {

    const {name,role,email} = data
    const res = await fetch(`https://cam-sust.vercel.app/api/users`, {
        method : "PUT",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({name,role,email})
    }) 
    
}