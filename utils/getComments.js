import React from 'react'

export default async function getComments(slug) {
    try {
        const res = await fetch(`https://cam-sust.vercel.app/api/comments?slug=${slug}`,{cache : "no-store"})
        if (!res.ok) {
          throw new Error("faild to fetch comments")
        }
        return res.json()
      } catch (error){
        console.log("error getting comments", error)
      }

  }