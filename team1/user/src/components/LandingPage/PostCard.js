import React from "react";
import { 
    Card, 
    UserDiv, 
    UserImg, 
    UserName,
    PostInfo,
    PostTitle, 
    PostSubTitle,
    PostImage,
    DateCreated, 
    ReadLength
} from "./PostCardStyled";

const PostCard = (props) => {
    const {
        userImg,
        userName,
        title,
        subtitle,
        postImg,
        dateCreated,
        readLength
    } = props;
    return(
        <Card>
            <UserDiv>
                <UserImg src = { userImg } alt = 'userImg'/>
                <UserName>{ userName }</UserName>
            </UserDiv>

            <PostInfo>
                <PostTitle>{ title }</PostTitle>
                <PostSubTitle> {subtitle} </PostSubTitle>
                <PostImage src = { postImg } alt = 'postImg'/>
                <DateCreated> {dateCreated} </DateCreated>
                <ReadLength> {readLength} </ReadLength>
            </PostInfo>
            
        </Card>
    )
}

export default PostCard;