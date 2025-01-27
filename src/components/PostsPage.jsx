import PostsList from "./PostsList"
import { useEffect } from "react"
import { usePostsContext } from "../contexts/PostsContext"


const PostsPage = () => {
  const { postsList, fetchPosts } = usePostsContext()

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
