import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>Everything about the prson is here</h3>
            <h4>Name: {friend.name}</h4>
            <h4>Phone: {friend.phone}</h4>
        </div>
    );
};

export default FriendDetail;