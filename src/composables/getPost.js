import { ref } from "@vue/reactivity"

export function getPost (id){
  const post = ref(null)
  const error = ref(null)

  async function load() {
  try{
    let data = await fetch('http://localhost:3000/posts/' + id )
    
    if(!data.ok){
      throw Error("this post is not exist")
    }
    post.value = await data.json()
  }
  catch(err){
      error.value = err.message
  }
    }
    return{post,error,load}
}
