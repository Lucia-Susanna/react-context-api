
const PostsList = (prop) => {
  const posts = prop.posts
  return (
    <div className="container">
      <ul>
        {posts.map(post => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostsList
