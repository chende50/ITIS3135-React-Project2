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
                <div className='grid grid-cols-3 grid-rows-3'>
                    <p className='text-center text-3xl font-bold animate-spin [animation-duration:.5s] p-20'>Loading...</p>
                    <p className='text-center text-3xl font-bold animate-spin [animation-duration:1s] p-20'>Loading...</p>
                    <p className='text-center text-3xl font-bold animate-spin [animation-duration:2s] p-20'>Loading...</p>
                    
                    <div class='container flex flex-row justify-center items-center text-center text-3xl font-bold p-20'>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_1ms]'>L</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_2ms]'>o</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_3ms]'>a</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_4ms]'>d</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_5ms]'>i</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_6ms]'>n</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_7ms]'>g</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_8ms]'>.</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_9ms]'>.</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_10ms]'>.</h3>
                    </div>
                    <div class='container flex flex-row justify-center items-center text-center text-3xl font-bold p-20'>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_10ms]'>L</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_20ms]'>o</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_30ms]'>a</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_40ms]'>d</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_50ms]'>i</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_60ms]'>n</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_70ms]'>g</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_80ms]'>.</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_90ms]'>.</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_100ms]'>.</h3>
                    </div>
                    <div class='container flex flex-row justify-center items-center text-center text-3xl font-bold p-20'>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_100ms]'>L</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_200ms]'>o</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_300ms]'>a</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_400ms]'>d</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_500ms]'>i</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_600ms]'>n</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_700ms]'>g</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_800ms]'>.</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_900ms]'>.</h3>
                        <h3 class = 'animate-[bounce_.5s_linear_infinite_1000ms]'>.</h3>
                    </div>
                    
                    <div className='animate-spin'>
                        <div className='animate-pulse'>
                            <div className='animate-bounce'>
                                <p className='text-center text-3xl font-bold animate-spin p-20'>Loading...</p>
                            </div>
                        </div>
                    </div>
                    <div className='animate-spin flex flex-col'>
                        <div className='animate-pulse'>
                            <div className='animate-bounce'>
                                <p className='text-center text-3xl font-bold animate-spin p-20'>Loading...</p>
                            </div>
                        </div>
                    </div>
                    <div className='animate-spin flex flex-row'>
                        <div className='animate-pulse'>
                            <div className='animate-bounce'>
                                <p className='text-center text-3xl font-bold animate-spin p-20'>Loading...</p>
                            </div>
                        </div>
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