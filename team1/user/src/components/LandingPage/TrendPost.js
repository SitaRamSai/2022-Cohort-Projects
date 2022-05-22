import React from "react";
import PostTile from './PostTile';
import { Posts} from './PostTileStyled';

function TrendPost(props) {

    const items = props.posts
    const shuffledItems = items.sort(() => Math.random() - 0.5)

    let count = 1;
    const listItems = shuffledItems.slice(0,6).map((post) =>

        <PostTile key = {post.id}
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




