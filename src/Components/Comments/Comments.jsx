import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function Comments(){
    const params = useParams();
    
    //State for individual contents
    const [comment, setComment] = useState({
        name: '',
        content: ''
    });

    //State for comment list
    const [commentList, setCommentList] = useState([]);

    const addComment = (comment) => (
        setCommentList([...commentList, comment])
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newComment = {
            name: comment.name,
            body: comment.content,
            id: params.post_id
        }
        postComment();
        addComment(newComment);
        
        setComment({
            name: '',
            content: ''
        })
    };

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`)
        .then(response => setCommentList((response.data)))
        .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const postComment = () => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`,{
            name: comment.name,
            body: comment.content
        })
        .then()
    }

    return(
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <p className='text-lg font-bold my-2'>Leave a comment:</p>
                    <input 
                        className='bg-white border-2 rounded-md mb-2 p-1' 
                        placeholder="Name"
                        value={comment.name}
                        required
                        onChange={(e) => setComment({...comment, name: e.target.value})}>
                    </input>
                    <textarea 
                        className='bg-white border-2 rounded-md p-1'
                        rows='3' cols='5' 
                        placeholder='Write your comment here'
                        value={comment.content}
                        required
                        onChange={(e) => setComment({...comment, content: e.target.value})}>
                    </textarea>
                <button 
                    className='bg-[#a94545] border-0 text-white p-2 mt-2 rounded-md self-start hover:bg-red-800'
                    type='submit'
                    onSubmit={handleSubmit}
                >Submit</button>
            </form>
            <br/>
            {commentList.length === 0 ? (
                <p className='text-center text-gray-600'>No comments yet. Be the first to comment!</p>
            ) : (
                <div>
                    <strong>Existing Comments: </strong>
                    <ul className='list-disc pl-8 font-'>
                    {commentList.map((item) => (
                        <li key={item.id}>
                            <h1 className='font-bold'>{item.name}: </h1>
                            <p>{item.body}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            )}
        </div>
   ); 
}

export default Comments