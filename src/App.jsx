import './App.css';
import BlogPost from './Components/IndividualBlogPost/IndividualBlogPost';
import BlogPostsPage from './Components/BlogPostPage/BlogPostPage';
import Login from './Components/Login/Login'
import { Routes, Route } from 'react-router';
import { AuthProvider } from './Components/Authorization/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<BlogPostsPage/>} />
        <Route path='/blogposts' element={<BlogPostsPage/>} />
        <Route path='/blogposts/:post_id' element={<BlogPost/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
