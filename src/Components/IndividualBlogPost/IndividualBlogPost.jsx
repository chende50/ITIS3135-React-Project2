import Content from './Content';
import Comments from '../Comments/Comments';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { useParams } from 'react-router';
import {useState, useEffect} from 'react';
import axios from 'axios';

function IndividualBlogPost(){
    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);
                setPostData(postRes.data);

                const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
                setAuthorData(authorRes.data);
            }catch(e){
                console.log(e);
            }finally{
                setLoading(false);
            }
        
        };

        fetchData();
    }, []);



    return (
        <div className='bg-white min-h-screen'> 
            <Header/>
            {loading ? (
                <div>
                    <div className='container flex flex-row justify-center items-center text-center text-3xl font-bold p-20'>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-100ms]'>L</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-200ms]'>o</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-300ms]'>a</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-400ms]'>d</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-500ms]'>i</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-600ms]'>n</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-700ms]'>g</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-800ms]'>.</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-900ms]'>.</h3>
                        <h3 className = 'animate-[bounce_.5s_linear_infinite_-1000ms]'>.</h3>
                    </div>
                    <Footer/>
                </div>
            ) : (
                <div>
                    <div className='flex flex-col align-center border-2 rounded-md mt-4 ml-8 mr-8 mb-32 p-5 border-gray-400'>
                        <Content 
                            title={postData.title}
                            content={postData.body}
                            author={authorData.name}
                        />
                        <Comments/>
                    </div>
                    <Footer/>
                </div>
            )}
        </div>
    );
}

export default IndividualBlogPost;