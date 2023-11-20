import React from 'react'

export default async function getUsers() {
    try {
        const res = await fetch(`https://cam-sust.vercel.app/api/users`,{cache : "no-store"})
        if (!res.ok) {
          throw new Error("faild to fetch comments")
        }
        return res.json()
      } catch (error){
        console.log("error getting comments", error)
      }

  }