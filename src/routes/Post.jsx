import { useParams } from "react-router-dom"
import { useFerch } from "../hooks/useFerch"

const Post = () => {

  const params = useParams()
  const {data, error, loading} = useFerch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
 
  if(loading){
    return <h2>Loading...</h2>
  }
  if(error !== ''){
    return <h2>{error}</h2>
  }

 return (
    <div>
      <h1>{data.id} - {data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default Post