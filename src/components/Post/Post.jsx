import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const{id, title, body} =post;
    const handleNavigation =()=>{

    }
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h5>{title}+</h5>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show post details</button></Link>
            <button onClick={handleNavigation}>with handler</button>
        </div>
    );
};

export default Post;