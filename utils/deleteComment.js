export default async function deleteComment(_id) {
    const res = await fetch(`http://localhost:3000/api/comments?_id=${_id}`, {
        method : "DELETE"
    })

    console.log(_id)
    
}
