
import { createClient } from "next-sanity";


export const getCounter = async ()  => {

  const client = createClient({
    projectId : "f89xy3cs",
    dataset : "production",
    apiVersion : "2023-11-05",
    useCdn : true
}) 

  const counter = await client.fetch(`*[_type == "counter"]`,
  {next : {tags : ['counter'], revalidate : 0}})

  return counter 
}
