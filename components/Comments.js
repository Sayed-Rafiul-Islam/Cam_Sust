"use client"
import deleteComment from '@/utils/deleteComment'
import './module.comment.css'

const checkAccessLevel = (users) => {
  if (typeof window !== 'undefined') {
    const email = localStorage.getItem("email")
    const currentUser = users.filter(user => user.email === email)
    const admin = currentUser[0]?.role === "admin" ? true : false
    return admin
    
  }
}

const handleComment = (_id) => {
  const confirmed = confirm("Are you sure?")
  if (confirmed) {
    deleteComment(_id)
  }

}



export default function Comments({comments,users}) {
  const admin = checkAccessLevel(users)
  return (
    <>
    {
      comments && comments.map(({name,comment,updatedAt,_id})=>{
      const date = new Date (updatedAt).toISOString().split("T")[0]
      return (
        <div key={_id} className='comment-card pl-5 py-5 my-10'>
                    {
                      admin ?
                      <div>
                        <p className='text-sm float-right text-gray-500 mr-10'>{date}</p>
                        <h2 className='text-2xl font-bold text-red-900'>{name}</h2>
                        <p>{comment}</p>
                        <button onClick={()=>handleComment(_id)} className='bg-red-600 text-white p-5'>delete</button>
                    </div>
                    :
                    <div>
                        <p className='text-sm float-right text-gray-500 mr-10'>{date}</p>
                        <h2 className='text-2xl font-bold text-red-900'>{name}</h2>
                        <p>{comment}</p>
                    </div>
                    }
                  </div>
      )
      })             
    }</>
  )
}
