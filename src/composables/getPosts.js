import { ref } from "@vue/reactivity"

export function getPosts (){
  const posts = ref([])
  const error = ref(null)

  async function load() {
  try{
    let data = await fetch('http://localhost:3000/posts')
    
    if(!data.ok){
      throw Error("no data available")
    }
    posts.value = await data.json()
  }
  catch(err){
      error.value = err.message
  }

  
    }
    return{posts,error,load}
}
