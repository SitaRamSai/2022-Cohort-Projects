import React, { useState } from "react";
import PostTile from './PostTile';
import { Posts} from './PostTileStyled';

function TrendPost(props) {


    let count = 1;
    const listItems = props.posts.slice(0,6).map((post) =>

        <PostTile 
        count = { count++ }
        userImg = { post.user.userImg }
        userName = {post.user.userName}
        title = {post.title}
        dateCreated = {post.dateCreated}
        readLength = {post.readLength}
        />
    );

    return <Posts> {listItems} </Posts>;

}
    
export default TrendPost;




