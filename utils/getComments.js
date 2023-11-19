import React from 'react'

export default async function getComments() {
    try {
        const res = await fetch(`https://cam-sust.vercel.app/api/comments`)
        if (!res.ok) {
          throw new Error("faild to fetch comments")
        }
        return res.json()
      } catch (error){
        console.log("error getting comments", error)
      }

  }