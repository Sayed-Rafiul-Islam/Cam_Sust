export default async function deleteComment(_id) {
    const res = await fetch(`https://cam-sust.vercel.app/api/comments?_id=${_id}`, {
        method : "DELETE"
    })

    console.log(_id)
    
}
