import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create-note" element={<AddPostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
