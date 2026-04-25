import { Link } from 'react-router';
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import {useState, useEffect} from 'react'
import axios from 'axios'

function BlogPostsPage(){

    const [postData, setPosts] = useState([]);

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className='bg-white text-black min-h-screen' >
            <Header/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 col-span-1 mb-15'>
                {postData.map(post =>(
                    <div key={post.id} className='border-2 rounded-2xl p-4 m-2'>
                        <h1 className='font-bold text-2xl'>{post.title}</h1>
                        <p className='mb-4'>{post.body.substring(0,100)}</p>
                        <Link to={`/blogposts/${post.id}`} className='bg-purple-950 text-white rounded-sm p-2'>Read More</Link>
                    </div>
                ))}               
            </div>
            <Footer/>
        </div>
    )
}

export default BlogPostsPage;