import PostsPage from "./components/PostsPage"
import { PostsProvider } from "./contexts/PostsContext"

const App = () => {
  return (
    <PostsProvider>
      <PostsPage />
    </PostsProvider>
  )
}

export default App
