import React from 'react';
import PostCard from './PostCard';
import { Posts } from './PostCardStyled'


const PostList = (props) => {

    const postList = props.posts.map( (post) => 
        <PostCard key = {post.id}
        userImg = { post.user.userImg }
        userName = { post.user.userName }
        title = { post.title }
        subtitle = { post.subtitle }
        dateCreated = { post.dateCreated }
        readLength = { post.readLength }
        postImg = { post.postImg }
        />
    );
    
    return (
        <Posts>
            { postList }
        </Posts>
    )
}

export default PostList;