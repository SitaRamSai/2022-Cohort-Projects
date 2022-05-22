import React from "react";

import {
    Num, 
    PostCount, 
    Tile, 
    UserDiv, 
    UserImg, 
    PostInfo, 
    DateCreated, 
    ReadLength
} from './PostTileStyled';

const PostTile = (props) => {
    const {
        count,
        userImg,
        userName,
        title,
        dateCreated,
        readLength
    } = props;

    return (
        <Num>
            <PostCount>{ count }</PostCount>
            <Tile>
                <UserDiv>
                    <UserImg src={userImg} alt = 'userImage' />
                    <h4>{userName}</h4>
                </UserDiv>

                <h3>{ title }</h3>

                <PostInfo>
                    <DateCreated>{ dateCreated }</DateCreated>
                    <ReadLength>{ readLength }</ReadLength>
                </PostInfo>

            </Tile>
        </Num>
        
    )
}

export default PostTile;