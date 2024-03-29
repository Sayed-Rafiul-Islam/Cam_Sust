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
                      <div className='flex justify-between'>
                        
                        <div>
                            <h2 className='text-2xl font-bold text-red-900'>{name}</h2>
                            <p>{comment}</p>
                        </div>
                        <div>
                              <p className='text-sm float-right text-gray-500 mr-10'>{date}</p>
                              <button onClick={()=>handleComment(_id)} className='px-2 py-2 del-btn'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg></button>
                        </div>
                    </div>
                    :
                    <div className='flex justify-between'>
                        
                        <div>
                            <h2 className='text-2xl font-bold text-red-900'>{name}</h2>
                            <p>{comment}</p>
                        </div>
                        <div>
                              <p className='text-sm float-right text-gray-500 mr-10'>{date}</p>
                        </div>
                    </div>
                    }
                  </div>
      )
      })             
    }</>
  )
}
