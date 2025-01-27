import PostsList from "./PostsList"
import { useState, useEffect } from "react"
import axios from "axios"

const PostsPage = () => {

  const apiUrl = "http://localhost:3000";
  const [postsList, setPostsList] = useState([])

  const fetchPosts = () => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        setPostsList(res.data)
      })
      .catch(err => {
        console.error(`Errore nel caricamento: ${err}`);
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div>
      <h1>Ricette Salvate</h1>
      < PostsList posts={postsList} />
    </div>
  )
}

export default PostsPage
