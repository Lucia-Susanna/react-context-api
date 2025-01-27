
const PostsList = (prop) => {
  const posts = prop.posts
  return (
    <div className="container">
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostsList
