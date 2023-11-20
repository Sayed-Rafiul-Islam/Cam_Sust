import React from 'react'

export default async function getUser() {
    try {
        const res = await fetch(`http://localhost:3000/api/users/${email}`,{cache : "no-store"})
        if (!res.ok) {
          throw new Error("faild to fetch comments")
        }
        return res.json()
      } catch (error){
        console.log("error getting comments", error)
      }

  }