import './App.css';
import BlogPost from './Components/IndividualBlogPost/IndividualBlogPost';
import BlogPostsPage from './Components/BlogPostPage/BlogPostPage';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BlogPostsPage/>} />
      <Route path='/blogposts' element={<BlogPostsPage/>} />
      <Route path='/blogposts/:post_id' element={<BlogPost/>} />
    </Routes>
  );
}

export default App;
