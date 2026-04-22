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
                <p className='text-center text-3xl font-bold'>Loading...</p>
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