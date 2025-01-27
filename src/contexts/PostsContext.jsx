import { createContext, useContext, useState } from "react";
import axios from "axios";
const PostsContext = createContext()

const PostsProvider = ({ children }) => {

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

  return (
    <PostsContext.Provider value={{ postsList, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

const usePostsContext = () => {
  return useContext(PostsContext)
}
export { PostsProvider, usePostsContext }